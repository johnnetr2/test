import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBzI0XJQ1X8Mb8BiFkOdXDeF3tsi80LEXA",
    authDomain: "hp-appen.firebaseapp.com",
    projectId: "hp-appen",
    storageBucket: "hp-appen.appspot.com",
    messagingSenderId: "354336988189",
    appId: "1:354336988189:web:bf0b641a257368a0aafaf4",
    measurementId: "G-82KSDPRLBM"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;