import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='content px-5 pt-4'>
      <App />
    </section>
  </React.StrictMode>,
)
