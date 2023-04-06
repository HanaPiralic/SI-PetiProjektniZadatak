// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOISHlhYiCv2Rj1XKD-mNQRM7521wo4fY",
  authDomain: "hanaproject-31949.firebaseapp.com",
  databaseURL: "https://hanaproject-31949-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hanaproject-31949",
  storageBucket: "hanaproject-31949.appspot.com",
  messagingSenderId: "895709057023",
  appId: "1:895709057023:web:2ce9e120eba435e78ee1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const auth= getAuth();
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");


window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        pass: pass.value,
    }

    signInWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("LogIn successful");
        window.location.replace("index.html");
    })
    .catch(function(err){
        window.location.replace("index.html");
        alert("error"+err)
    })
    console.log(obj);
};