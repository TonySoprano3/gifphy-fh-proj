import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {GifExpertApp} from '../src/GifExpertApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
)