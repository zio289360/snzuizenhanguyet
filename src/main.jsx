import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootEl = document.getElementById('root') || (() => {
  const div = document.createElement('div')
  div.id = 'root'
  document.body.appendChild(div)
  return div
})()

ReactDOM.createRoot(rootEl).render(<App />)
