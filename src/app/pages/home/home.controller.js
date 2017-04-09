var smoothScroll = require('smoothscroll');
var homeController = function ($rootScope, crudService, $window) {
  var vm = this;
  $rootScope.isHomeActive = true;
  $rootScope.isReviewsActive = false;
  $rootScope.isFinancesActive = false;

	$rootScope.$on('rootScope:newProducts', function (event, data) {
		vm.page = 1
		vm.allProducts = data
		vm.products = vm.allProducts.slice(0,12)
	});

	vm.nextPage = function() {
		smoothScroll(200, 800)
		vm.products = vm.allProducts.slice(vm.page * 12, (vm.page + 1) * 12)
		vm.page++
	}

	vm.lastPage = function() {
		smoothScroll(200, 800)
		vm.page--
		vm.products = vm.allProducts.slice((vm.page - 1) * 12, vm.page * 12)
	}
}

export default homeController;
