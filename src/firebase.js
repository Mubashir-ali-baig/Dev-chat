import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; 

var firebaseConfig = {
    apiKey: "AIzaSyC95nnB8tNAh95Zt3h7PJpTqa0jpn2pUMA",
    authDomain: "devchat-39552.firebaseapp.com",
    databaseURL: "https://devchat-39552.firebaseio.com",
    projectId: "devchat-39552",
    storageBucket: "devchat-39552.appspot.com",
    messagingSenderId: "822960600254",
    appId: "1:822960600254:web:21cf76f17619e25fbadaef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;