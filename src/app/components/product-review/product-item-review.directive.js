import '!ng-cache!./product-item-review.html';
import '!ng-cache!../modals/product-review.html';

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
        	scope.modalInstance = null;

          scope.openReviewModal = function (item) {

            scope.modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'product-review.html',
              size: 'lg',
              scope: scope,
              controller: ModalCtrl
            }).opened.then(()=>{$timeout(()=>{cs();}, 0)});

          };
        }
    };
}

function ModalCtrl($scope, $uibModalInstance, crudService) {

  $scope.cancel = function () {
    $scope.$dismiss('');
  };

  $scope.createReview = function(score, service, satisfaction, comment) {
    if(score) {
      var data = {
        score: score,
        service: service,
        satisfaction: satisfaction,
        comment: comment,
        type: $scope.$parent.type,
        typeId: $scope.$parent.data.id,
        imagem: $scope.$parent.data.imagem
      }

      crudService.post("review", data)
        .then(function(response) {
          $scope.cancel();
        })
    } else {
      var myToastMsg = ngToast.warning({
        content: '<a href="#" class="">a message</a>'
      });
    }
  }
}
