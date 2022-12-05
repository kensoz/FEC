// * ------------------------------
// *
// * FEC Unit Test
// *
// * ------------------------------
import '@testing-library/jest-dom'
import { testFunction } from './unit/function.unit'
import { testPage } from './unit/page.unit'

describe('FEC Unit Test', async (): Promise<void> => {
  // 画面遷移テスト
  await testPage()

  // 関数テスト
  await testFunction()
})
