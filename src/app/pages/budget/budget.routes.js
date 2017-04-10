import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./newBudget.html';
import '!ng-cache!./myBudgets.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('newBudget', {
      url: '/newBudget',
      templateUrl: 'newBudget.html',
      controller: 'budgetCtrl',
      controllerAs: 'budgetCtrl'
    })
    .state('myBudgets', {
    	url: '/myBudgets',
    	templateUrl: 'myBudgets.html',
    	controller: 'budgetCtrl',
      	controllerAs: 'budgetCtrl'
    });

}
