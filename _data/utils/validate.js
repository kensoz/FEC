// Validate
import fs from 'node:fs/promises'
// jsonファイル取得
const json = await fs.readFile('./_data/json/list.json', 'utf8').then((res) => JSON.parse(res))

/**
 * 名称
 * @param { Undefined | String} input
 * @return { Boolean | String}
 */
const nameValidate = (input) => {
  if (!input) return 'name is required'
  if (json.find((i) => i.name.toLowerCase() === input.toLowerCase())) return 'already exist'
  return true
}

/**
 * カラー
 * @param { Undefined | String} input
 * @return { Boolean | String}
 */
const colorValidate = (input) => {
  const reg = /(^#?[0-9A-Fa-f]{6}$)|(^#?[0-9A-Fa-f]{3}$)/
  return reg.test(input) ? true : 'invalid value'
}

/**
 * URL
 * @param { 'must' | 'any' } key
 * @param { Undefined | String} input
 * @return { Boolean | String}
 */
const urlValidate = (key, input) => {
  const reg = /^(https:\/\/|http:\/\/)/
  if (key === 'must') {
    return reg.test(input) ? true : 'invalid value'
  } else {
    if (input) {
      return reg.test(input) ? true : 'invalid value'
    }
    return true
  }
}

/**
 * テキスト
 * @param { Undefined | String} input
 * @return { Boolean | String}
 */
const textValidate = (input) => {
  return input ? true : 'description is required'
}

export { nameValidate, colorValidate, urlValidate, textValidate }
