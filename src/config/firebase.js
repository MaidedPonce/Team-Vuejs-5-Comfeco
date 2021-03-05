import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDYULGfjGoXbVsai4kCMpAq-KfA41uIhaU',
  authDomain: 'team-vuejs5-comfeco.firebaseapp.com',
  projectId: 'team-vuejs5-comfeco',
  storageBucket: 'team-vuejs5-comfeco.appspot.com',
  messagingSenderId: '385421612063',
  appId: '1:385421612063:web:4637e1de223d911832b12a',
  measurementId: 'G-X3DPNPGT1X'
}

firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()
export const auth = firebase.auth()
// export const storage = firebase.storage()
