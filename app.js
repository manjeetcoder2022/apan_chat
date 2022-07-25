var firebaseConfig = {
    apiKey: "AIzaSyAKBEtUkoVuiL_5ftb_KC8Bb-PDb-g6rMM",
    authDomain: "chat-web-20eef.firebaseapp.com",
    databaseURL: "https://chat-web-20eef-default-rtdb.firebaseio.com",
    projectId: "chat-web-20eef",
    storageBucket: "chat-web-20eef.appspot.com",
    messagingSenderId: "1092423367769",
    appId: "1:1092423367769:web:b79064d32c29682dac4548"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function login() {
    user_name = document.getElementById("user_name").value
    subject_name = document.getElementById("subject_name").value
    room_name = document.getElementById("room_name").value
    localStorage.setItem("user_name", user_name)
    localStorage.setItem("subject_name", subject_name)
    localStorage.setItem("room_name", room_name)
    
    document.getElementById("share").style.display="block"


    firebase.database().ref("/").child("detail_of_user").update
   

   ({
    user_name:user_name,
     subject_name:subject_name,
     room_name:room_name
   })

   window.alert("Detail Save on firebase (DATABASE) ")

   document.getElementById("room_name_used").innerHTML="<br>" + "<br>" + "<h2>" + room_name + "</h2>" 
}

function send() {
    user_name_fetch = localStorage.getItem("user_name")
    subject_name_fetch= localStorage.getItem("subject_name")
    room_name_fetch = localStorage.getItem("room_name")
    a = "mailto:EnterYourGroupName@gmail.com?body=Your " + subject_name_fetch + " Teacher " + user_name_fetch +  " Requesting to you join the chat Session by Open APNA CHAT website. "+   "Enter Room name = " + room_name_fetch
    document.getElementById("share").href = a
}

