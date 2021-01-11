import firebase from'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQ4_MzvaYJQU-N1idj8FgNSn300A4oHF8",
    authDomain: "snapchat-clone-2021.firebaseapp.com",
    projectId: "snapchat-clone-2021",
    storageBucket: "snapchat-clone-2021.appspot.com",
    messagingSenderId: "420536095327",
    appId: "1:420536095327:web:50e186ef2f660f632fc1ea"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };