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

import routing from './cadastro.routes';
import cadastroCtrl from './cadastro.controller';
export default angular.module('app.cadastro', [uirouter, crudService])
  .config(routing)
  .controller('cadastroCtrl', cadastroCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
