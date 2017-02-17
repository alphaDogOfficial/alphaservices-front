import '!ng-cache!../modals/login.html';
import '!ng-cache!../modals/signup.html';

var navbarCtrl = function ($rootScope, crudService, $uibModal, $localStorage, authService, $state) {
  var vm = this;
  vm.cart = {};
  if(vm.isLogged = !!$localStorage.currentUser) {
    vm.nome = $localStorage.currentUser.nome;
    vm.cart.qtd = $localStorage.currentUser.cart.length || 0; //TODO: ou usuario anonimo
  }

  vm.openLogin = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      controllerAs: 'login',
      size: 'md'
    });
  };

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
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'login.html',
        controller: 'loginCtrl',
        controllerAs: 'login',
        size: 'md'
      });
    }
  }

  vm.filter = function(genero, tipo) {
    var data = {}
    data.genero = [genero]
    data.tipo = [tipo]
    crudService.getWithFilter('produto', data)
      .then(function(response) {
        $rootScope.$emit('rootScope:newProducts', response.data);
      }, function(err) {
        console.log('error', err)
      })
  }

  vm.search = function() {
    if(vm.searchName === undefined) {
      vm.searchName = 't'
    }
    crudService.getByName('produto', vm.searchName)
      .then(function(response) {
        $rootScope.$emit('rootScope:newProducts', response.data)
        vm.searchName = undefined
      }, function(err) {
        console.log('error', err)
        vm.searchName = undefined
      })
  }

}

export default navbarCtrl;
