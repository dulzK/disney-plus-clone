import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBtt9omtdisprifWMZyUz5dFA6GjkVwrHc",
    authDomain: "disney-plus-clone-9b689.firebaseapp.com",
    projectId: "disney-plus-clone-9b689",
    storageBucket: "disney-plus-clone-9b689.appspot.com",
    messagingSenderId: "110464402242",
    appId: "1:110464402242:web:9964e2bd02bcf064a6bedb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;