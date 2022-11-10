// * ------------------------------
// *
// * Type
// *
// * ------------------------------

// ----- common -----

// ----- nav collection -----
export interface INav {
  id: string
  groupId: number
  groupName: string
  groupNameZh: string
  groupNameJa: string
}

export interface INavStaticProps {
  props: {
    nav: INav[]
  }
}

// ----- list collection -----
export interface IList {
  id: string
  groupId: number
  groupName: string
  groupNameZh: string
  groupNameJa: string
  sort: number
  name: string
  img: string
  descriptionZh: string
  descriptionJa: string
  url: string
  urlZh: string[]
  urlJa: string[]
}

export interface IListStaticProps {
  props: {
    list: IList[]
  }
}

// ----- ssg -----
export interface IGroupSSGPath {
  params: { group: string }
  locale: string
}

// ----- コンポーネント -----
// ダイアログPanel
export interface IPanel {
  isOpen: boolean
  closePanel: () => void
}

// モバイルnavbar
export interface INavBarValue {
  nameJa: string
  nameZh: string
  value: string
}
