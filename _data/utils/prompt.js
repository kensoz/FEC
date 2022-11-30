// inquirer.js prompt
import { nameValidate, colorValidate, urlValidate, textValidate } from './validate.js'

const choicesList = [
  '1.JavaScript & JSframework',
  '2.CSS & CSSframework',
  '3.Node.js',
  '4.Package management & Bundler & Linting',
  '5.Library',
  '6.Deploy',
  '7.Test',
  '8.Cross Platform',
  '9.Tool & Software',
  '10.Other',
]

const prompt = [
  // 名称
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name. ',
    validate: nameValidate,
  },
  // カラー
  {
    type: 'confirm',
    name: 'isColor',
    message: 'Is there an Icon in Simple Icons ?',
  },
  {
    type: 'input',
    name: 'color',
    message: 'Enter the hex color. ',
    validate: colorValidate,
    when: ({ isColor }) => isColor,
  },
  // 分類
  {
    type: 'list',
    name: 'groupName',
    message: 'Choose A type.',
    choices: choicesList,
  },
  // 英語説明
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description.',
    validate: textValidate,
  },
  // 日本語説明
  {
    type: 'input',
    name: 'descriptionJa',
    message: 'Enter the description in Japanese.',
    validate: textValidate,
  },
  // 中国語説明
  {
    type: 'input',
    name: 'descriptionZh',
    message: 'Enter the description in Chinese.',
    validate: textValidate,
  },
  // 公式URL
  {
    type: 'input',
    name: 'url',
    message: 'Enter the homepage URL.',
    validate: (input) => urlValidate('must', input),
  },
  {
    type: 'input',
    name: 'urlJa',
    message: 'Enter the homepage URL in Japanese.',
    validate: (input) => urlValidate('any', input),
  },
  {
    type: 'input',
    name: 'urlZh',
    message: 'Enter the homepage URL in Chinese.',
    validate: (input) => urlValidate('any', input),
  },
  // 英語関連サイト
  {
    type: 'confirm',
    name: 'isrelated',
    message: 'Do you hava any related pages ?',
  },
  {
    type: 'input',
    name: 'related1',
    message: 'related page one. ',
    validate: (input) => urlValidate('any', input),
    when: ({ isrelated }) => isrelated,
  },
  {
    type: 'input',
    name: 'related2',
    message: 'related page two. ',
    validate: (input) => urlValidate('any', input),
    when: ({ related1 }) => related1,
  },
  {
    type: 'input',
    name: 'related3',
    message: 'related page three. ',
    validate: (input) => urlValidate('any', input),
    when: ({ related2 }) => related2,
  },
  // 日本語関連サイト
  {
    type: 'confirm',
    name: 'isrelatedJa',
    message: 'Do you hava any related pages in Japanese ?',
  },
  {
    type: 'input',
    name: 'relatedJa1',
    message: 'related page one. ',
    validate: (input) => urlValidate('any', input),
    when: ({ isrelatedJa }) => isrelatedJa,
  },
  {
    type: 'input',
    name: 'relatedJa2',
    message: 'related page two. ',
    validate: (input) => urlValidate('any', input),
    when: ({ relatedJa1 }) => relatedJa1,
  },
  {
    type: 'input',
    name: 'relatedJa3',
    message: 'related page three. ',
    validate: (input) => urlValidate('any', input),
    when: ({ relatedJa2 }) => relatedJa2,
  },
  // 中国語関連サイト
  {
    type: 'confirm',
    name: 'isrelatedZh',
    message: 'Do you hava any related pages in Chinese ?',
  },
  {
    type: 'input',
    name: 'relatedZh1',
    message: 'related page one. ',
    validate: (input) => urlValidate('any', input),
    when: ({ isrelatedZh }) => isrelatedZh,
  },
  {
    type: 'input',
    name: 'relatedZh2',
    message: 'related page two. ',
    validate: (input) => urlValidate('any', input),
    when: ({ relatedZh1 }) => relatedZh1,
  },
  {
    type: 'input',
    name: 'relatedZh3',
    message: 'related page three. ',
    validate: (input) => urlValidate('any', input),
    when: ({ relatedZh2 }) => relatedZh2,
  },
]

export default prompt
