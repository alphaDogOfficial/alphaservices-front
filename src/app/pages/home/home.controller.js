var smoothScroll = require('smoothscroll');
var homeController = function ($rootScope, crudService, $window, $stateParams) {
  var vm = this;
  var type = $stateParams.type;
  if(type == ''){
  	vm.header = "Em andamento"
  	crudService.get('andamento')
	.then(function(response){
		vm.products = response.data

	}, function(err) {
	  console.log('error', err);
	});
  }else{
  	vm.header = type
  	crudService.get(type)
	.then(function(response){
		vm.products = response.data

	}, function(err) {
	  console.log('error', err);
	});
  }
  
 //  if(type == ''){
 //  	crudService.get('fornecedor')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	  
 //  }
 //  else if(type == 'reforma'){
 //  	crudService.get('reforma')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	  	
 //  }
 //  else if(type == 'jardinagem'){
 //  	crudService.get('jardinagem')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	  	
 //  }
 //  else if(type == 'eventos'){
 //  	crudService.get('eventos')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	  	
 //  }
 //  else{
 //  	crudService.get('fornecedor')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	  
 //  }
  
 //  crudService.get('servico')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });
	// crudService.get('provider')
	// .then(function(response){
	// 	vm.products = response.data

	// }, function(err) {
	//   console.log('error', err);
	// });

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
