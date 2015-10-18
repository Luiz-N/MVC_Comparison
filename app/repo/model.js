import DS from 'ember-data';

export default DS.Model.extend({
  githubURL    :  DS.attr('string'),
  homepage     :  DS.attr('string'),
  description  :  DS.attr('string'),
  repoName     :  DS.attr('string'),
  starCount    :  DS.attr('number'),
  forkCount    :  DS.attr('number'),
  subscribers  :  DS.attr('number'),
  openIssues   :  DS.attr('number'),
  imagePath    :  DS.attr('string'),

  weeklyCommits  :  DS.hasMany('weeklyCommits')
  // language: DS.attr('string')
});
