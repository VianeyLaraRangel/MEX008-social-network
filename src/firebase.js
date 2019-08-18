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

//Función registrar usuario con correo y contraseña
const register = (email, password) => {
  if (password === '') {
    alert('¡No olvides crear tu contraseña! Debe tener al menos 6 caracteres');
  }
  if (email === '') {
    alert('¡No olvides ingresar un correo electrónico válido!');
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).then((  ) => {
    
    location.hash = '#/login';
    
    const user = firebase.auth().currentUser;
    console.log(user);
    user.sendEmailVerification()
    .then( () => {
      alert('¡Se enviará un mensaje de verificacion a tu dirección de correo electronico!');
      // Email sent.
      cerrarSesion();
    }).catch(function (error) {
      // An error happened.
    });
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
  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
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

//Registro con google
const registerGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  //Autentica a traves de una ventana emergente
  firebase
    .auth().signInWithPopup(provider)
    .then((result) => {
      //Google Access Token.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const userGO = result.user;
      console.log(userGO);
      location.hash = "#/inicio";
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};

//Registro con FB
const registerFb = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  //Autentica a traves de una ventana emergente
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      //Facebook Access Token.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const userFB = result.user;
      console.log(userFB);
      location.hash = "#/inicio";
    })
    .catch(function (error) {
      alert('error');
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};

//Funcion para ingreso
function ingreso() {
	const email2 = document.getElementById('email2').value;
	const password2 = document.getElementById('password2').value;
	firebase
		.auth()
		.signInWithEmailAndPassword(email2, password2)
		.catch(function(error) {
			//Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
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

function cerrar() {
	firebase
		.auth()
		.signOut()
		.then(function() {
			console.log('saliendo');
		})
		.catch(function(error) {
			console.log(error);
		});
}

//imprimir publicacion
const db = firebase.firestore();

const publicar = () => {
	const post = document.getElementById('publication-text').value;
	console.log(post);
	console.log(db.collection('dbhopaki'));
	db.collection('dbhopaki')
		.add({
			first: post,
		})
		.then(function(docRef) {
			console.log('Document written with ID: ', docRef.id);

			document.getElementById('publication-text').value = '';
		})
		.catch(function(error) {
			console.error('Error adding document: ', error);
		});
};
//leyendo datos

const printPosts = () => {
	db.collection('dbhopaki').onSnapshot(querySnapshot => {
		const postArea = document.getElementById('post-area');
		// console.log(postArea);
		postArea.innerHTML = '';
		querySnapshot.forEach(doc => {
			const borrarPublicacion = post => {
				console.log('eliminar', post);

				db.collection('dbhopaki')
					.doc(post)
					.delete()
					.then(function() {
						console.log('Document successfully deleted!');
					})
					.catch(function(error) {
						console.error('Error removing document: ', error);
					});
			};
			console.log(`${doc.data().first}`);
			postArea.innerHTML += ` <br><br>
		<div class="col-12 data-box">
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
