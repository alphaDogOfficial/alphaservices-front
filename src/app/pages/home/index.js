import angular from 'angular';
import uirouter from 'angular-ui-router';

import crudService from '../../factories/crud.js';
import constService from '../../factories/constants.js';

import "font-awesome-webpack";
import 'expose?jQuery!jquery/dist/jquery.min.js';


//Flatastic NO-LOADERS Imports for home
//CSS
import "flexslider/flexslider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "imports?$=jquery!owl.carousel/dist/assets/owl.carousel.min.css";
import "owlcarousel-pre/owl-carousel/owl.transitions.css";
import '../../../styles/flatastic.css';
//JS
import "flexslider/jquery.flexslider.js";
import "owl.carousel/dist/owl.carousel.js";
import "waypoints/lib/jquery.waypoints.min.js";
import "isotope-layout";
import 'retinajs/dist/retina';
import "imports?$=jquery!../../../js/flatastic.custom-scrollbar.js";
import 'imports?$=jquery!../../../js/flatastic.js';


import routing from './home.routes';
import homeController from './home.controller';
import productDirective from '../../components/product/product-item.directive'
export default angular.module('app.home', [uirouter, crudService])
  .config(routing)
  .controller('homeController', homeController)
  .directive('productItem', productDirective)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
