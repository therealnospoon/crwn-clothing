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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
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
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;