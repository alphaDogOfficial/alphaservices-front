import TSConfig from '../../factories/constants.js';

var reviewsCtrl = function ($rootScope, crudService, $state, $scope, $http, $stateParams) {
  $scope.table = $stateParams.type;

  if($scope.table == 'integrator')
  	$scope.type = 'Integradores'
  else if($scope.table == 'provider')
  	$scope.type = "Fornecedores"
  else
  	$scope.type = 'Serviços';

  $rootScope.isHomeActive = false;
  $rootScope.isReviewsActive = true;

  crudService.get("review")
    .then(function(response){
      $scope.reviews = response.data;
      crudService.get($scope.table)
      .then(function(response){
        $scope.items = response.data;
      }, function(err) {
        console.log('error', err);
      });
    }, function(err) {
      console.log('error', err);
    });

  $scope.hasReview = function(id) {
    return ($scope.reviews.some(function(e) { return e.typeId == id && e.type == $scope.table }))
  }


}
export default reviewsCtrl;
