let login = {
  render: async () => {
    const view = `
            <header class="cabecera2">
                <h1>Iniciar Sesión</h1>
            </header>
            <br>
            <div class="ingresar-box boxData">
                <h6>Puedes iniciar sesión con las siguientes redes sociales:</h6>
                 <br>
                
                <button type="button" class="btn btn-secondary"><img src="img/googleicon.png" width="10%"
                height="auto"><strong>Entrar con Google</strong></button> 
            <br>
                <button type="button" id="btn-fb" class="btn btn-secondary"><img src="img/facebookicon.png" width="10%"
                 height="auto"><strong>Entrar con Facebook</strong> </button>
            </div>
            
            <div class="line-logo">
                <hr class="decorate">
                <img class="hopaki-pk" src="img/hopaki-pk.png" width="10%" height="auto">
                <hr class="decorate">
            </div>
            <div class="mail-pass">
                <label for="email">Ingresa tu correo</label>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Ingresa tu correo" aria-describedby="basic-addon1">
            </div>
            <label for="password">Ingresa tu password</label>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock-open"></i></span>
            <input type="text" class="form-control" placeholder="Ingresa tu contraseña" aria-describedby="basic-addon1">
            </div>
            <br>
            <button id="registrar-btn" class="btn-send btn">Enviar</button>
            </div>
            `;
    return view;
  },

  after_render: async () => {
      const btnFb= document.getElementById('btn-fb')
      .addEventListener('click', () => {
          //agregamos la instancia de objeto de proveedor de FB
          const provider = new firebase.auth.FacebookAuthProvider();
          //acceder con su cuenta, por medio de un popup
          firebase.auth().signInWithPopup(provider).then(function(result) {
              alert('exito');
              console.log('result');
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
              alert('error');
              console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      })

    const register = document.getElementById('registrar-btn');
        register.addEventListener('click', () => location.hash = "#/inicio");
  }
};

export default login;
