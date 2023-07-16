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


auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
        // is signed in
    } else {
        alert("user not authenticated, kindly login or signup");
        window.location = "index.html";
    }
});

//logout function
let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
e.preventDefault();
console.log("logout clicked")
auth.signOut();
alert("signed out");
window.location = "index.html";
});