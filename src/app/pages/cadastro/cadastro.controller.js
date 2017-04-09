import TSConfig from '../../factories/constants.js';

var cadastroCtrl = function (crudService, $state, $scope, $http) {
  var vm = this;
  vm.user = {};
  vm.isLoginOk = true;
  vm.isCpfOk = true;


  vm.createUser = function () {
    var formData = {
      name:vm.user.nome,
      login:vm.user.login,
      password:vm.user.senha,
      cpf:vm.user.cpf,
      phone:vm.user.telefone,
      email:vm.user.email
    }
    console.log(formData);
    $http
      .post('https://evening-dawn-47995.herokuapp.com/payments', formData)
        .then( (response)=>{
            alert("Afiliação realizada com sucesso!")
          }, (err)=>{
            console.log('err', err);
            alert("Erro, tente novamente mais tarde")
          })
  };

}
export default cadastroCtrl;
