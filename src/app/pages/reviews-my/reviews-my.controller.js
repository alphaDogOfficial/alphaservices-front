import TSConfig from '../../factories/constants.js';

var myReviewsCtrl = function ($rootScope, crudService, $state, $scope, $http, $stateParams) {
  var vm = this;

  $rootScope.isHomeActive = false;
  $rootScope.isReviewsActive = true;

  $scope.type = $stateParams.type;
  
  crudService.get(table)
    .then(function(response){
      $scope.reviews = response.data;
    }, function(err) {
      console.log('error', err);
    });

}
export default myReviewsCtrl;
