import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB9yhs9BJItMJJLQ93DAugkwQPHS-e3p3U",
    authDomain: "crown-db-69.firebaseapp.com",
    projectId: "crown-db-69",
    storageBucket: "crown-db-69.appspot.com",
    messagingSenderId: "123117840144",
    appId: "1:123117840144:web:064bcf4b1182a5aa89e795",
    measurementId: "G-XBHL6EW0FG"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUser = async (user, additionalData) => {
  if(!user) {
    console.log("No user found")
    return
  }
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = user;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('eoorr', error.message)
    }
  }



  return userRef
}





export default firebase ;


