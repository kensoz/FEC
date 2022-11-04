import { collection, getDocs, getFirestore, Firestore } from 'firebase/firestore'
import type { INav } from '../types'

export const getNav = async (): Promise<INav[]> => {
  let nav: INav[] = []
  const db: Firestore = getFirestore()

  await getDocs(collection(db, '/nav'))
    .then((res): void => {
      res.forEach((doc) => {
        const tmp = doc.data() as INav
        nav.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return nav
}
