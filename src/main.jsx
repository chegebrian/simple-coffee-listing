import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { CoffeeProvider } from './contexts/CoffeeApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </StrictMode>,
)
