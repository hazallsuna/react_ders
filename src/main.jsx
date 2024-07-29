import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DuckifyProvider } from './context.jsx'


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <DuckifyProvider>
      <App />
  </DuckifyProvider>
  
)
