import { cg_config } from "../config/container-general.config"

export function create_general_info(btn: HTMLDivElement) {

  const container_general = document.createElement('div')
  container_general.classList.add(cg_config.cg.class)

  const logo = document.createElement('img')
  logo.classList.add(cg_config.logo.class)
  logo.src = cg_config.logo.src
  logo.alt = cg_config.logo.alt

  const title = document.createElement('h1')
  title.classList.add(cg_config.title.class)
  title.textContent = cg_config.title.text

  container_general.append(logo, title, btn)
  return container_general
}