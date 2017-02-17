import '!ng-cache!./cart-product-item.html';

export default function cartDirective(){
    return {
        restrict: 'A',
        templateUrl: 'cart-product-item.html', // markup for template
        scope: {
          item: '=',
          index: '=',
          removeItem: '&',
          updateQtd: '&'
        },
        link: function(scope, element) {
          //startup
          scope.$emit('child', {
            valor: scope.item.prod_valor * scope.item.cart_quantidade,
            add: true
          });

          scope.$watch('item.cart_quantidade', function(newValue, oldValue) {
            if (newValue != oldValue)
              scope.$emit('child', {
                valor: scope.item.prod_valor,
                add: (newValue > oldValue)
              }); // going up!

          });
        }
    };

}
