import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATXZJGTPcu4BNY_OOrORv4CP-Zz_gtBc0",
    authDomain: "slack-clone-90e1b.firebaseapp.com",
    databaseURL: "https://slack-clone-90e1b.firebaseio.com",
    projectId: "slack-clone-90e1b",
    storageBucket: "slack-clone-90e1b.appspot.com",
    messagingSenderId: "22543001008",
    appId: "1:22543001008:web:19b22332c4b3ff6e3f6275",
    measurementId: "G-D28ZSJ07L7",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db ,auth ,provider};
  export default db;

  
