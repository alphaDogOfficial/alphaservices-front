import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./checkout.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('checkout', {
      url: '/checkout',
      templateUrl: 'checkout.html',
      controller: 'checkoutCtrl',
      controllerAs: 'coVm'
    });

}
