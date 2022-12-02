// * ------------------------------
// *
// * Firestoreにデータをインポート
// *
// * ------------------------------
import admin from 'firebase-admin'
import json from '../json/list.json' assert { type: 'json' }
import serviceAccount from './serviceAccount.json' assert { type: 'json' }

// コレクションとデータベース情報
const collectionKey = 'list'
const databaseURL = 'https://fec-server.firebaseio.com'

// プラグイン初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
})

// コンフィグ
const firestore = admin.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

//　インポート
if (json && typeof json === 'object') {
  Object.keys(json).forEach((docKey) => {
    firestore
      .collection(collectionKey)
      .doc(docKey) // idの表記、docKeyなら数字
      .set(json[docKey])
      .then(() => {
        console.log('Document ' + docKey + ' successfully written!')
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  })
}
