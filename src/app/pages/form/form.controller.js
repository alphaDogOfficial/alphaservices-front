var formController = function ($rootScope, crudService, $scope) {
  var vm = this;
  $rootScope.isHomeActive = false;
  $rootScope.isReviewsActive = false;
  $rootScope.isFinancesActive = false;
  $rootScope.usFormActive = true;
  $scope.creating = false;
  $scope.created = false;

  $scope.create = create;

  function create(service_type, contract, value) {
  	var table;
  	$scope.creating = true;

  	var dataBudget = {
      value: value,
      accepted: (contract > 0),
      service_type: service_type,
      month: "Abr"
    }

    crudService.post("budget", dataBudget)
    	.then(function(response) {
    		if(contract >= 1) {
    			var dataContract = {
			      value: value,
			      budget: response.data.id,
			      service_type: service_type,
			      month: "Abr"
			    } 

		    crudService.post("contracts", dataContract)
		    	.then(function(response) {
	    			if(contract == 2) {
	    				var dataRevenues = {
					      value: value,
					      contract: response.data.id,
					      service_type: service_type,
					      month: "Abr"
					    }

					    crudService.post("revenues", dataRevenues)
					    	.then(function(response) {
									$scope.creating = false;
					    		$scope.created = true;
					    	})

	    			} else {
				    	$scope.creating = false;
				    	$scope.created = true;
				    }
		    	})
    		} else {
		    	$scope.creating = false;
		    	$scope.created = true;
		    }
    	})
  }
	
}

export default formController;
