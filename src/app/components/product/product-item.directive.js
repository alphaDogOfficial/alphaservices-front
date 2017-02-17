import '!ng-cache!./product-item.html';
import '!ng-cache!../modals/product-details.html';
import cs from 'imports?$=jquery!../custom-jquery-components/custom-select';


export default function productDirective($uibModal, crudService, $localStorage, prodConstants, $timeout, cartService){
    return {
        restrict: 'E',
        templateUrl: 'product-item.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	var modalInstance;
          var insertIntoCart = {};
          //default values to send to cart
          scope.cart_quantidade = 1;
          scope.cart_tamanho = prodConstants.tamanhos[0];
          scope.tamanhosDisponiveis = prodConstants.tamanhos;

          scope.open = function (item) {
          	scope.emEstoque = scope.data.quantidade > 0
          	scope.semEstoque = scope.data.quantidade === 0

          	if(scope.emEstoque) {
          		scope.data.estoque = 'em estoque'
          	} else {
          		scope.data.estoque = 'sem estoque'
          	};
            modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'product-details.html',
              size: 'lg',
              scope: scope
            }).opened.then(()=>{$timeout(()=>{cs();}, 0)});
          };

          scope.updateQtd = function(qtd) {
            if (scope.cart_quantidade == '0' && qtd === -1) return;
            scope.cart_quantidade = qtd + parseInt(scope.cart_quantidade);
          };

          scope.putInCart = function(){
            var cs = document.querySelector('#cart_tamanho');
            if (cs) {
              scope.cart_tamanho = parseInt(angular.element(cs).val());
            }
            if($localStorage.currentUser) {
              insertIntoCart = {
                cpf_cliente: $localStorage.currentUser.cpf_id,
                item: [{
                  idProduto: scope.data.idproduto,
                  quantidade: scope.cart_quantidade,
                  tamanho: scope.cart_tamanho
                }]
              };
              crudService.post('carrinho', insertIntoCart).then((response)=>{
                cartService.update();
              }, (err)=>{
                console.log('err', err);
              });
            }else {
              crudService.getById('produto', scope.data.idproduto).then((response)=>{
                $localStorage.anonyCart.push({
                  cart_quantidade: scope.cart_quantidade,
                  cart_tamanho: scope.cart_tamanho,
                  prod_description: response.data[0].descricao,
                  prod_fabricante: response.data[0].fabricante,
                  prod_idproduto: response.data[0].idproduto,
                  prod_imagem: response.data[0].imagem,
                  prod_nome: response.data[0].nome,
                  prod_peso: response.data[0].peso,
                  prod_quantidade: response.data[0].quantidade,
                  prod_tipo: response.data[0].tipo,
                  prod_valor: response.data[0].valor
                });

              }, (err)=>{
                console.log('err', err);
              });
            }
          }

          scope.cancel = function () {
            modalInstance.dismiss('cancel');
          };
        }
    };

}
