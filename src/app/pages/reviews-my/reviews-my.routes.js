import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./reviews-my.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('reviews-my', {
      url: '/myreviews',
      templateUrl: 'reviews-my.html',
      controller: 'myReviewsCtrl'
    });

}
