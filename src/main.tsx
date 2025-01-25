import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CardWebComponent } from './components/CardWebComponent'

customElements.define('app-card', CardWebComponent)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
