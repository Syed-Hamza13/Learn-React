import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from '../src/components/Name.jsx'
import List from '../src/components/List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name />
    <List />
  </StrictMode>,
)
