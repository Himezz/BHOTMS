import React from 'react'
import ReactDOM from 'react-dom/client'
import{  App} from './App.jsx'
import './styles/index.css'
import { Home } from './comps/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
