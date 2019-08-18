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
                
                <button type="button" class="btn btn-secondary"><img src="https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/googleicon.png?raw=true" width="10%"
                height="auto"><strong>Entrar con Google</strong></button> 
            <br>
                <button type="button" class="btn btn-secondary"><img src="https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/facebookicon.png?raw=true" width="10%"
                 height="auto"><strong>Entrar con Facebook</strong> </button>
            </div>
            
            <div class="line-logo">
                <hr class="decorate">
                <img class="hopaki-pk" src="https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/hopaki-pk.png?raw=true" width="10%" height="auto">
                <hr class="decorate">
            </div>
            <div class="mail-pass">
                <label for="email">Ingresa tu correo</label>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="ejemplo@correo.com" aria-describedby="basic-addon1" id="login-mail"/>
            </div>
            
            <label for="password">Ingresa tu password</label>
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock-open"></i></span>
            <input type="password" class="form-control" placeholder="6 caractéres mínimo" aria-describedby="basic-addon1" id="login-password"/>
            </div>
            <br>
            <button id="login-btn" class="btn-send btn">Acceder</button>
            <br>
            <p>¿No te has registrado? Regístrate <a href="#/registro">Aquí</a></p>
            <p>¿Olvidaste la contraseña? click <a href= "#">Aquí</a></p>
            </div>
            `;
        return view;
    },

    after_render: async () => {
        
        const login = document.getElementById('login-btn');
        const loginEmail = document.getElementById('login-mail');
        
        const loginPassword = document.getElementById('login-password');
        
        login.addEventListener('click', () => {
            console.log(loginEmail.value);    
            loginUser(loginEmail.value,loginPassword.value);
        });
    }
};

export default login;
