var prodConstants = function () {

  var prod = {}
  //seta tamanho do prod
  //tipo 0 - 10%
  //tipo 1 - 25%
  //tipo 2 - frete gratis
  prod.tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return prod;

};
export default angular
  .module('contants.prod', [])
  .factory('prodConstants', prodConstants)
  .name;
