import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import Gallery from "../Pages/Gallery/Gallery";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import PrivateRoutes from "./PrivateRoutes";

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
        },
        {
          path: "/classDetails/:id",
          element:<ClassDetails></ClassDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
          path: "/gallery",
          element:<Gallery></Gallery>,
          loader: () => fetch(`http://localhost:5000/gallery`)
        },
        {
          path:"/beTrainer",
          element: <PrivateRoutes><BeATrainer></BeATrainer></PrivateRoutes>
        }
      ]
    },
  ]);

export default router;