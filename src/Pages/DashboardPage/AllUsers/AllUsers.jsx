import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0)
        {
            refetch(); 
            //toast
        toast.success(`${user.name} is Admin now.`, {
            position: "top-right",
          });
        }
     })
  }

  return (
    <div>
      <Helmet>
        <title>Fithub | Dashboard | AllUsers</title>
      </Helmet>

      <CustomTitle subHeader="Have a look" header="All Users"></CustomTitle>

      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          Total Users: {users.length}
        </h1>
      </div>

      <div className="p-10">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead className="text-center bg-rose-500 text-black font-bold">
              <tr>
                <th>#</th>
                <th>Subscribers Name</th>
                <th>Subscribers Email</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index) =>  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                       { item.role === "admin" ? <p className="bg-rose-500 text-white p-2 rounded">Admin</p> 
                         :
                         <button
                         onClick={() => handleMakeAdmin(item)}
                         className="btn btn-ghost hover:bg-black"><FaUsers className="text-2xl text-rose-500"></FaUsers></button>
                       }
                    </td>
                    
                  </tr>)
                }
              {/* row 1 */}
             

            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default AllUsers;
