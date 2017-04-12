var myAccCtrl = function (crudService, $localStorage, $http,  $state) {
  var vm = this;

    if($localStorage.currentUser != null) {
        $http
          .get('https://evening-dawn-47995.herokuapp.com/user?token='+$localStorage.currentUser.token)
            .then((response) => {
              if(response.data != null && response.data.length>0) {
                vm.user = response.data[0];
              }
            }, (err) => {
                console.log(err);
                alert("ocorreu um erro, por favor tente novamente.")
              });
    } else {
      $state.go("home");
    }

  vm.saveUserData = function(){
    $localStorage.currentUser.nome = vm.user.nome;

    var formData = {
      name:vm.user.name,
      login:vm.user.login,
      password:vm.user.senha,
      cpf:vm.user.cpf,
      phone:vm.user.telefone,
      email:vm.user.email,
      token: vm.user.token
    }

    $http
      .put('https://evening-dawn-47995.herokuapp.com/user/'+vm.user.id, formData)
        .then((response) => {
            alert("Usuário editado com sucesso!");
            $state.go("home")
          }, (err)=>{
            console.log('err', err);
            alert("Erro, tente novamente mais tarde");
          });
  }

}

export default myAccCtrl;
