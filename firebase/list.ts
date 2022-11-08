import { collection, doc, getDoc, getFirestore, Firestore } from 'firebase/firestore'
import type { IData } from '../types'
import { db } from './index'

export const getList = async (): Promise<void> => {
  // let data: IData[] = []
  // const db: Firestore = getFirestore()
  // const lai = collection(db, 'data')

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(lai);
  const colRef = collection(db, 'data')
  console.log(colRef)

  // return data
}
