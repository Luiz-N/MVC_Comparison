import Ember from 'ember';

export default Ember.Component.extend({

  repos : null,
  chart : null,

  dates: Ember.computed('repos.@each.weeklyCommits',
    function () {
      return this.get('repos.firstObject.weeklyCommits').getEach('week');
    }
  ),

  lineData: Ember.computed('repos.[]',
    function () {
      var dates = this.get('dates');
      return this.get('repos').map(function(repo, i){
        var data = repo.get('weeklyCommits').getEach('total').map(
          function(elem, i) {
          return [dates.objectAt(i)*1000, elem];
        });
          return {
            name: repo.get('repoName'),
            data: data
          };
      });
    }
  ),

  lineOptions: Ember.computed('repos.[]',
    function () {
      return {
        chart: {
          type: 'spline'
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false
            }
          }
        },
        title: {
          text: 'YTD Weekly Commits'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Commits'
          }
        }
      };
    }
  ),

  starData: Ember.computed('repos.[]',
    function () {
      return [{
          name: 'Stars',
          data: this.get('repos').getEach('starCount'),
          showInLegend: false
        }];
    }
  ),

  starOptions: Ember.computed('repos.[]',
    function () {
      var repoNames = this.get('repos').getEach('repoName');
      return {
        chart: {
          type: 'column',
          height: 350
        },
        plotOptions: {
          series: {
            color: 'navy',
          }
        },
        title: {
          text: 'Stars per Framework'
        },
        xAxis: {
          categories: repoNames
        },
        yAxis: {
          title: {
            text: 'Stars'
          }
        }
      };
    }
  ),

  forkData: Ember.computed('repos.[]',
    function () {
      return [{
        name: 'Forks',
        data: this.get('repos').getEach('forkCount'),
        showInLegend: false
      }];
    }
  ),

  forkOptions: Ember.computed('repos.[]',
    function () {
      var repoNames = this.get('repos').getEach('repoName');
      return {
        chart: {
          type: 'column',
          height: 350
        },
        plotOptions: {
          series: {
            color: 'salmon'
          }
        },
        title: {
          text: 'Forks per Framework'
        },
        xAxis: {
          categories: repoNames
        },
        yAxis: {
          title: {
            text: 'Forks'
          }
        }
      };
    }
  ),

  subscriberData: Ember.computed('repos.[]',
      function () {
        return [{
          name: 'subscribers',
          data: this.get('repos').getEach('subscribers'),
          showInLegend: false
        }];
      }
    ),

    subscriberOptions: Ember.computed('repos.[]',
      function () {
        var repoNames = this.get('repos').getEach('repoName');
        return {
          chart: {
            type: 'column',
            height: 350
          },
          plotOptions: {
            series: {
              color: 'lime'
            }
          },
          title: {
            text: 'Subscribers per Framework'
          },
          xAxis: {
            categories: repoNames
          },
          yAxis: {
            title: {
              text: 'subscribers'
            }
          }
        };
      }
    ),

    issueData: Ember.computed('repos.[]',
      function () {
        return [{
          name: 'Open Issues',
          data: this.get('repos').getEach('openIssues'),
          showInLegend: false
        }];
      }
    ),

    issueOptions: Ember.computed('repos.[]',
      function () {
        var repoNames = this.get('repos').getEach('repoName');
        return {
          chart: {
            type: 'column',
            height: 350
          },
          plotOptions: {
            series: {
              color: 'purple'
            }
          },
          title: {
            text: 'Open Issues per Framework'
          },
          xAxis: {
            categories: repoNames
          },
          yAxis: {
            title: {
              text: 'Open Issues'
            }
          }
        };
      }
    ),


});
