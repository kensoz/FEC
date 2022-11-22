// * ------------------------------
// *
// * Firestore v9
// *
// * ------------------------------

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// 初期化Firebase
const app = initializeApp({
  apiKey: 'AIzaSyA_Q8M8wmb8C-b22akmhDTf3R15qeJvovg',
  authDomain: 'fec-server.firebaseapp.com',
  projectId: 'fec-server',
  storageBucket: 'fec-server.appspot.com',
  messagingSenderId: '69090820909',
  appId: '1:69090820909:web:19835a8c2a78ac753ec9a4',
})

export const db = getFirestore(app)
