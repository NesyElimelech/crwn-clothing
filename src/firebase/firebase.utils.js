import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwz48Rvu-HNLRayQoWp58PRTnFBg5_I7c",
    authDomain: "crwn-db-9682d.firebaseapp.com",
    databaseURL: "https://crwn-db-9682d.firebaseio.com",
    projectId: "crwn-db-9682d",
    storageBucket: "",
    messagingSenderId: "682194580841",
    appId: "1:682194580841:web:cf925fcbdf19cd7d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;