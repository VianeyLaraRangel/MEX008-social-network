// aqui exportaras las funciones que necesites
// alert ("Aqui estoy :)");
export const myFunction = () => {
  // console.log('Hola mundo!');
  document.getElementById('login').addEventListener('click', () => {
    alert('funciona tambien');
    });
    alert('funciona');
  console.log('Hola mundo!');
};
const firebaseConfig = {
  apiKey: "AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0",
  authDomain: "hopaki-prueba.firebaseapp.com",
  databaseURL: "https://hopaki-prueba.firebaseio.com",
  projectId: "hopaki-prueba",
  storageBucket: "",
  messagingSenderId: "967562359456",
  appId: "1:967562359456:web:8517811f94b84354"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//llamando a las funciones 
function registrar() {
  //console.log("diste click");
  const email= document.getElementById("email").value;
  const password= document.getElementById("password").value;
  //console.log(email);
  //console.log(password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function ingreso() {
  const email2= document.getElementById("email2").value;
  const password2= document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)
  .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log("existe usuario activo");
          aparece();
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        console.log("user");
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log("no existe usuario activo");
      }
    })  
  }
observador();

function aparece() {
  //var contenido= document.getElementById("contenido");
  //contenido.innerHTML= "Solo lo ve usuario activo";
  indextwto.innerHTML;
  /*`<p> HOLA!!</p>
  <button onclick="cerrar()">Cerrar Sesión</button>` */
};

function cerrar() {
  firebase.auth().signOut()
  .then(function() {
      console.log("saliendo");

  })
  .catch(function(error) {
      console.log(error);
  })
}
document.getElementById('iniciar-sesion').addEventListener('click', () => {
  Swal.fire({
    title: '<i class="fas fa-user-alt"></i>',
    html:
      '<button class = btn-social face><img  class= img-social src= "img/googleicon.png"> Ingresa con Google</button>' + '<br>' +
      '<button class= btn-social googl><img class= img-social src= "img/facebookicon.png"> Ingresa con Facebook</button>'+ '<br>' +
      '<input id="email2" type="email" placeholder="Email">' + '<br>' +
      '<input type="password2" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button onclick="ingreso()" class="btn-warning">Registrate</button>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Acceder!',
    confirmButtonAriaLabel: 'Registrate!',
    // cancelButtonText:
    //   '<i class="fa fa-thumbs-down"></i>',
    // cancelButtonAriaLabel: 'Cancelar',
  })
});

document.getElementById('registrate').addEventListener('click', () => {
  Swal.fire({
    title: '/MEX008-social-network/src/img/login.png',
    html:
      '<input type="email" placeholder="Email"> ' +
      '<input type="password" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button onclick="registrar()" class="btn-warning">Registrate</button>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Acceder!',
    confirmButtonAriaLabel: 'Registrate!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Cancelar',
  })
});




const 

//Accediendo con google

var provider = new firebase.auth.GoogleAuthProvider();

//Acceso con ventana emergente 

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

//Manejo de errores de cuenta existente 


// Step 1.
// User tries to sign in to Google.
auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function(error) {
  // An error happened.
  if (error.code === 'auth/account-exists-with-different-credential') {
    // Step 2.
    // User's email already exists.
    // The pending Google credential.
    var pendingCred = error.credential;
    // The provider account's email address.
    var email = error.email;
    // Get sign-in methods for this email.
    auth.fetchSignInMethodsForEmail(email).then(function(methods) {
      // Step 3.
      // If the user has several sign-in methods,
      // the first method in the list will be the "recommended" method to use.
      if (methods[0] === 'password') {
        // Asks the user their password.
        // In real scenario, you should handle this asynchronously.
        var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
        auth.signInWithEmailAndPassword(email, password).then(function(user) {
          // Step 4a.
          return user.linkWithCredential(pendingCred);
        }).then(function() {
          // Google account successfully linked to the existing Firebase user.
          goToApp();
        });
        return;
      }
      // All the other cases are external providers.
      // Construct provider object for that provider.
      // TODO: implement getProviderForProviderId.
      var provider = getProviderForProviderId(methods[0]);
      // At this point, you should let the user know that he already has an account
      // but with a different provider, and let him validate the fact he wants to
      // sign in with this provider.
      // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
      // so in real scenario you should ask the user to click on a "continue" button
      // that will trigger the signInWithPopup.
      auth.signInWithPopup(provider).then(function(result) {
        // Remember that the user may have signed in with an account that has a different email
        // address than the first one. This can happen as Firebase doesn't control the provider's
        // sign in flow and the user is free to login using whichever account he owns.
        // Step 4b.
        // Link to Google credential.
        // As we have access to the pending credential, we can directly call the link method.
        result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
          // Google account successfully linked to the existing Firebase user.
          goToApp();
        });
      });
    });
  }
});

//Salir sesión de usuario 

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});