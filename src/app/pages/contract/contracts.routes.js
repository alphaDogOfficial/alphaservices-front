import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./newContract.html';
import '!ng-cache!./myContracts.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('newContract', {
      url: '/newContract',
      templateUrl: 'newContract.html',
      controller: 'contractCtrl',
      controllerAs: 'contractCtrl'
    })
    .state('myContracts', {
    	url: '/myContracts',
    	templateUrl: 'myContracts.html',
    	controller: 'contractCtrl',
      	controllerAs: 'contractCtrl'
    });

}
