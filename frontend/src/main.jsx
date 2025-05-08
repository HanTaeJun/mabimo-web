import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth.AuthProvider>
      <App />
    </Auth.AuthProvider>
  </StrictMode>,
)
