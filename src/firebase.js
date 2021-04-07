import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDH6PbLix-ruIk8kW8dxhyaAbxLx5Atxus",
    authDomain: "voltooi-task-manager.firebaseapp.com",
    projectId: "voltooi-task-manager",
    storageBucket: "voltooi-task-manager.appspot.com",
    messagingSenderId: "297949589411",
    appId: "1:297949589411:web:45e6133f5384796b62f416"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase