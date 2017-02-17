import authService from './authenticate.factory';
import uirouter from 'angular-ui-router';


export default angular.module('app.auth', [uirouter])
  .factory('authService', authService)
  .run(function ($rootScope, $http, $state, $localStorage) {
      //keep user logged in after page refresh
      if ($localStorage.currentUser) {
          $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
      };
  })
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
