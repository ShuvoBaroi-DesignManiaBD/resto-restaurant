import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/NotFound';
import MainRoute from './Routes/MainRoute';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}>
        <MainRoute></MainRoute>
      </RouterProvider>
  </React.StrictMode>,
)
