import TSConfig from '../../factories/constants.js';

var budgetCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;
  vm.isDisabled = false;
  vm.today = new Date()

  $http.get('http://alpha-contract-backend.herokuapp.com/budget?userType=Fornecedor').then((response) =>  {
    vm.empreiteiros = response.data
  });

  $http.get('http://alpha-contract-backend.herokuapp.com/budget?userType=Integrador').then((response) =>  {
    vm.clientes = response.data
  });

  $scope.states = ('Integrador Fornecedor').split(' ').map(function(state) {
    return {abbrev: state};
  });

  vm.processNewBudget = function () {
    vm.isDisabled = true;
    var formData = vm.params;
    console.log(formData);
    if(formData != null ) {
      var jsonData = JSON.stringify(formData);
      if(!vm.verifyObject(formData)) {
        if(vm.params.userType == 'Integrador') {
          $http.post('http://alpha-contract-backend.herokuapp.com/budget', jsonData)
          .then((response)=>  {
              vm.isDisabled = false;
              alert("Orçamento gerado com sucesso!");
              $state.go('home');
          });
        } else {
          $http.post('http://alpha-contract-backend.herokuapp.com/budget', jsonData)
          .then((response)=>  {
              vm.isDisabled = false;
              alert("Orçamento gerado com sucesso!");
              $state.go('home');
          });
        }
       } else {
        vm.isDisabled = false;
        alert("Erro na submissão das informações");
      }
    } else {
      vm.isDisabled = false;
      alert("Erro na submissão das informações");
    }
  }

  vm.verifyObject = function (target) {
    if (target == null) {
      return true
    }

    for (var member in target) {
        if (target[member] == null)
            return true;
    }

    return false;
  }
}
export default budgetCtrl;
