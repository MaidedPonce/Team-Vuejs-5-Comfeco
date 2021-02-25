const config =
    {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'AIzaSyDYULGfjGoXbVsai4kCMpAq-KfA41uIhaU',
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || 'team-vuejs5-comfeco.firebaseapp.com',
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || 'team-vuejs5-comfeco',
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || 'team-vuejs5-comfeco.appspot.com',
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || '385421612063',
      appId: process.env.VUE_APP_FIREBASE_APP_ID || '1:385421612063:web:4637e1de223d911832b12a',
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || 'G-X3DPNPGT1X'
    }

export default config
