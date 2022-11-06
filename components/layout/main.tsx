import { useEffect, ReactNode } from 'react'
import { useSetRecoilState } from 'recoil'
import { getData } from '../../firebase/data'
import { getNav } from '../../firebase/nav'
import { navState, dataState } from '../../store'

const Main = ({ children }: Record<'children', ReactNode>) => {
  const setNav = useSetRecoilState(navState)
  const setdata = useSetRecoilState(dataState)

  const request = async (): Promise<void> => {
    const gotNav = await getNav()
    // const gotData = await getData()
    setNav(gotNav)
    // setdata(gotData)
  }

  useEffect(() => {
    request()
  }, [])

  return <main className='main'>{children}</main>
}

export default Main
