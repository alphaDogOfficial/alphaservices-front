export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $opbeatProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');


  $opbeatProvider.config({
      orgId: '63041e4d148f4db5a4e5ca80c7cc0346',
      appId: '657e8b3c9c'
  })

  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });

}
