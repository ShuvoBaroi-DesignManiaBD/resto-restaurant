import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import './Styles/index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AuthProvider } from './Contexts/AuthContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './Components/Shared/ScrollToTop/ScrollToTop';


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes}>
        </RouterProvider>
        <Toaster />
        <ScrollToTop></ScrollToTop>
      </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
