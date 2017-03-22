var smoothScroll = require('smoothscroll');
var homeController = function ($rootScope, crudService, $window, $stateParams) {
  var vm = this;
  var type = $stateParams.type;
  console.log(type);
  if(type == ''){
	  vm.products = [{nome:'Reforma', imagem:'http://galfaro.com.br/site/wp-content/uploads/2014/07/problemas-mais-comuns-na-reforma-de-imoveis-10.jpg', descricao:'Encontre agora o melhor arquiteto para conduzir a sua obra!'},
	  {nome:'Jardinagem', imagem: 'https://www.colegioweb.com.br/wp-content/uploads/2016/04/Paisagismo-Jardinagem.jpg', descricao: 'Procurando um serviço de jardinagem completo sem dor de cabeça?'},
	  {nome:'Eventos', imagem:'http://www.oficinadeeventosnet.com.br/blog/wp-content/uploads/2014/10/casaterrana_eventos2_965.jpg', descricao: 'O evento dos seus sonhos com o mínimo esforço!'}];
  }
  else if(type == 'reforma'){
	  	vm.products = [{nome:'José', imagem:'http://galfaro.com.br/site/wp-content/uploads/2014/07/problemas-mais-comuns-na-reforma-de-imoveis-10.jpg', descricao:'Encontre agora o melhor arquiteto para conduzir a sua obra!'},
		  {nome:'João', imagem: 'http://galfaro.com.br/site/wp-content/uploads/2014/07/problemas-mais-comuns-na-reforma-de-imoveis-10.jpg', descricao: 'Procurando um serviço de jardinagem completo sem dor de cabeça?'},
		  {nome:'Pedro', imagem:'http://galfaro.com.br/site/wp-content/uploads/2014/07/problemas-mais-comuns-na-reforma-de-imoveis-10.jpg', descricao: 'O evento dos seus sonhos com o mínimo esforço!'}];
  }
  else if(type == 'jardinagem'){
	  	vm.products = [{nome:'José', imagem:'https://www.colegioweb.com.br/wp-content/uploads/2016/04/Paisagismo-Jardinagem.jpg', descricao:'Encontre agora o melhor arquiteto para conduzir a sua obra!'},
		  {nome:'João', imagem:'https://www.colegioweb.com.br/wp-content/uploads/2016/04/Paisagismo-Jardinagem.jpg', descricao: 'Procurando um serviço de jardinagem completo sem dor de cabeça?'},
		  {nome:'Pedro', imagem:'https://www.colegioweb.com.br/wp-content/uploads/2016/04/Paisagismo-Jardinagem.jpg', descricao: 'O evento dos seus sonhos com o mínimo esforço!'}];
  }
  else if(type == 'eventos'){
	  	vm.products = [{nome:'José', imagem:'http://www.oficinadeeventosnet.com.br/blog/wp-content/uploads/2014/10/casaterrana_eventos2_965.jpg', descricao:'Encontre agora o melhor arquiteto para conduzir a sua obra!'},
		  {nome:'João', imagem:'http://www.oficinadeeventosnet.com.br/blog/wp-content/uploads/2014/10/casaterrana_eventos2_965.jpg', descricao: 'Procurando um serviço de jardinagem completo sem dor de cabeça?'},
		  {nome:'Pedro', imagem:'http://www.oficinadeeventosnet.com.br/blog/wp-content/uploads/2014/10/casaterrana_eventos2_965.jpg', descricao: 'O evento dos seus sonhos com o mínimo esforço!'}];
  }
  else{
	  vm.products = [{nome:'Reforma', imagem:'http://galfaro.com.br/site/wp-content/uploads/2014/07/problemas-mais-comuns-na-reforma-de-imoveis-10.jpg', descricao:'Encontre agora o melhor arquiteto para conduzir a sua obra!'},
	  {nome:'Jardinagem', imagem: 'https://www.colegioweb.com.br/wp-content/uploads/2016/04/Paisagismo-Jardinagem.jpg', descricao: 'Procurando um serviço de jardinagem completo sem dor de cabeça?'},
	  {nome:'Eventos', imagem:'http://www.oficinadeeventosnet.com.br/blog/wp-content/uploads/2014/10/casaterrana_eventos2_965.jpg', descricao: 'O evento dos seus sonhos com o mínimo esforço!'}];
  }
  
  crudService.get('servico')
	.then(function(response){
		vm.products = response.data

	}, function(err) {
	  console.log('error', err);
	});
	crudService.get('provider')
	.then(function(response){
		vm.products = response.data

	}, function(err) {
	  console.log('error', err);
	});

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
