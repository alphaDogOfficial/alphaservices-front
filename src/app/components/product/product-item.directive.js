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
            var data = {
              nome: $scope.data.nome,
              tipo: $scope.data.servico,
              descricao: $scope.data.descricao,
              imagem: $scope.data.imagem,
              responsavel: $scope.data.responsavel,
              Valor: $scope.data.Valor
    }

    crudService.post("contratado", data)
      .then(function(response) {
        $scope.cancel();
      })
    };
}}}
