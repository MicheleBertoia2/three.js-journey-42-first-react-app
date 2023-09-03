import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const toto = 'tata'

root.render(
    <>
        <h1 className='main-title'>Hello {toto}</h1>
        <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Doloremque, cupiditate?</p>
        <input type="checkbox" id='check'/>
        <label htmlFor="check">that checkbox</label>

    </>
)