// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
    apiKey: "AIzaSyA41eD87BLLc4JI7-572G4-cPTb0npvYPI",
    authDomain: "test-team-digital.firebaseapp.com",
    databaseURL: "https://test-team-digital-default-rtdb.firebaseio.com",
    projectId: "test-team-digital",
    storageBucket: "test-team-digital.appspot.com",
    messagingSenderId: "795104829237",
    appId: "1:795104829237:web:669e20a97d442b7732767c",
    measurementId: "G-14PLNESQFZ"
  };

  //Initilize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();*/


//mio codice
function logIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    //document.getElementById('user').value, document.getElementById('password').value
    _etmc.push(["setOrgId", "100007110"]);     
    _etmc.push(["setUserInfo", email]);     
    _etmc.push(["trackPageView"]);	 
    alert("Submit button clicked! email: "+ email+" password: "+password);
    //return true;
}
/*
_etmc.push(["setOrgId", "100007110"]);
_etmc.push(["setUserInfo", {"email": document.getElementById('email').value}]);
_etmc.push(["trackPageView"]); */

/*function signIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    alert("Submit button clicked! email: "+ email+" password: "+password);
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}*/
