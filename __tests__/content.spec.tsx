// * ------------------------------
// *
// * FEC Unit Test
// * Contents コンポーネントテスト
// *
// * ------------------------------
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Breadcrumb from '../components/contents/breadcrumb'
import Card from '../components/contents/card'
import '@testing-library/jest-dom'
import type { IList } from '../types'

// props
const propsBreadcrumb: number = 1
const propsCard: IList[] = [
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

// mock
jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'ja',
    query: '/',
  }),
}))

// test
describe('Contentsコンポーネントテスト', () => {
  it('breadcrumb.tsx', (): void => {
    render(<Breadcrumb length={propsBreadcrumb} />)

    expect(screen.getByText('ホームページ')).toBeInTheDocument()
    expect(screen.getByText(`トータル：${propsBreadcrumb}`)).toBeInTheDocument()
  })

  it('card.tsx -normal', (): void => {
    // 正常
    render(<Card list={propsCard} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('日本語公式')).toBeInTheDocument()
    expect(screen.getByAltText('javascript')).toBeInTheDocument()
  })

  it('card.tsx -error', (): void => {
    // 異常またはundfined
    render(<Card list={[]} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('該当データはありません!')).toBeInTheDocument()
  })
})
