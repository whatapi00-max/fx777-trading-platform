export interface NavLink {
  name: string
  href: string
}

export interface DropdownItem {
  name: string
  href: string
  description?: string
}

export interface NavItem {
  name: string
  href?: string
  dropdown?: DropdownItem[]
}
