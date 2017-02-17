import angular from 'angular';
import uirouter from 'angular-ui-router';
import modal from 'angular-ui-bootstrap/src/modal';

//this shit lib does not return its name when called
import 'ngstorage/ngStorage';
const ngStorage = 'ngStorage';

import routing from './app.config';
import home from './pages/home';
import cart from './pages/cart';
import checkout from './pages/checkout';
import myAcc from './pages/my-account';
import login from './pages/login/login.controller';
import cadastro from './pages/cadastro';
import auth from './authentication';
import navbarCtrl from './components/navbar/navbar.controller';

import promocao from './factories/promocao';
import prodConstants from './factories/prodConstants';

//Flatastic Imports

function initAnonyCart($localStorage) {
  console.log('oi');

  $localStorage.anonyCart = [];
  console.log('localstorage> ', $localStorage.anonyCart );
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, modal, ngStorage, home, cart, login, auth, promocao, prodConstants, checkout, myAcc, cadastro])
  .config(routing)
  .controller('initAnonyCart', initAnonyCart)
  .controller('navbarCtrl', navbarCtrl);

export default MODULE_NAME;
