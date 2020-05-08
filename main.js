 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCv9JkMnBxZzf4nLEND4H0XtK-mlPHRSW4",
    authDomain: "aaaa06162223.firebaseapp.com",
    databaseURL: "https://aaaa06162223.firebaseio.com",
    projectId: "aaaa06162223",
    storageBucket: "aaaa06162223.appspot.com",
    messagingSenderId: "669722368917",
    //appId: "1:669722368917:web:016d9ca3b551e32ea7349c"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

   //\Reference USN 
   //function abc(){
   //var usnRef= firebase.database().ref("usn");
   //} 
//Listen for form
document.getElementById("submitUSN").addEventListener("submit",submitUSN); 

//submit form
function submitUSN(e){
    e.preventDefault();
    //get the values
    var usn= getUSN('usn');
    console.log(usn+" "+"Submittled Sucessfully");
      //save usn
      saveUSN(usn);
}
 
 //Take in form values
 function getUSN(id){
    return document.getElementById(id).value;
}

//save usn to fb
function saveUSN(usn){
  var newusnRef = usnRef.push();
  newusnRef.set({
    usn : usn
  });
} 
