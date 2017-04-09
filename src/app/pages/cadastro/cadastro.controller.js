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
      .get("https://evening-dawn-47995.herokuapp.com/user")
        .then((response)=>{
          response.data.forEach((user) => {
            if(user.cpf === vm.user.cpf || user.login === vm.user.login) {
              alert("CPF informado já cadastrado!");
              return;
            }
          });
           $http
            .post('https://evening-dawn-47995.herokuapp.com/user', formData)
              .then((response) => {
                  alert("Afiliação realizada com sucesso!")
                }, (err)=>{
                  console.log('err', err);
                  alert("Erro, tente novamente mais tarde")
                });
        });
   
  };

}
export default cadastroCtrl;
