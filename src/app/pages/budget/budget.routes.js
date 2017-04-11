import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./newBudget.html';
import '!ng-cache!./myBudgets.html';
import '!ng-cache!./detailBudgets.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('newBudget', {
      url: '/newBudget',
      templateUrl: 'newBudget.html',
      controller: 'budgetCtrl',
      controllerAs: 'budgetCtrl'
    })
    .state('detailBudgets', {
      url: '/detailBudget/:id',
      templateUrl: 'detailBudgets.html',
      controller: 'detailCtrl',
      controllerAs: 'detailCtrl'
    })
    .state('myBudgets', {
    	url: '/myBudgets',
    	templateUrl: 'myBudgets.html',
    	controller: 'budgetCtrl',
      	controllerAs: 'budgetCtrl'
    });

}
