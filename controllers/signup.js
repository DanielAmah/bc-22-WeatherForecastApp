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

    let Email = document.getElementById('email');
    let password = document.getElementById('password');
    let btnsignin = document.getElementById('btnsignin');
    let btnsignup = document.getElementById('btnsignup');

    signup.addEventListener('click', e => {

				setTimeout(function(){ 
				location.href="public/index.html"; 
				}, 6000);

    })

    signin.addEventListener('click', e => {
		
		 setTimeout(function(){ 
				location.href="public/index.html"; 
				}, 7000);

    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);

        } else {

            console.log('not logged in');
            window.location.href = '../signin.html';
        }
    });




}());