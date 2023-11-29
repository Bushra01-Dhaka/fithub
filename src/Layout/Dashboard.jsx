import {
  FaAd,
  FaBlog,
  FaBookOpen,
  FaDollarSign,
  FaEdit,
  FaHome,
  FaImages,
  FaList,
  FaThumbsUp,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/fithub.svg";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  //TODO: get admin value from database
  // const isAdmin = true;

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-rose-600 text-white">
        <div>
          <img
            className="w-[100px] h-[100px] rounded-[50%] mx-auto my-4"
            src={logo}
            alt=""
          />
        </div>

        <ul className="menu space-y-4 mt-8">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-white text-rose-500 font-bold hover:bg-black"
                      : ""
                  }
                >
                  {" "}
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/allSubscriber"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-white text-rose-500 font-bold hover:bg-black"
                      : ""
                  }
                >
                  {" "}
                  <FaThumbsUp></FaThumbsUp> All Subscribers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/allTrainer"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-white text-rose-500 font-bold hover:bg-black"
                      : ""
                  }
                >
                  {" "}
                  <FaUsers></FaUsers> All Trainer
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
                  <FaAd></FaAd> Applied Trainer
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

              <li>
                <NavLink
                  to="/dashboard/balance"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-white text-rose-500 font-bold hover:bg-black"
                      : ""
                  }
                >
                  {" "}
                  <FaDollarSign></FaDollarSign> Balance
                </NavLink>
              </li>
            </>
          ) : (
            // normal user
            <>
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
            </>
          )}

          {/* SHARED nav links */}

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
            <NavLink
              to="/gallery"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              {" "}
              <FaImages></FaImages> Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/trainer"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              <FaUsers></FaUsers> Trainer
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/classes"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              <FaList></FaList> Classes
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/community"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-white text-rose-500 font-bold hover:bg-black"
                  : ""
              }
            >
              <FaBlog></FaBlog> Community/Forum
            </NavLink>
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
