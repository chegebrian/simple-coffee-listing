import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { CoffeeProvider } from './contexts/CoffeeApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[url(/images/bg-cafe-lg.jpg)] object-contain'>

      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    </div>
  </StrictMode>,
)
