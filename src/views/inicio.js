let inicio = { 
    render : async () => {
        const view = 
    /*`<p>Inicio </p>`
    `<header class="cabecera-inicio">
    <img src="./img/avatar.jpg" id= "img-avatar">
    <h1>Hola José</h1>
    <div id="menu">
    <p>Mis publicaciones</<p>
    <p>Elementos guardados</<p>
    <p>Conexiones</<p>
    </div>
    </header>
        <div class="registrar-box">
             <h6>Aqui va el contenido de inicio</h6>
        </div>`*/
        `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
         <!-- Brand/logo -->
  <a class="navbar-brand" href="#">
    <img src="./img/avatar.jpg" alt="logo" style="width:90px;">
  </a>
  
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
    <p> Hola, José </p>
    <li class="nav-item">
      <a class="nav-link" href="#">Mi perfil</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Mis publicaciones</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Elementos guardados</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Conexiones</a>
      <li class="nav-item">
      <a class="nav-link" href="#">#Temas de interés</a>
    </li>
    </li>
  </ul>
</nav>`

        return view;
    },
    after_render : async () => {
        //alert('Continuamos');
    }

};
    export default inicio;
    