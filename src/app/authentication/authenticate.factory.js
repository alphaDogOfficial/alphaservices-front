import TSConfig from '../factories/constants.js';

function authService($http, $localStorage, $state, cartService) {
  var service = {};

  var login = function(login, password, callback) {

    $http
    .get('https://evening-dawn-47995.herokuapp.com/user?login='+login+"&password="+password)
      .then((response) => {
        if(response.data != null) {
          $localStorage.currentUser = {token: response.data.token, nome: response.data.name};
          callback(true);
        } else {
          alert("Usuário ou senha não encontrados, por favor tente novamente.");
        }
      }, function(err) {
        console.log('err', err);
        alert("Ocorreu um erro, tente novamente.")
      });

  }

  var logout = function() {
    // remove user from local storage and clear http auth header
    // cartService.destroy();
    delete $localStorage.currentUser;
    $http.defaults.headers.common.Authorization = '';
    $state.go('home');
  }

  service.login = login;
  service.logout = logout;

  return service;

}

export default authService;
