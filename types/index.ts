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
  groupNameZh: string
  groupNameJa: string
  name: string
  color: string
  descriptionZh: string
  descriptionJa: string
  url: string
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

// ----- i18n -----
export interface Ii18n {
  [key: string]: string
}
