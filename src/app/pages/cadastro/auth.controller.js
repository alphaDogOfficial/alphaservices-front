import TSConfig from '../../factories/constants.js';

var authCtrl = function (crudService, $state, $scope, $http, $localStorage, authService, $stateParams) {
  var vm = this;
  vm.user = {};
  vm.user.login = $stateParams.login;
  vm.user.password =$stateParams.password;
  if (vm.user.login != null && vm.user.password != null) {

  return $http
    .get('https://evening-dawn-47995.herokuapp.com/user?login='+vm.user.login+"&password="+vm.user.password)
      .then((response) => {
        if(response.data != null && response.data.length>0) {
          vm.user = response.data[0];
          
          
        } else {
          vm.user = "error, user not found";
        }
      }, function(err) {
        console.log('err', err);
        vm.user = "error, user not found";
      });
  }

  return {"oi": "1"}
  




}
export default authCtrl;
