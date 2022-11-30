import { github } from './constant'

// MarkDownファイルテンプレート
const makeTemplate = (lang: string | undefined, data: string[][]) => {
  return lang === 'ja'
    ? [
        { h1: 'マイスキル' },
        { h4: 'リスト' },
        {
          table: {
            headers: ['スキル名', '実務経験', '個人経験'],
            rows: data,
          },
        },
        { p: `リスト作成時間：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: github } },
      ]
    : lang === 'zh'
    ? [
        { h1: '我的技能清单' },
        { h4: '列表' },
        {
          table: {
            headers: ['技术名', '实务经验', '个人经验'],
            rows: data,
          },
        },
        { p: `清单生成时间：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: github } },
      ]
    : [
        { h1: 'MySkill' },
        { h4: 'List' },
        {
          table: {
            headers: ['Skill', 'Business Ex', 'Personal Ex'],
            rows: data,
          },
        },
        { p: `time：${new Date().toLocaleDateString()}` },
        { hr: '' },
        { link: { title: '🍋 FEC', source: github } },
      ]
}

export default makeTemplate
