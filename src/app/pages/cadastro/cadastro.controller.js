import TSConfig from '../../factories/constants.js';

var cadastroCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;

  vm.createUser = function () {
    var formData = {
      nome:vm.user.nome,
      login:vm.user.login,
      senha:vm.user.senha,
      cpf:vm.user.cpf,
      telefone:vm.user.telefone,
      email:vm.user.email
    }
    console.log(formData);
    $http
      .get(TSConfig.urlBase + "cliente/check/login/" + formData.login)
      .then( (response)=>{
        var login = response.data;
        $http
          .get(TSConfig.urlBase + "cliente/check/cpf/" + formData.cpf)
          .then( (response)=>{
            var cpf = response.data;
              if(!login[0]){
                if(!cpf[0]){
                  crudService.post('cliente', formData)
                    .then(function(){
                      vm.isCpfOk = true;
                      console.log('Success!');
                      // $state.go('home');
                    }, function(err){
                      console.log('err', err);
                    });
                }else {
                  vm.isLoginOk = true;
                  vm.isCpfOk = false;
                }
              }else {
                vm.isLoginOk = false;
              }

          }, (err)=>{
            console.log('err', err);
          })
      }, (err)=>{
        console.log('err', err);
      })


  };

}
export default cadastroCtrl;
