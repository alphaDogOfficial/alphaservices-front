import TSConfig from '../../factories/constants.js';

var contractCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;
  vm.showCard = false;

  $http.get('http://localhost:3000/myContracts')
      .then((response) =>  {
        vm.myContracts = response.data
      });


   vm.cardSelected = function() {
    vm.showCard = true
  }

  vm.processNewContract = function () {
    if (vm.card == null) {
      vm.card = false;
    }
    var formData = vm.card;
    console.log(vm.card);
    if(!vm.verifyObject(formData)) {
      var contract = {"budget": "R$ 43000000,00",
      "person": "Lucas Batista",
      "organization": "Alphadog",
      "Project": "Contract",
      "startDate": 1490357876,
      "endDate": 1490357876 }
      var jsonData = JSON.stringify(contract);
      $http.post('https://alpha-contract-backend.herokuapp.com/contract', jsonData)
        .then((response)=>  {
          alert("Contrato gerado com Sucesso!");
        });
     } else {
      alert("Selecione o checkbox");
    }
  }

  vm.verifyObject = function (target) {
    if (target == null || target == false) {
      return true
    }

    return false;
  }
}
export default contractCtrl;
