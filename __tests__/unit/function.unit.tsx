// 関数テスト
import { faXmark, faHouse } from '@fortawesome/free-solid-svg-icons'
import { ssgPath, navHome, navIconList, navListZh, navListJa, navListEn, year } from '../../scripts/constant'
import makeTemplate from '../../scripts/template'
import { getIcon, isCurrentPath } from '../../scripts/utils'

export const testFunction = (): void => {
  describe('関数テスト', (): void => {
    it('現在のパス判断', (): void => {
      // 正常
      expect(isCurrentPath('/', '/')).toStrictEqual(true)
      expect(isCurrentPath('/javascript/', 'javascript')).toStrictEqual(true)
      // 異常
      expect(isCurrentPath('/javascript/', '/javascript')).toStrictEqual(false)
    })

    it('icon判断', (): void => {
      // 正常
      expect(getIcon('/')).toEqual(faHouse)
      // 異常
      expect(getIcon('')).toEqual(faXmark)
    })

    it('MDテンプレート', (): void => {
      expect(makeTemplate('ja', [['test']]).length).toBe(6)
      expect(makeTemplate('zh', [['test']]).length).toBe(6)
      expect(makeTemplate('en', [['test']]).length).toBe(6)
      expect(makeTemplate(undefined, [['test']]).length).toBe(0)
    })

    it('定数', (): void => {
      expect(navHome.id).toEqual('99')
      expect(ssgPath.length).toEqual(30)
      expect(navListZh.get('javascript')).toBe('JavaScript与框架')
      expect(navListJa.get('javascript')).toBe('JSとフレームワーク')
      expect(navListEn.get('javascript')).toBe('JS & Framework')
      expect(navIconList.get('/')).toEqual(faHouse)
      expect(year.length).toEqual(6)
    })
  })
}
