import { useContext } from "react";
import CustomTitle from "../../../Hooks/CustomTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ProfileSetting = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
        <Helmet>
            <title>FitHub | Dashboard | ProfileSetting</title>
        </Helmet>
      <CustomTitle 
      subHeader="Setting"
      header="My Profile Setting"></CustomTitle>
      <div className="flex justify-center items-center my-8">
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-rose-500">
          <figure className="py-6">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-rose-500 ring-offset-base-100 ring-offset-2">
                <img className="" src={user?.photoURL}/>
              </div>
            </div>
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <p>{user?.email}</p>
            <div className="card-actions justify-center my-4">
              <button className="btn bg-rose-500 text-white hover:bg-red-500">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
