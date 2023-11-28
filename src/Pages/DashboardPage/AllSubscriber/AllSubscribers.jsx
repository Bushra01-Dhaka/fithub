import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllSubscribers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: subscribers = [] } = useQuery({
    queryKey: ["subscriber"],
    queryFn: async () => {
      const res = await axiosSecure.get("/newsletter");
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Fithub | Dashboard | Subscribers</title>
      </Helmet>

      <CustomTitle subHeader="List of" header="All Subscribers"></CustomTitle>

      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          Total Subscribers: {subscribers.length}
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
              </tr>
            </thead>
            <tbody>
                {
                    subscribers.map((item,index) =>  <tr key={subscribers._id}>
                    <th>{index + 1}</th>
                    <td>{item.subscriber_name}</td>
                    <td>{item.subscriber_email}</td>
                    
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

export default AllSubscribers;
