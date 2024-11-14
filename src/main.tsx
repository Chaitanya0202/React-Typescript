import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


import './index.css'
import { AppProvider } from './typescript/ContextAPI/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>


  
<AppProvider>

    <App />
</AppProvider>
  
    


  </StrictMode>,
)
