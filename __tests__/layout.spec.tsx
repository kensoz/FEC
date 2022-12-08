// * ------------------------------
// *
// * FEC Unit Test
// * Layout コンポーネントテスト
// *
// * ------------------------------
import { render, screen, fireEvent } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import Navbar from '../components/layout/navbar'
import Toolbar from '../components/layout/toolbar'
import Nav from '../components/nav'
import '@testing-library/jest-dom'

// mock
jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'ja',
  }),
}))

jest.mock('../firebase/api', () => ({
  getNavCollection: () => [],
}))

// test
describe('Layoutテスト', () => {
  it('footer.tsx', (): void => {
    render(<Footer />)

    expect(screen.getByText('© 2022 renhou Front-End-Collection')).toBeInTheDocument()
    expect(screen.getByText('免責事項')).toBeInTheDocument()
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
    expect(screen.getByText('Report Issues')).toBeInTheDocument()
    expect(screen.getByText('Tweet')).toBeInTheDocument()
  })

  it('header.tsx', (): void => {
    render(<Header />)

    fireEvent.click(screen.getByTestId('test-i18n-btn'))
    expect(screen.getByText('日本語')).toBeInTheDocument()
    expect(screen.getByText('简体中文')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByAltText('logo')).toBeInTheDocument()
  })

  it('toolbar.tsx', (): void => {
    render(<Toolbar />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByPlaceholderText('検索')).toBeInTheDocument()
    expect(screen.getByText('エクスポート')).toBeInTheDocument()
  })

  it('navbar.tsx', (): void => {
    render(<Navbar />)

    expect(screen.getByText('技術分類')).toBeInTheDocument()
    expect(screen.getByText('ホームページ')).toBeInTheDocument()
  })

  it('nav.tsx', (): void => {
    render(<Nav />)

    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText('免責事項')).toBeInTheDocument()
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
    expect(screen.getByText('Report Issues')).toBeInTheDocument()
    expect(screen.getByText('Tweet')).toBeInTheDocument()
  })
})
