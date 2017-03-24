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
    vm.showCard = true
  }

  // vm.paymentList = [
  //   { "value": "2000", "date": "21/02/2017", "receiver":  "joao", "card": {"name" : "Teste" , "card" : "12112121211211", "cvv" : "224", "expDate" : "02/2022"  } },
  //   { "value": "2000", "date": "21/02/2017", "receiver":  "pedro", "card": {"name" : "Teste3" , "card" : "123331211211", "cvv" : "231", "expDate" : "02/2022" }  },
  //   { "value": "2000", "date": "21/02/2017", "receiver":  "carolina", "card": {"name" : "Teste4" , "card" : "12112127584211", "cvv" : "474", "expDate" : "02/2022" }  },
  //   { "value": "2000", "date": "21/02/2017", "receiver":  "mario", "card": {"name" : "Teste5" , "card" : "129991511211", "cvv" : "825", "expDate" : "02/2022" }  },
  //   { "value": "2000", "date": "21/02/2017", "receiver":  "alexandre", "card": {"name" : "Teste6" , "card" : "12112121211211", "cvv" : "904", "expDate" : "02/2022" }  }
  // ];

  vm.processPayment = function () {
    var formData = vm.card;
    console.log(card);
    if(formData != null ) {
      var jsonData = JSON.stringify(formData);
      if(!vm.verifyObject(formData)) {
        $http.post('https://evening-dawn-47995.herokuapp.com/payments', jsonData)
          .then((response)=>  {
              alert("Pagamento efetuado!");
          });
       } else {
        alert("Erro na submissão das informações");
      }
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
