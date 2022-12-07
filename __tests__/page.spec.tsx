// * ------------------------------
// *
// * FEC Unit Test
// * Pageテスト
// *
// * ------------------------------
import { screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'
import '@testing-library/jest-dom'
import type { INav, IList } from '../types'

// mock
const searchKey: string = 'テスト'
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
  beforeAll((): void => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  // ホームページ
  it('/index', async (): Promise<void> => {
    const { render } = await getPage({
      route: '/index',
    })

    render()
    expect(screen.getByText(list[0].descriptionJa)).toBeInTheDocument()
  })

  // グループ
  it('/css', async (): Promise<void> => {
    const { render } = await getPage({
      route: '/css',
    })

    render()
    expect(screen.getByText(list[0].descriptionZh)).toBeInTheDocument()
  })

  // グループ中国語
  it('/css/zh', async (): Promise<void> => {
    const { render } = await getPage({
      route: '/css',
    })

    render()
    expect(screen.getByText(list[0].description)).toBeInTheDocument()
  })

  // グループ英語
  it('/css/en', async (): Promise<void> => {
    const { render } = await getPage({
      route: '/css',
    })

    render()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  // 検索
  it('/search', async (): Promise<void> => {
    const { render } = await getPage({
      route: `/search/?key=${searchKey}`,
    })

    render()
    expect(screen.getByText('該当データはありません!')).toBeInTheDocument()
  })

  // 404
  it('/404', async (): Promise<void> => {
    const { render } = await getPage({
      route: '/404',
    })

    render()
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
