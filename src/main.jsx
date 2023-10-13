import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TabS from './module/Tabset.jsx'
import Tabset from './module/Tabset.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Tabset/>
  </React.StrictMode>,
)
