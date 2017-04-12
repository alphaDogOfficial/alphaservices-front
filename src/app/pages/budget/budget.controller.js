import TSConfig from '../../factories/constants.js';

var budgetCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;
  vm.showCard = false;
  // $http.get('http://alpha-budget-backend.herokuapp.com/budget').then((response) =>  {
  //   vm.myBudgets = response.data
  // });

  vm.empreiteiros = [
    {name: 'Empreiteiro 1'},
    {name: 'Empreiteiro 1'},
    {name: 'Empreiteiro 1'},
    {name: 'Empreiteiro 1'},
    {name: 'Empreiteiro 1'},
    {name: 'Empreiteiro 1'}
  ]

  vm.clientes = [
    {name: 'Cliente 1'},
    {name: 'Cliente 1'},
    {name: 'Cliente 1'},
    {name: 'Cliente 1'},
    {name: 'Cliente 1'},
    {name: 'Cliente 1'}
  ]
    $scope.states = ('Integrador Fornecedor').split(' ').map(function(state) {
        return {abbrev: state};
      });

  vm.processNewBudget = function () {
    if (vm.card == null) {
      vm.card = false;
    }
    var formData = vm.card;
    console.log(vm.card);
    // if(!vm.verifyObject(formData)) {
    //   $http.post('http://alpha-contract-backend.herokuapp.com/contract', jsonData)
    //     .then((response)=>  {
    //       alert("Contrato gerado com Sucesso!");
    //       $state.go('myContracts');
    //     });
    //  } else {
    //   alert("Selecione o checkbox");
    // }
  }

  vm.verifyObject = function (target) {
    if (target == null || target == false) {
      return true
    }

    return false;
  }
}
export default budgetCtrl;
