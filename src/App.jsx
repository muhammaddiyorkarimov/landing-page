import React from 'react'
// css
import './App.css'
// dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// layouts
import RootLayout from './layout/RootLayout';
// pages
import Home from './pages/Home';

function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home/>
          }
        ]
      },
    ]
  )

  return (
    <div className='App'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App