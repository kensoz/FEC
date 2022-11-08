import { collection, getDocs } from 'firebase/firestore'
import type { INav } from '../types'
import { db } from './index'

export const getNav = async (): Promise<INav[]> => {
  let nav: INav[] = []

  await getDocs(collection(db, 'nav'))
    .then((res): void => {
      res.forEach((doc) => {
        const tmp = doc.data() as INav
        nav.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return nav
}
