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
  img: string
  descriptionZh: string
  descriptionJa: string
  url: string
  urlZh: string
  urlJa: string
}

export interface IListStaticProps {
  props: {
    list: IList[]
  }
}

// ----- panel -----
export interface IpanelList {
  groupId: number
  groupName: string
  groupNameZh: string
  groupNameJa: string
  name: string
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
