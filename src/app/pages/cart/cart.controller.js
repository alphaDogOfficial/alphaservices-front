var cartController = function (crudService, $localStorage, $scope, promocaoService, $state, $rootScope, cartService) {
  var vm = this;
  vm.frete = {};
  vm.frete.isFree = false;
  //Get from API dos correios. E ai? calcular esse e dps ver as promocoes?
  vm.frete.price = 20.15;
  vm.promocao = 0;
  vm.subtotal = 0;
  vm.products = [];

  if ($localStorage.currentUser) {
    vm.products = $localStorage.currentUser.cart.items;
  } else {
    vm.products = $localStorage.anonyCart;
  }

  crudService.get('promocoes')
    .then(function(response){
      response.data.forEach((promocao) => {
        if(promocao.tipo == 0 && promocao.estado == 'Ativo') {
          vm.promocao = promocaoService.produto[0];
        }else if(promocao.tipo == 1 && promocao.estado == 'Ativo') {
          vm.promocao = promocaoService.produto[1];
        }else if(promocao.estado == 'Ativo'){
          vm.freteGratis = promocaoService.produto[2];
        };
        if (vm.products.length == 0) {
          vm.promocao = 0;
        }

      });
      updateTotal();

    }, function(err) {
      console.log('error', err);
    });


  vm.removeItem = function(index){
    cartService.removeItem(vm.products[index].prod_idproduto);
    vm.subtotal = (parseFloat(vm.subtotal) - (
      vm.products[index].cart_quantidade * vm.products[index].prod_valor
    )).toFixed(2);
    vm.products.splice(index, 1);
  }

  vm.updateQtd = function(index, qtd) {
    if (vm.products[index].cart_quantidade == '0' && qtd === -1) return;
    vm.products[index].cart_quantidade = qtd + parseInt(vm.products[index].cart_quantidade);
  };

  $scope.$on('child', function (event, data) {
    //O calculo do subtotal fica aqui, quando a directive filho for inserido/modificado!
    if (data.add) {
        vm.subtotal = (parseFloat(vm.subtotal) + data.valor).toFixed(2);
        updateTotal();
    } else {
      vm.subtotal = (parseFloat(vm.subtotal) - data.valor).toFixed(2);
      updateTotal();
    }

  });
  function updateTotal() {
    vm.total = (vm.subtotal - (vm.subtotal * vm.promocao /100) + vm.frete.price).toFixed(2);
  };

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    if(fromState.name === 'carrinho'){
      if(vm.products[0]) {
        if($localStorage.currentUser){
          $localStorage.currentUser.total = vm.total;
          var formData = {};
          formData.item = [];
          vm.products.forEach((item)=>{
            formData.item.push({
              quantidade: item.cart_quantidade,
              idProduto: item.prod_idproduto,
              tamanho: item.cart_tamanho
            });
          });
          formData.cpf_cliente = $localStorage.currentUser.cpf_id;
          crudService.post('carrinho', formData).then(
            (response)=>{
          }, (err)=>{
            console.log('err', err);
          });
        }else {
          $localStorage.anonyCart = vm.products;
        }

      } else {
        console.log('cart is empty, do nothing');
      }
    }

  });

}

export default cartController;
