import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import ErrorPage from "../Pages/NotFound";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/User/AddFood";
import UserRoute from "./UserRoute";
import MyAddedFoods from "../Pages/User/MyAddedFoods";
import Profile from "../Pages/User/Profile";
import FoodDetail from "../Pages/FoodDetail";
import Order from "../Pages/Order";
import PrivateRoute from "./PrivateRoute";
import MyOrder from "../Pages/User/MyOrder";

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
          path: 'foods',
          element: <AllFoods></AllFoods>,
        },
        {
          path: 'foods/:name',
          element: <FoodDetail></FoodDetail>,
        },
      ],
    },
    {
      path: '/user',
      element: <UserRoute></UserRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: 'added-foods',
          element: <MyAddedFoods></MyAddedFoods>
        },
        {
          path: 'my-orders',
          element: <MyOrder></MyOrder>
        },
        {
          path: 'add-food',
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
    {
      path: 'order',
      element:<PrivateRoute><Order></Order></PrivateRoute>,
    },
    
  ]);

export default Routes;