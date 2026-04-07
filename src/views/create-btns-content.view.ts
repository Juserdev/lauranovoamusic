import { bm_config, cbc_config, ws_config } from "../config/create_btns_content.config"

export function create_btns_content(): HTMLDivElement {

  const contact_container = document.createElement('div')
  contact_container.classList.add(cbc_config.cc.class)

  // boton mail

  const btn_mail = document.createElement('a')
  btn_mail.classList.add(bm_config.a.class.common, bm_config.a.class.specific)
  btn_mail.href = bm_config.a.href

  const icon_mail = document.createElement('img')
  icon_mail.classList.add(bm_config.icon.class.common, bm_config.icon.class.specific)
  icon_mail.src = bm_config.icon.src
  icon_mail.alt = bm_config.icon.src

  const mail_text = document.createElement('span')
  mail_text.classList.add(bm_config.text.class)
  mail_text.textContent = bm_config.text.text

  // Boton ws



  const btn_ws = document.createElement('a')
  btn_ws.classList.add(ws_config.a.class.common, ws_config.a.class.specific)
  btn_ws.href = ws_config.a.href
  btn_ws.target = ws_config.a.target
  btn_ws.rel = ws_config.a.rel

  const icon_ws = document.createElement('img')
  icon_ws.classList.add(ws_config.icon.class.common)
  icon_ws.src = ws_config.icon.src
  icon_ws.alt = ws_config.icon.alt

  const ws_text = document.createElement('span')
  ws_text.classList.add(ws_config.text.class)
  ws_text.textContent = ws_config.text.text

  btn_mail.append(icon_mail, mail_text)
  btn_ws.append(icon_ws, ws_text)
  contact_container.append(btn_mail, btn_ws)

  return contact_container
}