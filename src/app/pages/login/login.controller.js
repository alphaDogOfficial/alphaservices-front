var loginCtrl = function (crudService, authService, $state, $uibModalInstance) {
  var vm = this;
  vm.error = false;

  vm.login = function() {
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

export default angular.module('app.login', [])
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
