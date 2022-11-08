// * ------------------------------
// *
// * Firestore v9
// *
// * ------------------------------

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './config'

// 初期化Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
