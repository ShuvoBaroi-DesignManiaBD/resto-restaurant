import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layouts/MainRoute";
import ErrorPage from "../Pages/NotFound";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blog from "../Pages/Blog";

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <MainRoute></MainRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/foods',
          element: <AllFoods></AllFoods>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

export default Routes;