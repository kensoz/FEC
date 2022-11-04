export interface INav {
  id: string
  groupId: number
  groupNameZh: string
  groupNameJa: string
  url: string
}

export interface INavStaticProps {
  props: {
    nav: INav[]
  }
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

export interface IDataStaticProps {
  props: {
    data: IData[]
  }
}
