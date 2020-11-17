import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfMU1zaScXMZ55uBiInZvwA1djB_z7hoQ",
  authDomain: "amaz-on-nowfel2k.firebaseapp.com",
  databaseURL: "https://amaz-on-nowfel2k.firebaseio.com",
  projectId: "amaz-on-nowfel2k",
  storageBucket: "amaz-on-nowfel2k.appspot.com",
  messagingSenderId: "859054892621",
  appId: "1:859054892621:web:3ae4956d108c84d7695e04",
  measurementId: "G-Z4H5NSRLQL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // real-time db in firebase
const auth = firebase.auth(); // gives a variable we can use all the signing in, etc

export { db, auth };
