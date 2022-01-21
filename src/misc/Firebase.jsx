import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import "firebase/firestore"
import "firebase/storage"

const Config={
    apiKey: "AIzaSyDjpFqim5BoAo01OrdmlIZ6KdnVeRpm2Lc",
    authDomain: "gatewebapp2.firebaseapp.com",
    projectId: "gatewebapp2",
    storageBucket: "gatewebapp2.appspot.com",
    messagingSenderId: "594529425021",
    appId: "1:594529425021:web:26a6866e90a825140a4314"
  };

const app= firebase.initializeApp(Config);
export const  auth =app.auth();
export  var db=firebase.firestore();
export const storage=firebase.storage();