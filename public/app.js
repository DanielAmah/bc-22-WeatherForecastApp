(function() {
	 var config = {
        apiKey: "AIzaSyA8nkxbEk7by1ZR9jzMSvW5cVFwgwYMt6c",
        authDomain: "bc-22-weatherforecastapp.firebaseapp.com",
        databaseURL: "https://bc-22-weatherforecastapp.firebaseio.com",
        projectId: "bc-22-weatherforecastapp",
        storageBucket: "bc-22-weatherforecastapp.appspot.com",
        messagingSenderId: "994611442270"
    };
  firebase.initializeApp(config);

  // Get elements from HTML
const mail = document.getElementById('userEmail');
const password = document.getElementById('entryOne');
const btnLogin = document.getElementById('logIn');
const btnSignup = document.getElementById('signUp');
const btnlogout = document.getElementById('btnlogout');

// Add Login Event
btnLogin.addEventListener('click', e => {

	// Get Email and password
	const email = mail.value;
	const pass = password.value;
	const auth = firebase.auth();

	// Sign In 
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => 
		//alert(e.message);
		console.log(e.message));
});

// Add Sign Up EVent
btnSignup.addEventListener('click', e => {

	// Get Email and password
	const email = mail.value;
	const pass = password.value;
	const auth = firebase.auth();

	// Sign In 
	const promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => 
		//alert(e.message);
		console.log(e.message));
});



// Add a realtime listener
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user);
		window.location="weather.html";
	} else {
		console.log('not logged in');
		window.location="index.html";
	}
});

btnlogout.addEventListener('click', e => {
	
	 firebase.auth().signOut();


});

function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key==13){
     searching();
  }
}

}());