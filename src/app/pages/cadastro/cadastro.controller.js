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
      email:vm.user.email,
      token: vm.generateToken()
    }
    console.log(formData);
    vm.isCpfOk = true;

    $http
      .get("https://evening-dawn-47995.herokuapp.com/user")
        .then((response)=>{
          response.data.forEach((user) => {
            if(vm.isCpfOk && (user.cpf === vm.user.cpf || user.login === vm.user.login)) {
              alert("Login ou CPF informados já cadastrados!");
              vm.isCpfOk = false;
            } else if (user.token === vm.user.token) {
              user.token = vm.generateToken();
            }
          });
           if(vm.isCpfOk) {
            $http
            .post('https://evening-dawn-47995.herokuapp.com/user', formData)
              .then((response) => {
                  alert("Afiliação realizada com sucesso!");
                }, (err)=>{
                  console.log('err', err);
                  alert("Erro, tente novamente mais tarde");
                });
            }
        });
   
  };

  vm.generateToken = function() {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) ; 
  }

  vm.loginUser = function() {
    console.log(vm.user);
    if (vm.user.login != null && vm.user.password != null) {

       $http
        .get('https://evening-dawn-47995.herokuapp.com/user?login='+vm.user.login+"&password="+password)
          .then((response) => {
            if(response.data != null) {
              $localStorage.currentUser = {token: response.data.token, nome: response.data.name};
              
            } else {
              alert("Usuário ou senha não encontrados, por favor tente novamente.");
            }
          }, function(err) {
            console.log('err', err);
            alert("Ocorreu um erro, tente novamente.")
          });
      }

  } 



}
export default cadastroCtrl;
