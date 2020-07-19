function displayPicture(element){
    var frame = document.getElementById('frame');
    frame.innerHTML = element.alt;
    frame.style.backgroundImage="url('"+element.src+"')";
}

function undisplayPicture(){
    var frame = document.getElementById('frame');
    frame.innerHTML = "Vamos nos conhecer melhor? Passe o mouse sobre as imagens para aumentá-las!";
    frame.style.backgroundImage="none";
}

function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    )
}



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA0ZTI0JKCVRlB8srFnLEBH6PxwEErHQEA",
    authDomain: "progweb1598100.firebaseapp.com",
    databaseURL: "https://progweb1598100.firebaseio.com",
    projectId: "progweb1598100",
    storageBucket: "progweb1598100.appspot.com",
    messagingSenderId: "1086699922391",
    appId: "1:1086699922391:web:121099f12a2cf8e754a192"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var databaseReference = firebase.database().ref("TT905_2020")
