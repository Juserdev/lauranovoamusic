
import './style.css'
import { create_content } from './views/create-content.view'

const app = document.querySelector<HTMLDivElement>('#app')

const container = create_content()
app?.appendChild(container)
