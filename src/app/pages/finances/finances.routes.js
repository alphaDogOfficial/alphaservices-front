import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/banner/two-banner.html';
import '!ng-cache!../../components/filter-menu/filter-menu.html';
import '!ng-cache!../../components/banner/slim-banner.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./finances.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('finances', {
      url: '/finances',
      templateUrl: 'finances.html',
      controller: 'financesController',
      controllerAs: 'vm',
      params: {
      	type: 'Geral'
      } 
    });

}
