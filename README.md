# MVC Dashboard

For this challenge I decided to build out the dashboard in Ember. The main goals for the task were to build a dashboard that allowed an end user to quickly compare three MVC frameworks based off of primarily their github activity. The dashboard needed to update itself without manually refreshing and displayed key metrics such as:

 * Commit Activity
 * # of Stars
 * # of Forks
 * # of Subscribers
 * # of Issues

## Process
  
Ember was chosen for this task since it's the framework I know best and would allow me to use an external API the "ember way" for the first time. This ultimately ended up being the most challenging part. I started by learning how ember's [custom link adapter/serializer] (http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/) worked. After understanding how that worked (document is sparse) I started looking around for different charting libraries and played with chart.js before deciding to just go with highcharts. Bootstrap was used for a grid system.

Following Ember's evolving best practices I used no controllers and instead created a Dashboard component that contained multiptle children chart-components. For simplicity there are only two models: "repo" and "weeklyCommits". A repo hasMany weeklyCommits. These models were also influenced by the available backend API.

## More Info

The Repo model contains key attributes such as the name, url, description, star count, fork count, and other similar characteristics. The weeklyCommit model contains only two attributes: week (UTC #) and total (# of commits that week). It allows githubs restful API to be used for the model's backend calls.

The models update themselves every 5 mins via a recursive function that is triggered in the model hook of the dashboard route.

The dashboard component contains most of the key logic. The chart components are rendered using highcharts via a ember addon called [ember-highcharts](https://github.com/ahmadsoe/ember-highcharts). The Google trend charts are inserted via an iframe.

## Next Steps

This serves as a decent "first version" but any further work would require the creation of more models. A chart model in particular would be the next step. This would help DRY up a lot of the redunanct code in the dashboard component surrounding the differnt chart options and data.

Thanks to bootstrap and highcharts the app is mostly response except for the google trend charts. More custom logic would be needed to handle these on samller devices. (yay iframes)

## Final Thoughts

Overall I enjoyed the project. It was my first time using an external API with ember and although it had it's challenges I learned a lot like the direction/potentail of the ember framework. It was also interesting to learn the different US regional interests among the frameworks.
