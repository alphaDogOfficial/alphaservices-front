var checkoutCtrl = function (crudService, $localStorage, $state, cartService) {
  var vm = this;
  vm.showAddress = false;
  vm.showCartao = false
  crudService.getById('endereco', $localStorage.currentUser.cpf_id)
    .then((response)=>{
      vm.enderecos = response.data;
      console.log('user> ', vm.enderecos);
    });

  vm.radioSelected = function(index) {
    vm.endereco = vm.enderecos[index];
    vm.showAddress = true
  }

  vm.cartaoSelected = function() {
    vm.showCartao = true
  }

  vm.cartaoNotSelected = function() {
    vm.showCartao = false
  }

  vm.fecharCompra = function() {

    var data = {}
    data.cpf_cliente = $localStorage.currentUser.cpf_id;
    data.valor = $localStorage.currentUser.total;
    data.metodo_de_pagamento = vm.payment;
    data.idEndereco = vm.endereco.idendereco;
    data.imagemNF = 'imagem da nota';
    data.notaFiscal = 'nota';
    data.estado = 0;
    console.log('my data: ',data);
    console.log('products = ', $localStorage.currentUser.cart.items);

    crudService.post('compra', data).then(function(response) {
      var idCompra = response.data[0].idcompra

      var dataent = {}
      dataent.idCompra = idCompra
      dataent.prazo = new Date()

      crudService.post('entrega', dataent).then(function(res) {
        var idEntrega = res.data[0].identrega
        var products = $localStorage.currentUser.cart.items;

        for(var i = 0; i < products.length; i++) {

          var datapc = {}
          datapc.idCompra = idCompra
          datapc.idProduto = products[i].prod_idproduto
          datapc.quantidade = products[i].cart_quantidade

          if(parseInt(datapc.quantidade) <= products[i].prod_quantidade) {
            datapc.idEntrega = idEntrega

            var dataprod = {}
            dataprod.valor = products[i].prod_valor
            dataprod.nome = products[i].prod_nome
            dataprod.imagem = products[i].prod_imagem
            dataprod.descricao = products[i].prod_description
            dataprod.peso = products[i].prod_peso
            dataprod.tamanho = products[i].cart_tamanho
            dataprod.fabricante = products[i].prod_fabricante
            dataprod.tipo = products[i].prod_tipo
            dataprod.genero = products[i].prod_genero
            dataprod.quantidade = products[i].prod_quantidade - datapc.quantidade

            crudService.update('produto', products[i].prod_idproduto, dataprod)
          }

          crudService.post('produtoCompra', datapc).then(
            ()=>{
            for(var i = 0; i < products.length; i++) {
              cartService.removeItem(products[i].prod_idproduto);
            }
            $localStorage.currentUser.cart.items = [];
            $state.go('home');
            }
          )
        }
      })

    }, function(err) {
      console.log('error', err);
    });

  }
}

export default checkoutCtrl;
