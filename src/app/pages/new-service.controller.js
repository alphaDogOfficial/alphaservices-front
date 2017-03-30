var newServiceCtrl = function (crudService, authService, $state, $uibModalInstance, $scope, $http) {
  var vm = this;
  vm.error = false;
  $scope.names = ["Reforma", "Jardinagem", "Evento"];
  vm.servico = function() {
    authService.login(vm.user, vm.password, function (result) {
      if (result === true) {
          $state.reload()
          $uibModalInstance.dismiss('cancel');
      }
      vm.error = !result;
    });
  };

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  };

  vm.newService = function() {
    var data = {}
    data.id = guid()
    data.nome = vm.title
    data.descricao = vm.description
    data.tipo = vm.type
    data.valor = "Em andamento"

    crudService.post("andamento", data)
      .then(function(response) {
        vm.close()
      })
    crudService.post("anunciado", data)
      .then(function(response) {
        vm.close()
      })
    // $http.post('https://servicos-back.herokuapp.com/andamento', data).then(vm.close(), vm.close());
    console.log(data);
  };

  vm.signup = function() {

    vm.nameError = false
    vm.loginError = false
    vm.passError = false
    vm.telError = false
    vm.emailError = false
    vm.cpfError = false
    vm.unexError = false

    var data = {}
    data.cpf = vm.cpf
    data.nome = vm.name
    data.login = vm.user
    data.senha = vm.password
    data.telefone = vm.tel
    data.email = vm.email

    if(vm.name === undefined || vm.name == '') {
      vm.nameError = true
    }
    if(vm.user === undefined || vm.user == '') {
      vm.loginError = true
    }
    if(vm.password === undefined || vm.password.length < 4) {
      vm.passError = true
    }
    if(vm.tel === undefined || vm.tel.toString().length < 10) {
      vm.telError = true
    }
    if(vm.email === undefined || vm.email == '') {
      vm.emailError = true
    } 
    if(vm.cpf === undefined || vm.cpf.toString().length != 11) {
      vm.cpfError = true
    } 
    if(!vm.nameError && !vm.loginError && !vm.passError && !vm.telError && !vm.emailError && !vm.cpfError){
      crudService.post('cliente', data)
        .then(function(response) {
          vm.login()
        }, function(err) {
          vm.unexError = true
        })
    }

  };
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4() + s4() +
    s4() + s4() + s4() + s4();
}

export default angular.module('app.login', [])
  .controller('newServiceCtrl', newServiceCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
