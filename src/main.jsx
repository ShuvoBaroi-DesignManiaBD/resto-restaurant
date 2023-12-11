import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import MainRoute from './Layouts/MainRoute';
import { Toaster } from 'react-hot-toast';
import './Styles/index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AuthProvider } from './Contexts/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}>
      </RouterProvider>
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
