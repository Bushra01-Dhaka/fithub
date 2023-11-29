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
import TrainerPage from "../Pages/Trainer/TrainerPage";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import BookTrainer from "../Pages/BookTrainer/BookTrainer";
import Blogs from "../Pages/Blogs/Blogs";
import Dashboard from "../Layout/Dashboard";
import AddBlogs from "../Pages/DashboardPage/AddBlogs";
import ActivityLog from "../Pages/DashboardPage/ActivityLog/ActivityLog";
import ProfileSetting from "../Pages/DashboardPage/ProfileSetting/ProfileSetting";
import RecommendedClasses from "../Pages/RecommendedClasses/RecommendedClasses";
import AllSubscribers from "../Pages/DashboardPage/AllSubscriber/AllSubscribers";
import AllUsers from "../Pages/DashboardPage/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AllTrainers from "../Pages/DashboardPage/AllTrainers/AllTrainers";
import AppliedTrainers from "../Pages/DashboardPage/AppliedTrainer/AppliedTrainers";
import Balance from "../Pages/DashboardPage/Balance/Balance";


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
          loader: ({params}) => fetch(`https://fithub-server-brown.vercel.app/classes/${params.id}`)
        },
        {
          path: "/gallery",
          element:<Gallery></Gallery>,
          loader: () => fetch(`https://fithub-server-brown.vercel.app/gallery`)
        },
        {
          path: "/trainer",
          element: <TrainerPage></TrainerPage>,
          loader:() => fetch(`https://fithub-server-brown.vercel.app/trainers`)
        },
        {
           path: "/trainerDetails/:id",
           element:<TrainerDetails></TrainerDetails>,
           loader: ({params}) => fetch(`https://fithub-server-brown.vercel.app/trainers/${params.id}`)
        },
        {
          path:"/beTrainer",
          element: <PrivateRoutes><BeATrainer></BeATrainer></PrivateRoutes>
        },
        {
          path:"/bookTrainer/:id",
          element: <PrivateRoutes><BookTrainer></BookTrainer></PrivateRoutes>,
          loader: ({params}) => fetch(`https://fithub-server-brown.vercel.app/trainers/${params.id}`)
         
        },

        {
          path:"/community",
          element:<Blogs></Blogs>,
          loader: () => fetch(`https://fithub-server-brown.vercel.app/blogs`)
        },
        
      ]
    },

    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        //normal user routes
        {
          path:"activityLog",
          element:<ActivityLog></ActivityLog>
        },
        {
          path:"userProfile",
          element:<ProfileSetting></ProfileSetting>
        },
        {
          path:"recommendedClasses",
          element: <RecommendedClasses></RecommendedClasses>
        },

        // admin only routes
        {
          path:"blogs",
          element:<AddBlogs></AddBlogs>
        },
        {
          path: "allUsers",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "allSubscriber",
          element:<AllSubscribers></AllSubscribers>,
        },
        {
          path:"allTrainer",
          element: <AllTrainers></AllTrainers>
        },
        
        {
          path:"appliedTrainer",
          element: <AppliedTrainers></AppliedTrainers>
        },
        {
          path: "balance",
          element: <Balance></Balance>
        }


      ]
    }

  ]);

export default router;