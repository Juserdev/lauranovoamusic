import { create_btns_content } from "./create-btns-content.view"
import { create_general_info } from "./create-general-info.view"

export function create_content(): HTMLDivElement {

  const alignment_container = document.createElement('div')
  alignment_container.classList.add('alignment-container')

  const contact_container = create_btns_content()
  const container_general = create_general_info(contact_container)
  alignment_container.appendChild(container_general)

  return alignment_container
}