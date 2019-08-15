let inicio = { 
    render : async () => {
        const view = 

        `<nav class="navbar navbar-expand-sm bg-danger navbar-dark text-white">
         <!-- Brand/logo -->
  <a class="navbar-brand">
    <img src="src/img/avatar.jpg" alt="avatar" style="width:90px;" id="img-avatar">
  </a>
  
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
    <p> Hola, José </p>
    <li class="nav-item">
      <a  class="nav-link"><i class="far fa-comment-dots"></i> Mis publicaciones</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" ><i class="far fa-bookmark"></i> Elementos guardados</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Conexiones</a>
      <li class="nav-item">
      <a class="nav-link" ><i class="fas fa-hashtag"></i> Temas de interés</a>
    </li>
    </li>
    </ul>

  <form class="form-inline my-2 my-lg-0">
  <input class=" form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">      
  <button id="btn-search"class=" btn btn-outline-success my-2 my-sm-0 btn btn-outline-warning p-2 mb-2 bg-white text-dark" type="submit"><i class="fas fa-search"></i></button>
    </form>
</nav>



<div class="publication-box">
<textarea id="publication-text" name="publicacion" rows="3" cols="40" placeholder="¿Qué vas a compartir hoy?"></textarea>
<button id="btn-publication" class="bg-warning btn-lg">Publicar</button>
</section>

<section id="post-area" class="feeds">texto</section>`

        return view;
    },
    after_render : async () => {
      const btnPublicar= document.getElementById('btn-publication').addEventListener('click', publicar);
        const btnPerfil= document.getElementById('img-avatar').addEventListener('click', ()=>{
          location.hash= "#/perfil";
        })
    }

};
    export default inicio;
    