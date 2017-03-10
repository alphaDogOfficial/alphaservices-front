import TSConfig from '../../factories/constants.js';

var reviewsCtrl = function ($rootScope, crudService, $state, $scope, $http, $stateParams) {
  var vm = this;
  var table = $stateParams.type;

  if(table == 'integrator')
  	$scope.type = 'Integradores'
  else if(table == 'provider')
  	$scope.type = "Fornecedores"
  else
  	$scope.type = 'Serviços';

  $rootScope.isHomeActive = false;
  $rootScope.isReviewsActive = true;

  crudService.get(table)
    .then(function(response){
      $scope.items = response.data;
    }, function(err) {
      console.log('error', err);
    });

}
export default reviewsCtrl;
