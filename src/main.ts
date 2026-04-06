import mail from './assets/icons/mail.svg'
import ws from './assets/icons/ws.svg'
import logo_lnm from './assets/Logo-dorado-24.png'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

const container_general = document.createElement('div')
container_general.classList.add('container-general')

const logo = document.createElement('img')
logo.classList.add('logo')
logo.src = logo_lnm

const title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'the soul of your wedding in Cartagena'

// contendor de botones mail y whatsapp

// TYPES

interface Icons {
  whatsapp: string
  mail: string
}

//CONFIG

const icons = {
  whatsapp: ws,
  mail: mail
} as const satisfies Icons

// Contenedores

const alignment_container = document.createElement('div')
alignment_container.classList.add('alignment-container')

const contact_container = document.createElement('div')
contact_container.classList.add('contact-container')

// boton mail

const btn_mail = document.createElement('a')
btn_mail.classList.add('btn-mail', 'btns')
btn_mail.href = 'mailto:reservas@lauranovoamusic.com'

const icon_mail = document.createElement('img')
icon_mail.classList.add('icons', 'icon-mail')
icon_mail.src = icons.mail
icon_mail.alt = 'icon mail'

const mail_text = document.createElement('span')
mail_text.classList.add('mail-text')
mail_text.textContent = "reservas@lauranovoamusic.com"

// Boton ws

const btn_ws = document.createElement('a')
btn_ws.classList.add('btn-ws', 'btns')
const phone_number = '573006904590'
const text = encodeURIComponent("Hola Laura, me gustaría solicitar información exclusiva para mi boda en Cartagena.")
btn_ws.href = `https://wa.me/${phone_number}?text=${text}`;
btn_ws.target = '_blank'
btn_ws.rel = "noopener noreferrer";

const icon_ws = document.createElement('img')
icon_ws.classList.add('icons', 'icon_ws')
icon_ws.src = icons.whatsapp
icon_ws.alt = 'icon ws'

const ws_text = document.createElement('span')
ws_text.classList.add('ws-text')
ws_text.textContent = "Reserva ahora"

btn_mail.append(icon_mail, mail_text)
btn_ws.append(icon_ws, ws_text)
contact_container.append(btn_mail, btn_ws)

container_general.append(logo, title, contact_container)
alignment_container.appendChild(container_general)
app?.appendChild(alignment_container)
