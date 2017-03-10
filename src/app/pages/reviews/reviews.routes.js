import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./reviews.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('reviews', {
      url: '/reviews',
      templateUrl: 'reviews.html',
      controller: 'reviewsCtrl',
      controllerAs: 'vm',
      params: {
      	type: 'service'
      } 
    });

}
