import '!ng-cache!./product-item-review-my.html';
import '!ng-cache!../modals/review-details.html';

export default function productMyReviewDirective($uibModal, crudService, $localStorage, $timeout){
    return {
        restrict: 'E',
        templateUrl: 'product-item-review-my.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
        	var modalInstance;

          scope.openReviewModal = function (item) {
            scope.score = scope.data.score;
            scope.service = scope.data.service;
            scope.satisfaction = scope.data.satisfaction;
            scope.comment = scope.data.comment;

            modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'review-details.html',
              size: 'lg',
              scope: scope
            }).opened.then(()=>{$timeout(()=>{cs();}, 0)});
          };

          scope.cancel = function () {
            modalInstance.dismiss('cancel');
          };
        }
    };

}
