/* eslint-disable no-useless-catch */
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_yZmrFINuL_xAnaAP6kUvJHXfFunrpko",
    authDomain: "guestbook-a7725.firebaseapp.com",
    projectId: "guestbook-a7725",
    storageBucket: "guestbook-a7725.appspot.com",
    messagingSenderId: "961991564045",
    appId: "1:961991564045:web:1d8ed02c414c98702c6e44",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response.user;
    } catch (error) {
        throw error;
    }
};

const loginWithEmailAndPassword = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw error;
    }
};

const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
    } catch (error) {
        console.log(error);
    }
}

const signInWithGoogle = async () => {
    try {
        const user = await signInWithPopup(auth, googleAuthProvider)
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export {registerWithEmailAndPassword, loginWithEmailAndPassword, auth, resetPassword, signInWithGoogle};
