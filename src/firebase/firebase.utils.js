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

export const createUserProfileDocument = async(userAuth, ...additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if (!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{  
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error Creating a User', error.message);
    }
  }
  return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;