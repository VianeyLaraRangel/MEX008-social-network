let inicio = { 
    render : async () => {
        const view = 

        `<nav class="navbar navbar-expand-sm bg-danger navbar-dark text-white">
         <!-- Brand/logo -->
  <a class="navbar-brand" href="#">
    <img src="./img/avatar.jpg" alt="logo" style="width:90px;" id="img-avatar">
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
</nav>
<section class="publicaciones">
<textarea name="publicacion" rows="3" cols="40">¿Qué vas a compartir hoy?</textarea>
<button id="btn-publicar" class="bg-warning">Publicar</button>
</section>`

        return view;
    },
    after_render : async () => {
        //alert('Continuamos');
    }

};
    export default inicio;
    