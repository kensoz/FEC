// * ------------------------------
// *
// * Type
// *
// * ------------------------------
// ----- Common -----
export interface IStringObj {
  [key: string]: string
}

// ----- Nav Collection -----
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

// ----- List Collection -----
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

// ----- Modal -----
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

// ----- Layout -----
// モバイルnavbar
export interface INavBarValue {
  nameJa: string
  nameZh: string
  value: string
}

// ----- SSG -----
export interface IGroupSSGPath {
  params: { group: string }
  locale: string
}

// ----- Props -----
export interface ICard {
  list: IList[]
}

export interface IModal {
  isOpen: boolean
  closeModal: () => void
}

export interface IBreadcrumb {
  length: number
}
