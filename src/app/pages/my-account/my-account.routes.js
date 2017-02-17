import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./my-account.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('minha-conta', {
      url: '/minha-conta',
      templateUrl: 'my-account.html',
      controller: 'myAccCtrl',
      controllerAs: 'accVm'
    });

}
