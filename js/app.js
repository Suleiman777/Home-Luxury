
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAD87c73hzgV11UFB0CK2KBNWIxriZ1vGw",
    authDomain: "new-authentication-de37b.firebaseapp.com",
    projectId: "new-authentication-de37b",
    storageBucket: "new-authentication-de37b.appspot.com",
    messagingSenderId: "784148766970",
    appId: "1:784148766970:web:a15f6150f41721bb876943"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  //signup function
  let signUpButton = document.getElementById("signup");
  signUpButton.addEventListener("click", (e) =>{
    //prevent default form submission behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      alert("user signed up sucessful");

      //signed in
      var user = userCredential.user;
      console.log("user, user.email");
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error Message", errorMessage);
      alert(errorMessage);
    });
  });


  //SIGNIN FUNCTION

  let signInButton = document.getElementById("signin");
  signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      window.location = "home.html";
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });

  });