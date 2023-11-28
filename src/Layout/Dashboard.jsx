import { FaAd, FaBookOpen, FaCalendar, FaEdit, FaHome, FaImage, FaImages, FaImdb, FaList, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/fithub.svg"

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 h-screen bg-rose-600 text-white">
        <div>
           <img className="w-[100px] h-[100px] rounded-[50%] mx-auto my-4" src={logo} alt="" />
        </div>

        <ul className="menu space-y-4 mt-8">
        <li>
            <NavLink
              to="/dashboard/activityLog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
               <FaBookOpen></FaBookOpen> Activity Log
            </NavLink>
          </li>

        <li>
            <NavLink
              to="/dashboard/userProfile"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
               <FaEdit></FaEdit> Profile Setting
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/recommendedClasses"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
               <FaList></FaList> Recommended Classes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/blogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
              <FaEdit></FaEdit> Add New Forum
            </NavLink>
          </li>




          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>

          <li>
        <NavLink to="/gallery"  className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }> <FaImages></FaImages> Gallery</NavLink>
        </li>


        <li>
        <NavLink to="/trainer"  className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }><FaUsers></FaUsers> Trainer</NavLink>
        </li>


        <li>
        <NavLink to="/classes"  className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }><FaList></FaList> Classes</NavLink>
       </li>
          


         
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
