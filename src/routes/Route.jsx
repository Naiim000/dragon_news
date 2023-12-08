import {
    createBrowserRouter

  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('/news.json')

        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/career",
            element:<Career></Career>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/news/:id",
          element:<PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
          loader:()=>fetch('/news.json')

        }

      ]
    },
  ]);

  export default routes;