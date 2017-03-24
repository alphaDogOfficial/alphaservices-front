export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/payment');
  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });

}
