import '!ng-cache!./product-item-review.html';
import '!ng-cache!../modals/product-review.html';
import cs from 'imports?$=jquery!../custom-jquery-components/custom-select';


export default function productReviewDirective($uibModal, crudService, $localStorage, $timeout){
    return {
        restrict: 'E',
        templateUrl: 'product-item-review.html', // markup for template
        scope: {
            data: '=',
            type: '=',
            hasReview: '='
        },
        link: function(scope, element, attr) {
        	scope.modalInstance;
          scope.openReviewModal = function (item) {

            scope.modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'product-review.html',
              size: 'lg',
              scope: scope
            }).opened.then(()=>{$timeout(()=>{cs();}, 0)});
          };

          scope.cancel = function () {
            scope.modalInstance.dismiss('cancel');
          };

          scope.createReview = function(score, service, satisfaction, comment) {
            var data = {
              score: score,
              service: service,
              satisfaction: satisfaction,
              comment: comment,
              type: scope.type,
              typeId: scope.data.id,
              imagem: scope.data.imagem
            }

            crudService.post("review", data)
              .then(function(response) {
              })
          }
        }
    };

}
