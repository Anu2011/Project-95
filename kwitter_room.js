
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDj73Ioxtz2SDkZhX53p2cIfK2DWIQy18M",
    authDomain: "kwitter-edcca.firebaseapp.com",
    databaseURL: "https://kwitter-edcca-default-rtdb.firebaseio.com",
    projectId: "kwitter-edcca",
    storageBucket: "kwitter-edcca.appspot.com",
    messagingSenderId: "1027690534837",
    appId: "1:1027690534837:web:f9002d0b7eefd66aa3ebfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }