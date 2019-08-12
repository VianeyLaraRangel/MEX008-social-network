let inicio = { 
    render : async () => {
        const view = 
    //`<p>Inicio </p>`
    `<header class="cabecera-inicio">
    <img src="./img/avatar.jpg" id= "img-avatar">
    <h1>Hola Usuario</h1>
    </header>
        <div class="registrar-box">
             <h6>Aqui va el contenido de inicio</h6>
        </div>`

        return view;
    },
    after_render : async () => {
        //alert('Continuamos');
    }

};
    export default inicio;
    