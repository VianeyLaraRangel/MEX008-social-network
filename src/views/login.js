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
                <button type="button" id="btn-fb" class="btn btn-secondary"><img src="https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/facebookicon.png?raw=true" width="10%"
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
        
        const register = document.getElementById('registrar-btn');
        
        register.addEventListener('click', () => location.hash = "#/inicio");
    }
};

export default login;
