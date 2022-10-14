import { collection, getDocs, getFirestore } from 'firebase/firestore'
import type { IData } from '../types'

export const getData = async (): Promise<IData[]> => {
  let data: IData[] = []
  const db = getFirestore()

  await getDocs(collection(db, '/data'))
    .then((res): void => {
      res.forEach((doc) => {
        const tmp = doc.data() as IData
        data.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return data
}
