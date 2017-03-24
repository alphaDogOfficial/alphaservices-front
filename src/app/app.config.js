export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $opbeatProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  $opbeatProvider.config({
    orgId: '549e90d5f91f465c8ade7d5c166b930b',
    appId: '280c183228'
  })
  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });

}
