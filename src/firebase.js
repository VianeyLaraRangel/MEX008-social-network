//Integrando configuracion de proyecto en firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0',
  authDomain: 'hopaki-prueba.firebaseapp.com',
  databaseURL: 'https://hopaki-prueba.firebaseio.com',
  projectId: 'hopaki-prueba',
  storageBucket: '',
  messagingSenderId: '967562359456',
  appId: '1:967562359456:web:8517811f94b84354',
};
// Inicializando Firebase
firebase.initializeApp(firebaseConfig);

//Inicializando firestore para CRUD
const db = firebase.firestore();

//Función registrar usuario con correo y contraseña
const register = (email, password) => {
  if (password === '') {
    alert('¡No olvides crear tu contraseña! Debe tener al menos 6 caracteres');
  }
  if (email === '') {
    alert('¡No olvides ingresar un correo electrónico válido!');
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    alert('¡Se enviará un mensaje de verificacion a tu dirección de correo electronico!');
    location.hash = '#/login';
    cerrarSesion();
  })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      if (errorCode === 'auth/invalid-email') {
        alert('Correo inválido: Ingresa la dirección completa');
      } else if (errorCode === 'auth/weak-password') {
        alert('La constraseña debe tener 6 caracteres mínimo');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('La dirección de correo electrónico ya fué registrada');
      }
    });
};

//Funcion para ingreso
const loginUser = (loginEmail, loginPassword) => {
  if (loginPassword === '') {
    alert('¡Rucuerda la contraseña con la que te registraste');
  }
  if (loginEmail === '') {
    alert('¡Recuerda ingresar el correo con el que te registraste!');
  }
  firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword)
    .then(() => {
      location.hash = "#/inicio";
    })
    .catch((error) => {
      //Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      if (errorCode === 'auth/invalid-email') {
        alert('Correo inválido: Ingresa la dirección completa');
      } else if (errorCode === 'auth/weak-password') {
        alert('La constraseña debe tener 6 caracteres mínimo');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('La dirección de correo electrónico ya fué registrada');
      }
    });
};


//Registro con FB
const registerFb = () => {
  //agregamos la instancia de objeto de proveedor de FB
  const provider = new firebase.auth.FacebookAuthProvider();
  //acceder con su cuenta, por medio de un popup
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
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
  firebase
    .auth().signInWithPopup(provider)
    .then((result) => {
      //Google Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(user);
      location.hash = "#/inicio"
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

//Función para cerrar sesión
const cerrarSesion = (user) => {
  firebase.auth().signOut()
    .then(() => {
      console.log('saliendo');
    })
    .catch((error) => {
      console.log('No ha podido cerrar sesion');
    });
}



const posting = () => {
  const post = document.getElementById('publication-text').value;
  console.log(post);
  console.log(db.collection('dbhopaki'));
  db.collection('dbhopaki')
    .add({
      first: post,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);

      document.getElementById('publication-text').value = '';
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

const printPosts = () => {
  db.collection('dbhopaki').onSnapshot(querySnapshot => {
    const postArea = document.getElementById('post-area');
    // console.log(postArea);
    postArea.innerHTML = '';
    querySnapshot.forEach(doc => {
      const borrarPublicacion = post => {
        console.log('eliminar', post);
        console.log(user);
        alert('¿Seguro que quieres eliminar tú publicación?');
        db.collection('dbhopaki')
          .doc(post)
          .delete()
          .then(function () {
            alert('¡Tú publicación se ha eliminado');
          })
          .catch(function (error) {

            // if () {

            // }
            console.error('Error removing document: ', error);
          });
      };
      console.log(`${doc.data().first}`);
      postArea.innerHTML += ` <br> <br><div class="col-12 data-box">
        <p>${doc.data().first}</p>
        <td><button class="btn btn-danger" id="btn-eliminar">Eliminar</button></td>
        <td><button class="btn btn-warning"  id="btn-editar">Editar</button></td>
        </div>`;
      const btnEliminar = document.getElementById('btn-eliminar');
      btnEliminar.addEventListener('click', () => borrarPublicacion(doc.id));
    });
  });
};

//borrar publicación
//const btnEliminar = document.getElementById('btn-eliminar');
