import TSConfig from '../../factories/constants.js';

var detailCtrl = function (crudService, $state, $scope, $http, $stateParams) {
  var vm = this;
  console.log('detail loaded', $stateParams)
  //Batista seu bosta chama aqui

  $scope.data = {
    valor: "12341",
    parcelos: "12341",
    beneficiario: "12341",
    cpf: "12341",
    portador: "12341",
    cartao: "12341",
    cvv: "12341",
    dia: "12341"
  }
}
export default detailCtrl;
