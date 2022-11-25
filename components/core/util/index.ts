// MarkDownファイルテンプレート
const makeTemplate = (lang: string | undefined, data: string[][]) => {
  const url: string = 'https://github.com/kensoz/FEC'

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
        { p: '🍋FECのご利用いただきありがとうございます！開発などの問い合わせは下のGitHubまで' },
        { link: { title: 'FEC', source: url } },
      ]
    : [
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
        { p: '非常感谢使用🍋FEC！开发等等的咨询请详见下面的Github仓库' },
        { link: { title: 'FEC', source: url } },
      ]
}

export default makeTemplate
