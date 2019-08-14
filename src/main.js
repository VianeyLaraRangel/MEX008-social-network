// Este es el punto de entrada de tu aplicacion
"use strict";
//Importar los archivos JS que imprimiran las pantallas
import intro  from './views/intro.js';
import login  from './views/login.js';
import Utils from './views/parsedRequestURL.js';
import perfil from './views/perfil.js';
import registro from './views/registro.js';
import inicio from './views/inicio.js';

//import Utils from './views/parsedRequestURL.js';

//Crear un objeto que contenga las rutas como llaves y su valor (List of supported routes)

const routes = {
    '/': intro,
    '/login': login,
    '/perfil' : perfil,
    '/registro' : registro,
    '/inicio' : inicio
};
//Aquí el controlador de las rutas, esté comparará contra las rutas definidas y direccionará.

const router = async () => {
  const content = null || document.getElementById('content');
  const request = Utils.parsedRequestUrl();
  
  const parsedUrl = (request.resource ? '/' + request.resource : '/')
  + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  //Obtener la página desde el hash
  let page = routes [parsedUrl] ? routes[parsedUrl] : error404;
  content.innerHTML = await page.render();
  await page.after_render();
  
}
//llamando objeto y escuchando hash
window.addEventListener('hashchange', router);
window.addEventListener('load', router);


