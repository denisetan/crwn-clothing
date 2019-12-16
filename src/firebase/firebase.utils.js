import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {    
    apiKey: "AIzaSyByYr5e3XLoDkMEzKS2t-3C39P3H5EOfGI",
    authDomain: "crwn-db-9b8e7.firebaseapp.com",
    databaseURL: "https://crwn-db-9b8e7.firebaseio.com",
    projectId: "crwn-db-9b8e7",
    storageBucket: "crwn-db-9b8e7.appspot.com",
    messagingSenderId: "298289553854",
    appId: "1:298289553854:web:f293453c9d21f3c3a399ef",
    measurementId: "G-P0FJD9EY82"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData      
          }) 
        } catch (error) {
          console.log('error creating user', error.message);  
        }
    }

    return userRef;

};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

