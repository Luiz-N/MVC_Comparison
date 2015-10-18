import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    // refresh every  5 mins
    var interval = 1000 * 60 * 5;
    Ember.run.later(this, function() {
      this.model().then(function(model) {
        model.forEach(function(repo) {
          //reload repo
          repo.reload();
          // reload weekly commits stats
          repo.get('weeklyCommits').reload();
        })
      }.bind(this));
    }, interval);
    return this.store.findAll('repo');
  },

  afterModel(model, transition) {
    return Ember.RSVP.all(model.getEach('weeklyCommits'));
  },

 setupController(controller, model) {
    controller.set('repos', model);
    // controller.set('labels', model.getEach('repoName'));
    // controller.set('weeklyCommits', model.getEach('weeklyCommits'));
  }
});
