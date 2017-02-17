function cartService($http, crudService, $localStorage, $q) {
  var vm = this;
  vm.cart = {};
  vm.cart.items = [];

  return {
    getCliente: function() {
      return vm.cart.cpf_cliente;
    },
    getItems: function() {
      return vm.cart.items;
    },
    init: function() {
      vm.cart.cpf_cliente = $localStorage.currentUser.cpf_id;
      return crudService.getById('carrinho', vm.cart.cpf_cliente)
        .then(function(response){
          $localStorage.currentUser.cart = vm.cart;
          vm.cart.items = response.data;
        }, function(err) {
          $q.reject(response.data);
          console.log('Failed to init Cart', err);
        });
    },
    removeItem: function(id_produto){
      return crudService.delete('carrinho', $localStorage.currentUser.cpf_id, {cart: {id_produto: id_produto}})
        .then(function(){
          crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
            .then(function(response){
              if($localStorage.currentUser) {
                vm.cart.items = response.data;
                $localStorage.currentUser.cart = vm.cart;
              }
            }, function(err) {
              $q.reject(response.data);
              console.log('Failed to update Cart', err);
            });
        }, function(err) {
          $q.reject(response.data);
          console.log('Failed to delete prod:'+ id_produto + err);
        });
    },
    update: function() {
      return crudService.getById('carrinho', $localStorage.currentUser.cpf_id)
        .then(function(response){
          if($localStorage.currentUser) {
            vm.cart.items = response.data;
            $localStorage.currentUser.cart = vm.cart;
          }
        }, function(err) {
          $q.reject(response.data);
          console.log('Failed to init Cart', err);
        });
    },
    destroy: function() {
      delete vm.cart;
    }
  };

}

export default cartService;
