import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./payment.html';
import '!ng-cache!./listPayment.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('payment', {
      url: '/payment',
      templateUrl: 'payment.html',
      controller: 'paymentCtrl',
      controllerAs: 'payCtrl'
    })
    .state('listPayment', {
    	url: '/listPayment',
    	templateUrl: 'listPayment.html',
    	controller: 'paymentCtrl',
      	controllerAs: 'payCtrl'
    });

}
