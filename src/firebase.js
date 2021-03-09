import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyCeC5Jfyf8xfSntTVqnp_27eDbBasr1UOY",
    authDomain: "crud-e4002.firebaseapp.com",
    projectId: "crud-e4002",
    storageBucket: "crud-e4002.appspot.com",
    messagingSenderId: "580452626885",
    appId: "1:580452626885:web:2e031d1c0c7b3e33901bac"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
  