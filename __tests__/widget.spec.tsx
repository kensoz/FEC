// * ------------------------------
// *
// * FEC Unit Test
// * Widget コンポーネントテスト
// *
// * ------------------------------
import { render, screen, fireEvent } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Modal from '../components/widgets/modal'
import Disclaimer from '../components/widgets/modal/disclaimer'
import Star from '../components/widgets/modal/star'
import '@testing-library/jest-dom'
import { listState } from '../scripts/recoil'
import type { IGlobalList } from '../types'

// recoil
const mock: IGlobalList[] = [{ id: '1', name: 'test', groupId: 1, groupName: 'javascript', businessEX: '-', personalEX: '-' }]
const initializeState = ({ set }: any) => {
  set(listState, mock)
}

// mock
jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'ja',
  }),
}))

// test
describe('Widgets コンポーネントテスト', () => {
  it('modal.tsx', (): void => {
    render(<Modal isOpen={true} mode={'star'} closeModal={() => {}} />, {
      wrapper: RecoilRoot,
    })

    // 動きとデータなし
    expect(screen.getByText('該当データはありません !')).toBeInTheDocument()
  })

  it('modal/star.tsx', (): void => {
    render(
      <RecoilRoot initializeState={initializeState}>
        <Star closeModalContent={() => {}} />
      </RecoilRoot>,
    )

    // データあり
    expect(screen.getByText(mock[0].name)).toBeInTheDocument()
    expect(screen.getByText('技術名称')).toBeInTheDocument()
    expect(screen.getByText('実務経験（年）')).toBeInTheDocument()
    expect(screen.getByText('個人経験（年）')).toBeInTheDocument()
    expect(screen.getByText('MD エクスポート')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('test-starDelete-btn'))
    expect(screen.getByText('該当データはありません !')).toBeInTheDocument()
  })

  it('modal/disclaimer.tsx', (): void => {
    render(<Disclaimer closeModalContent={() => {}} />)

    expect(screen.getByText('免責事項')).toBeInTheDocument()
    expect(screen.getByText('著作権について')).toBeInTheDocument()
    expect(screen.getByText('コンテンツについて')).toBeInTheDocument()
    expect(screen.getByText('連絡先情報')).toBeInTheDocument()
    expect(screen.getByText('このサイトについて')).toBeInTheDocument()
  })
})
