export interface INav {
  id: string
  group: number
  groupNameZh: string
  groupNameJa: string
  url: string
}

export interface IData {
  id: string
  sort: number
  group: number
  groupNameZh: string
  groupNameJa: string
  name: string
  img: string
  descriptionZh: string
  descriptionJa: string
  url: string
  urlZh: string[]
  urlJa: string[]
}
