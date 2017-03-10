import angular from 'angular';
import uirouter from 'angular-ui-router';

import crudService from '../../factories/crud.js';
import constService from '../../factories/constants.js';

import "font-awesome-webpack";
import 'expose?jQuery!jquery/dist/jquery.min.js';


//Flatastic NO-LOADERS Imports for home
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "owlcarousel-pre/owl-carousel/owl.transitions.css";
import '../../../styles/flatastic.css';
//JS

import "imports?$=jquery!jquery-ui";

import "waypoints/lib/jquery.waypoints.min.js";
import 'imports?$=jquery!../../../js/flatastic.js';

import routing from './reviews-my.routes';
import myReviewsCtrl from './reviews-my.controller';
import productMyReviewDirective from '../../components/product-review-my/product-item-review-my.directive'
export default angular.module('app.reviews-my', [uirouter, crudService])
  .config(routing)
  .controller('myReviewsCtrl', myReviewsCtrl)
  .directive('productItemMyReview', productMyReviewDirective)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
