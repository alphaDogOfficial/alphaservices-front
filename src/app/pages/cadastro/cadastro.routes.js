import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./cadastro.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('cadastro', {
      url: '/cadastro',
      templateUrl: 'cadastro.html',
      controller: 'cadastroCtrl',
      controllerAs: 'cadVm'
    });

}
