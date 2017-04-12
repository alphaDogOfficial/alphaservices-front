import '!ng-cache!../../components/navbar/navbar.html';
import '!ng-cache!../../components/footer/footer.html';
import '!ng-cache!./cadastro.html';
import '!ng-cache!./login_page.html';


export default function routes($stateProvider) {
  $stateProvider
    .state('cadastro', {
      url: '/cadastro',
      templateUrl: 'cadastro.html',
      controller: 'cadastroCtrl',
      controllerAs: 'cadVm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login_page.html',
      controller: 'cadastroCtrl',
      controllerAs: 'cadVm'
    })
    .state('auth', {
      url: '/auth',
      controller: 'authCtrl',
      params : ['login', 'password']  
    });



}
