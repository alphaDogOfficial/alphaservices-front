export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $opbeatProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/payment');

  $opbeatProvider.config({
        orgId: 'dd20edcfbeeb4f32b725f21a7b6a28f6',
        appId: '38bf13e883'
    });
  //
  // $stateProvider
  //   .state('content', {
  //     url: '/',
  //     template: require('./components/content/content.html')
  //   });

}
