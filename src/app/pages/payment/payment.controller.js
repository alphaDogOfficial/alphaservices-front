import TSConfig from '../../factories/constants.js';

var paymentCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;
  vm.showCard = false;

  $http.get('https://evening-dawn-47995.herokuapp.com/payments')
      .then((response) =>  {
        vm.paymentList = response.data
      });
  

   vm.cardSelected = function() {
    vm.showCard = true;
  }


  vm.processPayment = function () {
    var formData = vm.pmt;
    if(formData != null ) {
      var jsonData = JSON.stringify(formData);
      if (formData.card != null && formData.card.card != null){
        var cartao = vm.testarCC(formData.card.card);
      } else {
        var cartao = true;
      }
      
      if(!vm.verifyObject(formData) && cartao != false) {
        $http.post('https://evening-dawn-47995.herokuapp.com/payments', jsonData)
          .then((response)=>  {
              alert("Pagamento efetuado!");
          });
       } else {
        alert("Erro na submissão das informações");
      }
    } else {
      alert("Erro na submissão das informações");
    }
      
  }

  vm.getPaymentList = function () {
    $http.get('https://evening-dawn-47995.herokuapp.com/payments')
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

 
  vm.testarCC =  function(nr) {
    var cartoes = {
      Visa: /^4[0-9]{12}(?:[0-9]{3})/,
      Mastercard: /^5[1-5][0-9]{14}/,
      Amex: /^3[47][0-9]{13}/,
      DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      JCB: /^(?:2131|1800|35\d{3})\d{11}/
    };
      for (var cartao in cartoes) if (String(nr).match(cartoes[cartao])) return cartao;
      return false;
  }


  vm.validation = function (target) {
    if(target.value != null && target.date != null && target.receiver != null && target.card != null ) {
      return false;
    } 
    return true;
  }
  // vm.createUser = function () {
  //   var formData = {
  //     nome:vm.user.nome,
  //     login:vm.user.login,
  //     senha:vm.user.senha,
  //     cpf:vm.user.cpf,
  //     telefone:vm.user.telefone,
  //     email:vm.user.email
  //   }
  //   console.log(formData);

  //   $http
  //     .get(TSConfig.urlBase + "cliente/check/login/" + formData.login)
  //     .then( (response)=>{
  //       var login = response.data;
  //       $http
  //         .get(TSConfig.urlBase + "cliente/check/cpf/" + formData.cpf)
  //         .then( (response)=>{
  //           var cpf = response.data;
  //             if(!login[0]){
  //               if(!cpf[0]){
  //                 crudService.post('cliente', formData)
  //                   .then(function(){
  //                     vm.isCpfOk = true;
  //                     console.log('Success!');
  //                     // $state.go('home');
  //                   }, function(err){
  //                     console.log('err', err);
  //                   });
  //               }else {
  //                 vm.isLoginOk = true;
  //                 vm.isCpfOk = false;
  //               }
  //             }else {
  //               vm.isLoginOk = false;
  //             }

  //         }, (err)=>{
  //           console.log('err', err);
  //         })
  //     }, (err)=>{
  //       console.log('err', err);
  //     })
  // };
}
export default paymentCtrl;
