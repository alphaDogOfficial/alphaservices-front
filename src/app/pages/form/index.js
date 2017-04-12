import angular from 'angular';
import uirouter from 'angular-ui-router';

import crudService from '../../factories/crud.js';
import constService from '../../factories/constants.js';

import "font-awesome-webpack";
import 'expose?jQuery!jquery/dist/jquery.min.js';


//Flatastic NO-LOADERS Imports for form
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


import routing from './form.routes';
import formController from './form.controller';
export default angular.module('app.form', [uirouter, crudService])
  .config(routing)
  .controller('formController', formController)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
