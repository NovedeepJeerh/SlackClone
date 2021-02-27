import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNWEH3d2SsPfARAp2Djby-Mt0p0GBlkPE",
    authDomain: "slack-clone-ddb9c.firebaseapp.com",
    projectId: "slack-clone-ddb9c",
    storageBucket: "slack-clone-ddb9c.appspot.com",
    messagingSenderId: "666112346253",
    appId: "1:666112346253:web:cb8a59decf17eda4a97ac4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider, db };