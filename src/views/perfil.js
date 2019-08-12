let perfil = {
    render: async () => {
        const view =

        `<h1>AQUI VAMOS A VER EL PERFIL DEL USUARIO</h1>
        <button class="btn btn-primary btn-usuario" id="usuario-button">ALERTA</button>`

        return view
    },
    after_render: async () => {
        //llamar contenido creado por medio de template
            //alert ('Esto jala chido :D');
        }
};
export default perfil;
