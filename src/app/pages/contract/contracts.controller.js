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
    var formData = vm.card;
    console.log(card);
    if(!vm.verifyObject(formData)) {
      var contract = {"budget": "R$ 43000000,00",
      "person": "Lucas Batista",
      "organization": "Alphadog",
      "Project": "Contract",
      "startDate": 1490357876,
      "endDate": 1490357876 }
      var jsonData = JSON.stringfy(contract);
      $http.post('https://alpha-contract-backend.herokuapp.com/contract', jsonData)
        .then((response)=>  {
          if(response.data.confirmation == true) {
            alert("Contrato gerado com Sucesso!");
          } else {
            alert("Erro no processamento, por favor tente novamente.");
          }
        });
     } else {
      alert("Selecione o checkbox");
    }
  }

  vm.getPaymentList = function () {
    $http.get('http:localhost:3000/payments')
      .then((response) =>  {
        vm.paymentList = response
      });
  }



  vm.verifyObject = function (target) {
    if (target == null || target == false) {
      return true
    }

    for (var member in target) {
        if (target[member] == null)
            return true;
    }
    return false;
  }
}
export default contractCtrl;
