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

  vm.saveUserData = function(){
    $localStorage.currentUser.nome = vm.user.nome;

    var formData = {
      name:vm.user.nome,
      login:vm.user.login,
      password:vm.user.senha,
      cpf:vm.user.cpf,
      phone:vm.user.telefone,
      email:vm.user.email,
      token: vm.user.token,
      id: vm.user.id
    }

    $http
      .put('https://evening-dawn-47995.herokuapp.com/user', formData)
        .then((response) => {
            alert("Usuário editado com sucesso!");
            $state.go("home")
          }, (err)=>{
            console.log('err', err);
            alert("Erro, tente novamente mais tarde");
          });



    crudService.update('cliente', vm.user.cpf, vm.user).then(()=>{
      alert('sucesso!');
    }, (err)=>{
      console.log('deu pau loko', err)
    })
  }

}

export default myAccCtrl;
