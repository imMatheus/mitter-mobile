import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCMqsVA5l7KHP_EQ9WGenHqMRMv55EBCxc',
    authDomain: 'mitter-dev.firebaseapp.com',
    databaseURL: 'https://mitter-dev-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'mitter-dev',
    storageBucket: 'mitter-dev.appspot.com',
    messagingSenderId: '757161656037',
    appId: '1:757161656037:web:63015ade399b345cb49e0c',
})

export const fs = firebase.firestore()
export const auth = app.auth()
export const db = app.database()

export default app

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
