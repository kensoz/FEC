// answer

/**
 * 結果を整理、データ処理
 * @param { Number } length
 * @param { Undefined | Object } answer
 * @return { Object } item
 */
const makeAnswer = (length, answer) => {
  let item = {
    id: String(length + 1),
    groupId: 10,
    groupName: '',
    name: answer.name.trim() ?? '',
    color: '',
    description: '',
    descriptionZh: answer.descriptionZh.trim() ?? '',
    descriptionJa: answer.descriptionJa.trim() ?? '',
    url: answer.url.trim() ?? '',
    urlZh: answer.urlZh.trim() ?? '',
    urlJa: answer.urlJa.trim() ?? '',
    related: [],
    relatedZh: [],
    relatedJa: [],
  }

  // English Description
  const tmp = answer.description.trim() ?? ''
  if (answer.description) {
    item.description = tmp.slice(0, 1).toUpperCase() + tmp.slice(1)
  }

  // group
  const list = ['javascript', 'css', 'node', 'project', 'lib', 'deploy', 'test', 'mixed', 'tool', 'other']
  const groupId = answer.groupName.trim().split('.')[0]
  item.groupId = Number(groupId)
  item.groupName = list[Number(groupId) - 1]

  // color
  if (answer.isColor) {
    const hexReg = /^#/i
    item.color = answer.color ? answer.color.trim().replace(hexReg, '') : ''
  }

  // related site
  if (answer.isrelated) {
    if (answer.related1 !== '' && answer.related1 !== undefined) item.related.push(answer.related1.trim())
    if (answer.related2 !== '' && answer.related1 !== undefined) item.related.push(answer.related3.trim())
    if (answer.related2 !== '' && answer.related1 !== undefined) item.related.push(answer.related3.trim())
  }

  if (answer.isrelatedJa) {
    if (answer.relatedJa1 !== '' && answer.relatedJa1 !== undefined) item.relatedJa.push(answer.relatedJa1.trim())
    if (answer.relatedJa2 !== '' && answer.relatedJa2 !== undefined) item.relatedJa.push(answer.relatedJa3.trim())
    if (answer.relatedJa2 !== '' && answer.relatedJa3 !== undefined) item.relatedJa.push(answer.relatedJa3.trim())
  }

  if (answer.isrelatedZh) {
    if (answer.relatedZh1 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh1.trim())
    if (answer.relatedZh2 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh3.trim())
    if (answer.relatedZh2 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh3.trim())
  }

  return item
}

export default makeAnswer
