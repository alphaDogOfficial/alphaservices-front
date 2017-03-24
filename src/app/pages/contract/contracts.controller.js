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
    var jsonData = JSON.stringfy(formData);
    if(!vm.verifyObject(formData)) {
      $http.post('http://localhost:3000/payments', jsonData)
        .then((response)=>  {
          if(response.data.confirmation == true) {
            alert("Pagamento efetuado!");
          } else {
            alert("Erro no processamento, por favor tente novamente.");
          }
        });
     } else {
      alert("Erro na submissão das informações");
    }
  }

  vm.getPaymentList = function () {
    $http.get('http:localhost:3000/payments')
      .then((response) =>  {
        vm.paymentList = response
      });
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
export default contractCtrl;
