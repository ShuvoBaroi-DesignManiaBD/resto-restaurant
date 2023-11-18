import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import MainRoute from './Layouts/MainRoute';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Routes}>
        <MainRoute></MainRoute>
        <Toaster />
      </RouterProvider>
  </React.StrictMode>,
)
