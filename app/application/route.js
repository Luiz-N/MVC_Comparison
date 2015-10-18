export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      react: this.store.findRecord('repo', 'facebook/react'),
      angular: this.store.findRecord('repo', 'angular/angular.js'),
      ember: this.store.findRecord('repo', 'emberjs/ember.js')
    });
  },
  afterModel(model) {
    model.react.set('imagePath', 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png');
    model.angular.set('imagePath', 'http://curran.github.io/screencasts/introToAngular/exampleViewer/angularjs-logo.png');
    model.ember.set('imagePath', 'http://rollerweblogger.org/roller/mediaresource/87879b47-6b14-4c18-a17e-576a68bf62a0');
  }
});
