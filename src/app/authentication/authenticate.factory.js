import TSConfig from '../factories/constants.js';

function authService($http, $localStorage, $state, cartService) {
  var service = {};

  var login = function(login, senha, callback) {

    $http.post(TSConfig.urlBase + 'login/tradesports', { login: login, senha: senha })
      .then(function (response) {
        // login successful if there's a token in the response
        if (response.data.token) {
          // store login and token in local storage to keep user logged in between page refreshes
          $localStorage.currentUser = { login: login, token: response.data.token, cpf_id: response.data.cpf_id, nome: response.data.nome, msg: response.data.message };
          // add jwt token to auth header for all requests made by the $http service
          $http.defaults.headers.common.Authorization = response.data.token;

          // execute callback with true to indicate successful login
          cartService.init().then(()=>{
            callback(true);
          });
        }
      }, function(err) {
        console.log('err', err);
        callback(false);
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
