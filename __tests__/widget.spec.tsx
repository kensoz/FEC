// * ------------------------------
// *
// * FEC Unit Test
// * Widgetテスト
// *
// * ------------------------------
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Modal from '../components/widgets/modal'
import Disclaimer from '../components/widgets/modal/disclaimer'
import Star from '../components/widgets/modal/star'
import '@testing-library/jest-dom'
import { listState } from '../scripts/recoil'

// recoil
const initializeState = ({ set }: any) => {
  set(listState, [{ id: '1', name: 'test', groupId: 1, groupName: 'javascript', businessEX: '-', personalEX: '-' }])
}

jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'ja',
  }),
}))

describe('Widgetsテスト', () => {
  it('modal.tsx', (): void => {
    render(<Modal isOpen={true} mode={'star'} closeModal={() => {}} />, {
      wrapper: RecoilRoot,
    })

    expect(screen.getByText('該当データはありません!')).toBeInTheDocument()
  })

  it('modal/star.tsx', (): void => {
    render(
      <RecoilRoot initializeState={initializeState}>
        <Star closeModalContent={() => {}} />
      </RecoilRoot>,
    )

    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('エクスポート')).toBeInTheDocument()
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
