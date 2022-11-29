// * ------------------------------
// *
// * list.json Lint
// *
// * ------------------------------
import fs from 'node:fs/promises'
import { Validator } from 'jsonschema'

// jsonファイル取得
const json = await fs.readFile('./_data/json/list.json', 'utf8').then((res) => JSON.parse(res))
// json schema
const schema = {
  type: 'array',
  items: {
    properties: {
      id: { type: 'string' },
      groupId: { type: 'number' },
      groupName: { type: 'string' },
      name: { type: 'string' },
      color: { type: 'string' },
      descriptionZh: { type: 'string' },
      descriptionJa: { type: 'string' },
      url: { type: 'string' },
      urlZh: { type: 'string' },
      urlJa: { type: 'string' },
      relatedZh: { type: 'array' },
      relatedJa: { type: 'array' },
    },
    required: ['id', 'groupId', 'groupName', 'name', 'color', 'descriptionZh', 'descriptionJa', 'url', 'urlZh', 'urlJa', 'relatedZh', 'relatedJa'],
  },
}

const validator = new Validator()
const result = validator.validate(json, schema)

if (result.errors.length > 0) {
  result.errors.forEach((error) => {
    console.error(error)
  })

  console.log('JSON Lint Error')
  process.exit(1)
} else {
  console.log('JSON Lint Passed')
}
