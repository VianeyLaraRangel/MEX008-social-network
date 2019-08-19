//Integrando configuracion de proyecto en firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0',
	authDomain: 'hopaki-prueba.firebaseapp.com',
	databaseURL: 'https://hopaki-prueba.firebaseio.com',
	projectId: 'hopaki-prueba',
	storageBucket: 'hopaki-prueba.appspot.com',
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
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			location.hash = '#/login';
			const user = firebase.auth().currentUser;
			console.log(user);
			user.sendEmailVerification()
				.then(() => {
					alert('¡Se enviará un mensaje de verificacion a tu dirección de correo electronico!');
					// Email sent.
					cerrarSesion();
				})
				.catch(error => {
					alert('Tu registro no fue existoso');
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

//Registro con google
const registerGmail = () => {
	//Crea una instancia del objeto del proveedor de Google
	const provider = new firebase.auth.GoogleAuthProvider();
	//Autentica a traves de una ventana emergente
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(result => {
			//Google Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			let user = result.user;
			console.log(user);
			location.hash = '#/inicio';
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
			// ...
		});
};

//Registro con FB
const registerFb = () => {
	//Crea una instancia del objeto del proveedor de FB
	const provider = new firebase.auth.FacebookAuthProvider();
	//Autentica a traves de una ventana emergente
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
			alert('exito');
			console.log('result');
			//FB Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			let user = result.user;
			console.log(user);
			location.hash = '#/inicio';
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
			// ...
		});
};

//Funcion para ingresar
const loginUser = (loginEmail, loginPassword) => {
	if (loginPassword === '') {
		alert('¡Rucuerda la contraseña con la que te registraste');
	}
	if (loginEmail === '') {
		alert('¡Recuerda ingresar el correo con el que te registraste!');
	}
	firebase
		.auth()
		.signInWithEmailAndPassword(loginEmail, loginPassword)
		.then(() => {
			location.hash = '#/inicio';
		})
		.catch(error => {
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
//Función para reestablecer contraseña
const resetPassword = () => {
	const auth = firebase.auth();
	const emailAddress = 'user@example.com';

	auth.sendPasswordResetEmail(emailAddress)
		.then(() => {
			// Email sent.
		})
		.catch(function(error) {
			// An error happened.
		});
};

//Función para ingresar con Google
//Función para ingresar con FB

//Función para cerrar sesión
const cerrarSesion = user => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			console.log('saliendo');
			location.hash = '#/intro';
		})
		.catch(error => {
			console.log('No ha podido cerrar sesion');
		});
};
//Función para guardar datos
const posting = () => {
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

//Función para imprimir post
const printPosts = user => {
	db.collection('dbhopaki').onSnapshot(querySnapshot => {
		const postArea = document.getElementById('post-area');
		// console.log(postArea);
		postArea.innerHTML = '';
		querySnapshot.forEach(doc => {
			console.log(doc);
			const borrarPublicacion = post => {
				console.log('eliminar', post);
				console.log(user);
				alert('¿Seguro que quieres eliminar tú publicación?');
				db.collection('dbhopaki')
					.doc(post)
					.delete()
					.then(function() {
						alert('¡Tú publicación se ha eliminado');
					})
					.catch(function(error) {
						console.error('Error removing document: ', error);
					});
			};

			//Cambiando template por Rosario

			console.log(`${doc.data().first}`);
			postArea.innerHTML += ` <br><br>
		<div class="data-box">
		<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${doc.data().first}</textarea>
			<div class="btn-group btn-group-toggle" data-toggle="buttons">
        		<td><button class="btn btn-danger" id="btn-eliminar">Eliminar</button></td>
        <td><button class="btn btn-warning"  id="btn-editar">Editar</button></td>
        <td><input type="button" id="btn-like" value="Like" class="btn like-btn"></td>
        <td><input type="button" id="btn-dislike" value="Dislike" class="btn dislike-btn"></td>
			</div>
        </div>`;
			const btnEliminar = document.getElementById('btn-eliminar');
      btnEliminar.addEventListener('click', () => borrarPublicacion(doc.id));
      
			//Funciones básicasgit  de like-dislike por Rosario
			const btnLike = document.getElementById('btn-like');
			let i = 0;
			const contadorLikes = () => {
				i = i + 1;
				btnLike.value = 'Like (' + i + ')';
			};
			btnLike.addEventListener('click', contadorLikes);
			const btnDislike = document.getElementById('btn-dislike');
			const contadorDislikes = () => {
				i = i - 1;
				btnLike.value = 'Like (' + i + ')';
			};

			btnDislike.addEventListener('click', contadorDislikes);
		});
	});
};
