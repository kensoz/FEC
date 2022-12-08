// * ------------------------------
// *
// * FEC Unit Test
// * Page コンポーネントテスト
// *
// * ------------------------------
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Custom404 from '../pages/404'
import Group from '../pages/[group]'
import Index from '../pages/index'
import Search from '../pages/search'
import '@testing-library/jest-dom'
import type { INav, IList } from '../types'

// mock
const nav: INav[] = [
  {
    id: '1',
    groupId: 1,
    groupName: 'css',
    groupNameEn: 'JS & Framework',
    groupNameZh: 'JavaScript与框架',
    groupNameJa: 'JSとフレームワーク',
  },
]
const list: IList[] = [
  {
    id: '9999',
    groupId: 1,
    groupName: 'javascript',
    name: 'javascript',
    color: '000000',
    description: 'Test Description',
    descriptionZh: 'Test Description',
    descriptionJa: 'Test Description',
    url: 'https://github.com/kensoz/FEC',
    urlZh: 'https://github.com/kensoz/FEC',
    urlJa: 'https://github.com/kensoz/FEC',
    related: [],
    relatedZh: [],
    relatedJa: [],
  },
]

jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'ja',
    query: '/',
  }),
}))

jest.mock('../firebase/api', () => ({
  getNavCollection: () => nav,
  getListCollection: () => list,
}))

// test
describe('Pageテスト', (): void => {
  it('index.tsx', async (): Promise<void> => {
    render(<Index list={list} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('ホームページ')).toBeInTheDocument()
    expect(screen.getByText('日本語公式')).toBeInTheDocument()
    expect(screen.getByText(list[0].descriptionJa)).toBeInTheDocument()
  })

  it('[group].tsx', async (): Promise<void> => {
    render(<Group list={list} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('ホームページ')).toBeInTheDocument()
    expect(screen.getByText('日本語公式')).toBeInTheDocument()
    expect(screen.getByText(list[0].descriptionJa)).toBeInTheDocument()
  })

  it('search.tsx', async (): Promise<void> => {
    render(<Search list={list} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('ホームページ')).toBeInTheDocument()
    expect(screen.getByText('該当データはありません!')).toBeInTheDocument()
  })

  it('404.tsx', async (): Promise<void> => {
    render(<Custom404 />)

    expect(screen.getByText('お探しのページは見つけることはできません')).toBeInTheDocument()
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
