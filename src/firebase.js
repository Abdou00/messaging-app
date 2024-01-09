import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyCVxm_NZeG9H9m7jQwK405ELIg8HmFgHig",
    authDomain: "messaging-app-f68c7.firebaseapp.com",
    projectId: "messaging-app-f68c7",
    storageBucket: "messaging-app-f68c7.appspot.com",
    messagingSenderId: "327941391448",
    appId: "1:327941391448:web:6490973eb8b7ad5882b62d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db