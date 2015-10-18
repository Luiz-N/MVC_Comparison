import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id    :  payload.full_name,
        type  :  type.modelName,
        attributes: {
          githubURL    :  payload.html_url,
          homepage     :  payload.homepage,
          description  :  payload.description,
          repoName     :  payload.name,
          starCount    :  payload.stargazers_count,
          forkCount    :  payload.forks_count,
          openIssues   :  payload.open_issues,
          subscribers  :  payload.subscribers_count
        },
        relationships: {
          weeklyCommits: {
            links: {
              related: 'https://api.github.com/repos/' + payload.full_name + '/stats/commit_activity'
            }
          }
        }
      }
    };
  }
});
