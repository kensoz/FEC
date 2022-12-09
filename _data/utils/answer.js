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
    name: answer.name ?? '',
    color: '',
    description: answer.description ?? '',
    descriptionZh: answer.descriptionZh ?? '',
    descriptionJa: answer.descriptionJa ?? '',
    url: answer.url ?? '',
    urlZh: answer.urlZh ?? '',
    urlJa: answer.urlJa ?? '',
    related: [],
    relatedZh: [],
    relatedJa: [],
  }

  // group
  const list = ['javascript', 'css', 'node', 'project', 'lib', 'deploy', 'test', 'mixed', 'tool', 'other']
  const groupId = answer.groupName.split('.')[0]
  item.groupId = Number(groupId)
  item.groupName = list[Number(groupId) - 1]

  // color
  if (answer.isColor) {
    const hexReg = /^#/i
    item.color = answer.color ? answer.color.replace(hexReg, '') : ''
  }

  // related site
  if (answer.isrelated) {
    if (answer.related1 !== '' && answer.related1 !== undefined) item.related.push(answer.related1)
    if (answer.related2 !== '' && answer.related1 !== undefined) item.related.push(answer.related3)
    if (answer.related2 !== '' && answer.related1 !== undefined) item.related.push(answer.related3)
  }

  if (answer.isrelatedJa) {
    if (answer.relatedJa1 !== '' && answer.relatedJa1 !== undefined) item.relatedJa.push(answer.relatedJa1)
    if (answer.relatedJa2 !== '' && answer.relatedJa2 !== undefined) item.relatedJa.push(answer.relatedJa3)
    if (answer.relatedJa2 !== '' && answer.relatedJa3 !== undefined) item.relatedJa.push(answer.relatedJa3)
  }

  if (answer.isrelatedZh) {
    if (answer.relatedZh1 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh1)
    if (answer.relatedZh2 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh3)
    if (answer.relatedZh2 !== '' && answer.relatedZh1 !== undefined) item.relatedZh.push(answer.relatedZh3)
  }

  return item
}

export default makeAnswer
