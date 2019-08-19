let perfil = {
    render: async () => {
        const view =

        `<nav class="navbar navbar-expand-lg navbar-light bg-light navbar2">
        <a class="navbar-brand" href="#"><img src="img/avatar.jpg" alt="avatar" style="width:90px;" id="img-avatar2"></a>
        <p>Hola usuario!! </p>  <i class="fas fa-bell fa-bell2"></i>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><i class="fas fa-envelope"></i> Mensajes <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#"><i class="fas fa-hashtag"></i> Temas de interés <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#"><i class="fas fa-compress-arrows-alt"></i> Conexiones <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#"><i class="fas fa-book-reader"></i>  Biblioteca <span class="sr-only">(current)</span></a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
            </form>
            <p> Cerrar Sesión </p>
        </div>
    </nav>
    <br><br>

<section class="tablero">
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fas fa-share-alt"></i></div>
  <div class="card-body">
    <h5 class="card-title">#Historia</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fas fa-share-alt"></i></div>
  <div class="card-body">
    <h5 class="card-title">#Cuentos</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fas fa-share-alt"></i></div>
  <div class="card-body">
    <h5 class="card-title">#Vídeos</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fas fa-share-alt"></i></div>
  <div class="card-body">
    <h5 class="card-title">#Galería</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header"> <i class="fas fa-share-alt"></i></div>
  <div class="card-body">
    <h5 class="card-title">#Ciencia</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</section>`
        
        
        return view
    },
    after_render: async () => {
        //llamar contenido creado por medio de template
            //alert ('Esto jala chido :D');
        }
};
export default perfil;
