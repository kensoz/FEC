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
  '8.Hybrid App',
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
    type: 'input',
    name: 'color',
    message: 'Enter the hex color (without #). ',
    validate: colorValidate,
  },
  // 分類
  {
    type: 'list',
    name: 'groupName',
    message: 'Choose A type.',
    choices: choicesList,
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
  // URL
  {
    type: 'input',
    name: 'url',
    message: 'Enter the homepage URL.',
    validate: (input) => urlValidate('must', input),
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
