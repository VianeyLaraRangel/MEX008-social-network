 //Función registrar usuario con correo y contraseña
  const registrar = () => {
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    
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
  };

  const btnRegistrar = document.getElementById('registrar-btn').addEventListener('click', registrar);

//Funcion para ingreso
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
//Observador de la autenticación  
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
          type="module"
        } else {
          // User is signed out.
          console.log("no existe usuario activo");
        }
      })  
    }
  observador();
  

  function cerrar() {
    firebase.auth().signOut()
    .then(function() {
        console.log("saliendo");
  
    })
    .catch(function(error) {
        console.log(error);
    })
  }















  

//Accediendo con google
const registerGmail = () => {
	//crea una instancia del objeto del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();

	//Autentica a traves de una ventana emergente
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
			console.log('Hola');
		})
		.catch(function(error) {
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

const botonGoogle = document.getElementById('btn-google').addEventListener('click', registerGmail);

