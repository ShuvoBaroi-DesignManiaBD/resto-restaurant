import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layouts/MainRoute";
import ErrorPage from "../Pages/NotFound";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";

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
          path: 'blog',
          element: <Blog></Blog>,
        },
        {
          path: 'all-food-items',
          element: <AllFoods></AllFoods>,
        },
        {
          path: '/add-food',
          element: <AddFood></AddFood>,
        },
      ],
    },
    {
      path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/register',
      element: <Register></Register>,
    },
  ]);

export default Routes;