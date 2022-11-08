import { collection, getDocs, query, where, getFirestore, Firestore } from 'firebase/firestore'
import type { IData } from '../types'
import { db } from './index'

export const getData = async (e?: string): Promise<IData[]> => {
  let data: IData[] = []
  const db: Firestore = getFirestore()

  const col = collection(db, 'data')

  // const q = query(col, where('capital', '==', true))

  await getDocs(col)
    .then((res): void => {
      res.forEach((doc) => {
        const tmp = doc.data() as IData
        data.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return data
}
