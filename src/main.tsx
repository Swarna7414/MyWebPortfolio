import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
// @ts-expect-error - fontsource package lacks TypeScript types
import "@fontsource/pacifico";
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/MyWebPortfolio'>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)