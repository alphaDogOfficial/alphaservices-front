var myAccCtrl = function (crudService, $localStorage, $http) {
  var vm = this;
  vm.novoEnd = {};
  vm.novoEnd.nome = 'casa';
  vm.novoEnd.rua = 'navajas';
  vm.novoEnd.numero = '13';
  vm.novoEnd.bairro = 'centro';
  vm.novoEnd.cidade = 'mogi';
  vm.novoEnd.estado = 'sao paulo';
  vm.novoEnd.pais = 'Brasil';
  vm.novoEnd.cep = '08710250';
  vm.novoEnd.complemento = 'apto 133';

    if($localStorage.currentUser != null) {
        $http
          .get('https://evening-dawn-47995.herokuapp.com/user?token='+$localStorage.currentUser.token)
            .then((response) => {
              if(response.data != null && response.data.length>0) {
                vm.user = response.data[0];
              }
            }, (err) => {
                console.log(err);
              });
    }



  crudService.getById('endereco', $localStorage.currentUser.cpf_id)
    .then((response)=>{
      vm.enderecos = response.data;
      console.log('user> ', vm.enderecos);
    });


  vm.saveUserData = function(){
    $localStorage.currentUser.nome = vm.user.nome;


    crudService.update('cliente', vm.user.cpf, vm.user).then(()=>{
      alert('sucesso!');
    }, (err)=>{
      console.log('deu pau loko', err)
    })
  }

  vm.SalvarNovoEnd = function () {
    console.log('enviando: ', vm.novoEnd);
    vm.novoEnd.cpf_cliente = $localStorage.currentUser.cpf_id;
    crudService.post('endereco', vm.novoEnd)
      .then((response)=>{
        console.log(response);
      });

    crudService.getById('cliente', $localStorage.currentUser.cpf_id)
      .then((response)=>{
        vm.user = response.data[0];
        console.log('user> ', vm.user.nome);
        console.log(response.data[0]);
      });

  }

  crudService.getById('compraByClient', $localStorage.currentUser.cpf_id)
    .then((response)=>{
      vm.compras = response.data;
      console.log('user> ', response.data);
    });


}

export default myAccCtrl;
