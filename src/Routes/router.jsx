import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path: "/classes",
          element:<Classes></Classes>
        }
      ]
    },
  ]);

export default router;