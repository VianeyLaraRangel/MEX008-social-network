let inicio = { 
    render : async () => {
        const view = 
        ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="img/avatar.jpg" alt="avatar" style="width:90px;" id="img-avatar"></a>
        <p>Hola usuario!! </p>  <i class="fas fa-bell"></i>
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
    <form>
        <div class="form-group">
            <textarea class="form-control" id="publication-text" rows="3" placeholder= "¿Que vas a compartir hoy?"></textarea>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-primary" id="btn-publication">
                    <p>Publicar </p>
                </label>
            </div>
        </div>
    </form>
    <br><br>
    <section id="post-area" class="feeds"></section>` 
    return view;
  },

  after_render: async () => {
    printPosts();
    const btnPublicar = document.getElementById('btn-publication');
    const btnPerfil = document.getElementById('img-avatar');

    btnPublicar.addEventListener('click', posting);
    btnPerfil.addEventListener('click', () => {
      location.hash = "#/perfil";
    })
  }
};
export default inicio;

