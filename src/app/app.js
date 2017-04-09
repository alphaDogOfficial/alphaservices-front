import angular from 'angular';
import uirouter from 'angular-ui-router';
import modal from 'angular-ui-bootstrap/src/modal';

//this shit lib does not return its name when called
import 'ngstorage/ngStorage';
const ngStorage = 'ngStorage';

import chart from 'angular-chart.js/dist/angular-chart'

import routing from './app.config';
import home from './pages/home';
import navbarCtrl from './components/navbar/navbar.controller';
import reviews from './pages/reviews'
import myReviews from './pages/reviews-my'
import finances from './pages/finances'

//Flatastic Imports

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, modal, ngStorage, home, reviews, myReviews, finances, 'ngOpbeat', chart])
  .config(routing)
  .controller('navbarCtrl', navbarCtrl);

export default MODULE_NAME;
