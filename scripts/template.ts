// * ------------------------------
// *
// * MarkDownファイルテンプレート
// *
// * ------------------------------
import { fecUrl } from './constant'

/**
 * テンプレート
 * @param { String | Undefined } lang
 * @param { String[][] } data
 * @return { Array }
 */
const makeTemplate = (lang: string | undefined, data: string[][]) => {
  return lang === 'ja'
    ? [
        { h1: 'マイスキル' },
        { h4: 'リスト' },
        {
          table: {
            headers: ['スキル名', '実務経験 (年)', '個人経験 (年)'],
            rows: data,
          },
        },
        { p: `作成時間：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: fecUrl } },
      ]
    : lang === 'zh'
    ? [
        { h1: '我的技能清单' },
        { h4: '列表' },
        {
          table: {
            headers: ['技术名', '实务经验 (年)', '个人经验 (年)'],
            rows: data,
          },
        },
        { p: `生成时间：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: fecUrl } },
      ]
    : lang === 'en'
    ? [
        { h1: 'MySkill' },
        { h4: 'List' },
        {
          table: {
            headers: ['Skill', 'Business Ex (Year)', 'Personal Ex (Year)'],
            rows: data,
          },
        },
        { p: `time：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: fecUrl } },
      ]
    : []
}

export default makeTemplate
