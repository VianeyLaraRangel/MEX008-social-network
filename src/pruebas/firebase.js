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
          alert('La contraseña debe tener 6 caracteres mínimo');
        } else if (errorCode === "auth/email-already-in-use") {
          alert('La dirección de correo electrónico ya fué registrada');
        }
      })
  }

  const btnRegistrar = document.getElementById('registrar-btn').addEventListener('click', registrar);

//Funcion para ingreso
  const ingreso= () => {
    const email2= document.getElementById("email2").value;
    const password2= document.getElementById("password2").value;
    

    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === "auth/invalid-email") {
          alert('correo invalido. No es correcto o no has iniciado sesión');
        } else if (errorCode === "auth/weak-password" || errorCode === "auth/wrong-password") {
          alert('La contraseña es incorrecta, verificala');
        } else if (errorCode === "auth/email-already-in-use") {
          alert('La dirección de correo electrónico ya existe');
        } else if ( errorCode === "auth/user-not-found") {
          alert("Este usuario no existe, por favor registrate");
        }
      })
  }
  const btnInicioSesion = document.getElementById('btn-ingreso').addEventListener('click', ingreso);


  //Observador de la autenticación  
  const observador= () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe usuario activo");
            //aparece();
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;
          //console.log(user);
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
  

  /*function cerrar() {
    firebase.auth().signOut()
    .then(function() {
        console.log("saliendo");
  
    })
    .catch(function(error) {
        console.log(error);
    })
  } */