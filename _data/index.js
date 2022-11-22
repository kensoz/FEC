// * ------------------------------
// *
// * list.jsonデータ追加
// *
// * ------------------------------
import fs from 'node:fs/promises'
import inquirer from 'inquirer'
import prompt from './prompt.js'

// TODO
// jsonファイル取得
const json = await fs.readFile('./_data/json/test.json', 'utf8').then((res) => JSON.parse(res))

// inquirer
await inquirer.prompt(prompt).then((answers) => {
  json.push(answers)
  fs.writeFile('./_data/json/test.json', JSON.stringify(json), 'utf8')
})
