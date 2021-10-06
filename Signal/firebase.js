import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHM_JC7QYGSyfiPGONjj0tggdzEITKcJQ",
  authDomain: "signal-clone-f0c7e.firebaseapp.com",
  projectId: "signal-clone-f0c7e",
  storageBucket: "signal-clone-f0c7e.appspot.com",
  messagingSenderId: "534037982493",
  appId: "1:534037982493:web:ec247973bb3c0dfda245f4",
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };