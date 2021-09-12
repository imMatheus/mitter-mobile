import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const app =
    firebase.apps.length === 0
        ? firebase.initializeApp({
              apiKey: 'AIzaSyCMqsVA5l7KHP_EQ9WGenHqMRMv55EBCxc',
              authDomain: 'mitter-dev.firebaseapp.com',
              databaseURL: 'https://mitter-dev-default-rtdb.europe-west1.firebasedatabase.app',
              projectId: 'mitter-dev',
              storageBucket: 'mitter-dev.appspot.com',
              messagingSenderId: '757161656037',
              appId: '1:757161656037:web:63015ade399b345cb49e0c',
          })
        : firebase.app()

export const fs = firebase.firestore()
export const auth = app.auth()

export default app
