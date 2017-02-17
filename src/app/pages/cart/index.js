import angular from 'angular';
import uirouter from 'angular-ui-router';

import crudService from '../../factories/crud.js';
import constService from '../../factories/constants.js';
import cartService from './cart.factory';
import cartItemDirective from '../../components/product/cart-product-item.directive';

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

import "imports?$=jquery!jquery-ui";

import "waypoints/lib/jquery.waypoints.min.js";
import "isotope-layout";
import 'retinajs/dist/retina';
import "imports?$=jquery!../../../js/flatastic.custom-scrollbar.js";
import 'imports?$=jquery!../../../js/flatastic.js';


import routing from './cart.routes';
import cartController from './cart.controller';
export default angular.module('app.cart', [uirouter, crudService])
  .config(routing)
  .factory('cartService', cartService)
  .directive('cartItem', cartItemDirective)
  .controller('cartController', cartController)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
