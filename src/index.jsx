import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

root.render(
    <>
        <h1 
            style={
                {
                    color: 'coral',
                    backgroundColor: 'floralwhite'
                }
            }
            >Hello {toto}</h1>
        <p className='cute-paragraph'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Doloremque, cupiditate?</p>
        <input type="checkbox" id='check'/>
        <label htmlFor="check">that checkbox</label>

    </>
)