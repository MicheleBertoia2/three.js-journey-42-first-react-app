import './style.css'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

root.render(
    // <>
    //     <h1 
    //         style={
    //             {
    //                 color: 'coral',
    //                 backgroundColor: 'floralwhite'
    //             }
    //         }
    //         >Hello {toto}</h1>
    //     <p className='cute-paragraph'>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Doloremque, cupiditate?</p>
    //     <input type="checkbox" id='check'/>
    //     <label htmlFor="check">that checkbox</label>

    // </>

    <div>
        <App clickersCount={3}>
           <h1>My First React App </h1> 
           <h2>And a fancy subtitle</h2>
        </App>
    </div>
)