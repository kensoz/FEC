// * ------------------------------
// *
// * list.jsonデータ追加
// *
// * ------------------------------
import fs from 'node:fs/promises'
import inquirer from 'inquirer'
import makeAnswer from './utils/answer.js'
import prompt from './utils/prompt.js'

// jsonファイル取得
const json = await fs.readFile('./_data/json/list.json', 'utf8').then((res) => JSON.parse(res))

// inquirer
await inquirer.prompt(prompt).then((answers) => {
  // 結果を整理、データ処理
  const res = makeAnswer(json.length, answers)

  // list.jsonファイルにデータ追加
  json.push(res)
  fs.writeFile('./_data/json/list.json', JSON.stringify(json, '', 2), 'utf8')

  console.log('Add JSON data sucess')
})
