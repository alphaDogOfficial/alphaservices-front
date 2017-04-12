import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/banner/two-banner.html';
import '!ng-cache!../../components/filter-menu/filter-menu.html';
import '!ng-cache!../../components/banner/slim-banner.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./form.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('form', {
      url: '/form',
      templateUrl: 'form.html',
      controller: 'formController',
      controllerAs: 'vm'
    });

}
