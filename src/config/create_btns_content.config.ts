import type { Btns_Config, Cbc_Config, Wsc_Config } from "../types/container-general.types"
import { imgs } from "./imgs.config"

export const cbc_config = {
  cc: {
    class: 'contact-container'
  }
} as const satisfies Cbc_Config

export const bm_config = {
  a: {
    class: {
      common: 'btns',
      specific: 'btn-mail'
    },
    href: 'mailto:reservas@lauranovoamusic.com'
  },
  icon: {
    class: {
      common: 'icons',
      specific: 'icon-mail'
    },
    src: imgs.mail,
    alt: 'icon mail'
  },
  text: {
    class: 'mail-text',
    text: 'reservas@lauranovoamusic.com'
  }
} as const satisfies Btns_Config

const wsc_confing = {
  phone: '573006904590',
  text_message: encodeURIComponent("Hola Laura, me gustaría solicitar información exclusiva para mi boda en Cartagena.")
} satisfies Wsc_Config


export const ws_config = {
  a: {
    class: {
      common: 'btns',
      specific: 'btn-ws'
    },
    href: `https://wa.me/${wsc_confing.phone}?text=${wsc_confing.text_message}`,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  icon: {
    class: {
      common: 'icons',
      specific: 'icon_ws'
    },
    src: imgs.whatsapp,
    alt: 'icon ws'
  },
  text: {
    class: 'ws-text',
    text: 'Reserva ahora'
  }
} as const satisfies Btns_Config