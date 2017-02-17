import '!ng-cache!../../components/navbar/navbar.html';
// import '!ng-cache!../../components/flexslider/flexslider.html';
import '!ng-cache!../../components/banner/two-banner.html';
import '!ng-cache!../../components/filter-menu/filter-menu.html';
// import '!ng-cache!../../components/product/product-list.html';
import '!ng-cache!../../components/banner/slim-banner.html';
import '!ng-cache!../../components/carousel/carousel.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!../../components/social-menu/social-menu.html';
import '!ng-cache!./home.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'homeController',
      controllerAs: 'vm'
    });

}
