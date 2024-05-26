import React from 'react'
// css
import './App.css'
// dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// layouts
import RootLayout from './layout/RootLayout';
// pages
import Home from './pages/Home';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import './i18n'

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      },
    ]
  )

  return (
    <div className='App'>
      <LanguageProvider>
        <RouterProvider router={routes} />
      </LanguageProvider>
    </div>
  )
}

export default App