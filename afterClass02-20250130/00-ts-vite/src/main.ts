import './style.css'
import { tipado } from './typescript/01-tipado'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<p>Introducción TypeScript</p>
<p>${tipado}</p>
`

