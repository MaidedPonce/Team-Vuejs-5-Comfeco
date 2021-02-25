import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../config'
// import 'firebase/firestore'
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
}

firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()
export const auth = firebase.auth()
// export const storage = firebase.storage()
