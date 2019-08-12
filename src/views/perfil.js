let perfil = {
    render: async () => {
        const view =

        `<nav class="navbar navbar-expand-sm bg-warning navbar-dark text-white">
        <!-- Brand/logo -->
 <a class="navbar-brand">
   <img src="./img/avatar.jpg" alt="avatar" style="width:90px;" id="perfil-avatar">
 </a>
 
 <!-- Links --></a>
 <ul class="navbar-nav">
   <li class="nav-item">
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

<section class="tablero">
<button type="button" id="btn-historia" class="btn-lg btn-info"> #Historia </button>
<button type="button" id="btn-cuentos"  class="btn-lg btn-success"> "Cuentos" </button>
<button type="button" id="btn-videos"   class="btn-lg btn-danger"> Videos </button>
<button type="button" id="btn-galeria"  class="btn-lg btn-purple"> Galeria </button>
</section>
`
        
        
        return view
    },
    after_render: async () => {
        //llamar contenido creado por medio de template
            //alert ('Esto jala chido :D');
        }
};
export default perfil;
