var json2csv = require('json2csv');
var financesController = function ($rootScope, $scope, crudService, $stateParams) {
  var vm = this;
  $rootScope.isFinancesActive = true;
  $rootScope.isHomeActive = false;
  $rootScope.isReviewsActive = false;

  $scope.type = $stateParams.type;

  $scope.exportToCSV = exportToCSV;

  if($scope.type !== "Geral") {
		crudService.getByType("budget", $scope.type)
			.then(function(response) {
				$scope.budgets = response.data

				crudService.getByType("contracts", $scope.type)
				.then(function(response) {
					$scope.contracts = response.data

					crudService.getByType("revenues", $scope.type)
						.then(function(response) {
							$scope.revenues = response.data

							getMonthlyReport();
							getBudgetStudy();
							getContractValueStudy();
						})
				})
			})
	} else {
		crudService.get("budget")
			.then(function(response) {
				$scope.budgets = response.data

				crudService.get("contracts")
				.then(function(response) {
					$scope.contracts = response.data

					crudService.get("revenues")
						.then(function(response) {
							$scope.revenues = response.data

							getMonthlyReport()
							getBudgetStudy();
							getContractValueStudy();
						})
				})
			})
	}

	function getMonthlyReport() {
		$scope.revenuesSeries = ['Recebido', 'Falta Receber']

		$scope.revenuesLabel = [];
		$scope.revenuesData = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

		getLabels();
		getRevenuesValues();
		getContractsValues();
	}

	function getLabels() {
		var labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
		var lastMonth = $scope.revenues[$scope.revenues.length - 1].month;

		for(var i = 0; i < labels.length; i++) {
			$scope.revenuesLabel.push(labels[i]);
			if(labels[i] == lastMonth) {
				i = labels.length;
			}
		}
	}

	function getRevenuesValues() {
		var aux = 0;
		$scope.revenues.forEach(function(data) {
			aux = $scope.revenuesLabel.indexOf(data.month);

			$scope.revenuesData[0][aux] += data.value;
		})
	}

	function getContractsValues() {
		var aux = 0;
		$scope.contracts.forEach(function(data) {
			aux = $scope.revenuesLabel.indexOf(data.month);
			$scope.revenuesData[1][aux] += data.value;
		})

		for(var i = 0; i < $scope.revenuesData[1].length; i++) {
			$scope.revenuesData[1][i] -= $scope.revenuesData[0][i];
		}
	}

	function getBudgetStudy() {
		$scope.orcLabels = ["Orçamentos não aceitos", "Orçamentos aceitos e não pagos", "Serviços já pagos"];
		$scope.orcData = [$scope.budgets.length - $scope.contracts.length, $scope.contracts.length - $scope.revenues.length, $scope.revenues.length];
	}

	function getContractValueStudy() {
		$scope.contData = [0, 0, 0, 0 ,0];
		var aux = [];
		
		for(var i = 0; i < $scope.contracts.length; i++) {
			aux.push($scope.contracts[i].value);
		}

		aux = aux.sort(function(a, b){return a-b});;
		var maxVal = aux[aux.length - 1];

		$scope.contLabels = ["< " + maxVal/5, ((maxVal/5) + 1) + " - " + 2*maxVal/5, ((2*maxVal/5) + 1) + " - " + 3*maxVal/5, ((3*maxVal/5) + 1) + " - " + 4*maxVal/5, "> " + ((4*maxVal/5) + 1)];

		aux.forEach(function(val) {
			if(val > (4*maxVal/5) + 1)
				$scope.contData[4] += 1
			else if(val > (3*maxVal/5) + 1)
				$scope.contData[3] += 1
			else if(val > (2*maxVal/5) + 1)
				$scope.contData[2] += 1
			else if(val > (maxVal/5) + 1)
				$scope.contData[1] += 1
			else
				$scope.contData[0] += 1;
		})
	}

	function exportToCSV() {
		var csv = json2csv({ data: $scope.revenues});
		
		var oWin = window.open("about:blank", "_blank");
    oWin.document.write(csv);
    oWin.document.close();
    oWin.document.execCommand('SaveAs', true, "file.csv");
    oWin.close();
	}	
}

export default financesController;
