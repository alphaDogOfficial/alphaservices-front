import '!ng-cache!../modals/login.html';
import '!ng-cache!../modals/signup.html';

var navbarCtrl = function ($rootScope, crudService, $uibModal, $localStorage, authService, $state) {
  var vm = this;
  vm.cart = {};
  if(vm.isLogged = !!$localStorage.currentUser) {
    vm.nome = $localStorage.currentUser.nome;
  }

  vm.openLogin = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      controllerAs: 'login',
      size: 'md'
    });
  }

  vm.openSignup = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'signup.html',
      controller: 'loginCtrl',
      controllerAs: 'signup',
      size: 'md'
    });
  };

  vm.logout = function () {
      authService.logout();
      vm.isLogged = false;
      $localStorage.anonyCart = [];
  };

  vm.goToMyAcc = function () {
    if(vm.isLogged = !!$localStorage.currentUser) {
      $state.go('minha-conta');
    } else {
        alert("Você não está logado.");
        $state.go("home");
    }  
  }
}

export default navbarCtrl;
