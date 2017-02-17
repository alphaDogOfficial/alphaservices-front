var promocaoService = function () {

  var promocao = {}
  //seta a promocao por posicao
  //tipo 0 - 10%
  //tipo 1 - 25%
  //tipo 2 - frete gratis
  promocao.produto = [10, 25, true];

  return promocao;

};
export default angular
  .module('services.promocao', [])
  .factory('promocaoService', promocaoService)
  .name;
