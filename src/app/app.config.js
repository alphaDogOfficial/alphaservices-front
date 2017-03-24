export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $opbeatProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });
  $opbeatProvider.config({
      orgId: '27da53ede0e84af1aab2f0143d86e48c',
      appId: '97f0c65a6e'
  })
}
