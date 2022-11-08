// * ------------------------------
// *
// * Cloud Firestore クエリ
// *
// * ------------------------------

import { collection, getDocs, query, where, Query, CollectionReference } from 'firebase/firestore'
import type { IList, INav } from '../types'
import { db } from './index'

/**
 * get Nav data from Firebase Collection
 * @param {}
 * @return {Promise<INav[]>}
 */
export const getNavCollection = async (): Promise<INav[]> => {
  const queryRef = collection(db, 'nav') as CollectionReference<INav>
  let nav: INav[] = []

  await getDocs(queryRef)
    .then((res): void => {
      res.forEach((doc) => {
        const tmp: INav = doc.data()
        nav.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return nav
}

/**
 * get List data from Firebase Collection
 * @param {undefined | string} e
 * @return {Promise<IList[]>}
 */
export const getListCollection = async (e?: string): Promise<IList[]> => {
  const queryRef = e ? query(collection(db, 'list'), where('groupName', '==', e)) : collection(db, 'list')
  let list: IList[] = []

  await getDocs(queryRef)
    .then((res): void => {
      res.forEach((doc) => {
        const tmp = doc.data() as IList
        list.push({ ...tmp, id: doc.id })
      })
    })
    .catch((err): void => console.log(err))

  return list
}
