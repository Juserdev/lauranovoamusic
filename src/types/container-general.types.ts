import type { Imgs } from "./imgs.types"

export type ICONS = Imgs['whatsapp'] | Imgs['mail'] | Imgs['logo']

export interface Cbc_Config {
  cc: {
    class: string
  }
}

export interface Cg_Config {
  cg: {
    class: string
  }
  logo: {
    class: string
    src: ICONS
    alt: string
  },
  title: {
    class: string
    text: string
  }
}

export interface Wsc_Config {
  phone: string
  text_message: string
}

export interface Btns_Config {
  a: {
    class: {
      common: string
      specific: string
    }
    href: ICONS
    target?: string
    rel?: string
  }
  icon: {
    class: {
      common: string
      specific: string
    }
    src: string
    alt: string
  }
  text: {
    class: string
    text: string
  }
}