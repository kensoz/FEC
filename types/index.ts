// * ------------------------------
// *
// * Type
// *
// * ------------------------------

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
  name: string
  color: string
  descriptionZh: string
  descriptionJa: string
  url: string
  urlZh: string
  urlJa: string
  relatedZh: string[]
  relatedJa: string[]
}

export interface IListStaticProps {
  props: {
    list: IList[]
  }
}

// ----- panel -----
export interface IGlobalList {
  id: string
  name: string
  groupId: number
  groupName: string
  businessEX: string
  personalEX: string
}

export interface IYear {
  id: number
  value: string
}

// ----- layout -----
// モバイルnavbar
export interface INavBarValue {
  nameJa: string
  nameZh: string
  value: string
}

// ----- ssg&page -----
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

// ----- i18n -----
export interface Ii18n {
  [key: string]: string
}
