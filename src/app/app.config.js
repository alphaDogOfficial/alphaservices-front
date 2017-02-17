export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });

}
