//Importar los archivos JS que imprimiran las pantallas
import intro from './views/intro.js';
import login from './views/login.js';
import Utils from './views/parsedRequestURL.js';
import perfil from './views/perfil.js';
import registro from './views/registro.js';
import inicio from './views/inicio.js';

//Crear un objeto que contenga las rutas

const routes = {
  //Rutas públicas
  '/': intro,
  '/login': login,
  '/registro': registro,
  //Rutas privadas
  '/inicio': inicio,
  '/perfil': perfil
};

//Aquí el controlador de las rutas, esté comparará contra las rutas definidas y direccionará.

const router = async () => {
  const content = null || document.getElementById('content');
  const request = Utils.parsedRequestUrl();

  const parsedUrl = (request.resource ? '/' + request.resource : '/')
    + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
  //Obtener la página desde el hash
  let page = routes[parsedUrl] ? routes[parsedUrl] : error404;
  content.innerHTML = await page.render();
  await page.after_render();
}

//llamando objeto y escuchando hash
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

//Observador de la autenticación
// const observador = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       console.log('existe usuario activo');
//       //User is signed in.
//       const displayName = user.displayName;
//       const email = user.email; 
//       console.log(user.email);
//       const emailVerified = user.emailVerified;
//       const photoURL = user.photoURL;
//       const isAnonymous = user.isAnonymous;
//       const uid = user.uid;
//       const providerData = user.providerData;
//       location.hash = "#/inicio";
//     } else {
//       //User is signed out.
//       console.log('no existe usuario activo');
//       cerrarSesion();
//     }
//   });
// };

// observador();

