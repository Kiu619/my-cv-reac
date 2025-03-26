import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TabProvider } from './context/TabContext.tsx'
import { ColorProvider } from './context/ColorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ColorProvider>
        <TabProvider>
            <App />
        </TabProvider>
        </ColorProvider>  
  </React.StrictMode>,
)
