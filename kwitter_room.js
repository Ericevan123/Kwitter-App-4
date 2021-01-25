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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //end code
   });});}
getData();
username = localStorage.getItem("user-name");

document.getElementById("user_show").innerHTML = "Welcome Back " + username;

function addRoom(){
  room_name = document.getElementById("add_room").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room-name", room_name);

  window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
  localStorage.setItem("room-name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user-name");

  localStorage.removeItem("room-name");

  window.location = "index.html"
};