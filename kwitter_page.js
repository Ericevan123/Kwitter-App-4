var firebaseConfig = {
    apiKey: "AIzaSyCjrmWIIDlufIQ4rjM8hdzCMMba3xeg-qs",
    authDomain: "kwitter-webpage-8cd03.firebaseapp.com",
    databaseURL: "https://kwitter-webpage-8cd03-default-rtdb.firebaseio.com",
    projectId: "kwitter-webpage-8cd03",
    storageBucket: "kwitter-webpage-8cd03.appspot.com",
    messagingSenderId: "273215417145",
    appId: "1:273215417145:web:99ec9e7777d5a9ab14d6e8",
    measurementId: "G-RMV4SM7X9W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

//Start code

//End code
 } });  }); }
getData();

user_name = localStorage.getItem("user-name");
room_name = localStorage.getItem("room-name")

function send(){
    msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}