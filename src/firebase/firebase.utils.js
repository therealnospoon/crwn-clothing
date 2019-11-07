import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDlxe_ix8fzwfaoCgJEXHK_Vk_Q19sKF3U",
    authDomain: "crwn-db-d22ba.firebaseapp.com",
    databaseURL: "https://crwn-db-d22ba.firebaseio.com",
    projectId: "crwn-db-d22ba",
    storageBucket: "crwn-db-d22ba.appspot.com",
    messagingSenderId: "826505678786",
    appId: "1:826505678786:web:5683ef4865fc3778f9d05b",
    measurementId: "G-5BRWWY54WL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;