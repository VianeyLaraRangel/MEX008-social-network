//Integrando configuracion de proyecto en firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0",
  authDomain: "hopaki-prueba.firebaseapp.com",
  databaseURL: "https://hopaki-prueba.firebaseio.com",
  projectId: "hopaki-prueba",
  storageBucket: "hopaki-prueba.appspot.com",
  messagingSenderId: "967562359456",
  appId: "1:967562359456:web:8517811f94b84354"
};
// Inicializando Firebase
firebase.initializeApp(firebaseConfig);

//Función registrar usuario con correo y contraseña
const registrar = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      if (errorCode === "auth/invalid-email") {
        alert('Correo inválido: Ingresa la dirección completa');
      } else if (errorCode === "auth/weak-password") {
        alert('La constraseña debe tener 6 caracteres mínimo');
      } else if (errorCode === "auth/email-already-in-use") {
        alert('La dirección de correo electrónico ya fué registrada');
      }
    });
  location.hash = "#/inicio"
};

//Registro con FB
const registerFb = () => {
  //agregamos la instancia de objeto de proveedor de FB
  const provider = new firebase.auth.FacebookAuthProvider();
  //acceder con su cuenta, por medio de un popup
  firebase.auth().signInWithPopup(provider).then(function (result) {
    alert('exito');
    console.log('result');
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    alert('error');
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

//Registro con google
const registerGmail = () => {
  //crea una instancia del objeto del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  //Autentica a traves de una ventana emergente
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('Hola');
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};


//Funcion para ingreso
function ingreso() {
  const email2 = document.getElementById("email2").value;
  const password2 = document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function (error) {
      //Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

//Observador de la autenticación  
const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo");
      //User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      console.log("user");
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      type = "module"
      location.hash = '#/inicio'
    } else {
      //User is signed out.
      console.log("no existe usuario activo");
    }
  });
};

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo");
    })
    .catch(function (error) {
      console.log(error);
    })
};

//Inicializando firestore

const db= firebase.firestore();


const publicacion = document.getElementById('publicacion').value;
console.log
const post= document.getElementById('text-feed');

//guardar datos
const publicar =  () => {
 
  db.collection("bdhopaki").add( {
   first: publicacion
 })
 .then(function(docRef) {
   console.log("Document written with ID: ", docRef.id);
   document.getElementById('publicacion').value='';
 })
 .catch(function(error) {
   console.error("Error adding document: ", error);
 });
}
// leer datos

db.collection("bdhopaki").onSnapshot((querySnapshot) => {
  console.log(querySnapshot);
  console.log(querySnapshot.doc);
 querySnapshot.forEach((doc) => {
  //  console.log(querySnapshot.docs);

     console.log(`${doc.data().first}`);
     post.innerHTML += `<div class="feed">
     <textarea id="content-post"  name="publicacion" rows="3" cols="40"></textarea>
     <button id="btn-editar" class="bg-warning btn-lg">Editar</button>
     <button id="btn-eliminar" class="bg-danger btn-lg">Eliminar</button>
     </div>`
     post.innerHTML='';
 });
});
//borrar datos
function eliminar(id) {
 db.collection("users").doc(id).delete().then(function() {
   console.log("Document successfully deleted!");
 }).catch(function(error) {
   console.error("Error removing document: ", error);
 });
}
//actualizar datos
function editar(id, nombre, apellido, nacimiento) {
 document.getElementById('nombre').value = nombre;
 document.getElementById('apellido').value = apellido;
 document.getElementById('nacimiento').value = nacimiento;
 const boton= document.getElementById('boton');
 boton.innerHTML= Editar;
 boton.onclick=function () {
   const washingtonRef = db.collection("users").doc(id);
   const nombre = document.getElementById('nombre').value;
   const apellido = document.getElementById('apellido').value;
   const nacimiento = document.getElementById('nacimiento').value;
   return washingtonRef.update({
     first: nombre,
     last: apellido,
     born: nacimiento
   })
   .then(function() {
       console.log("Document successfully updated!");
       boton.innerHTML = Guardar;
   })
   .catch(function(error) {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
   });
  }
}
