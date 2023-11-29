import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  console.log(trainers);

  return (
    <div>
      <Helmet>
        <title>Fithub | Dashboard | AllTrainer</title>
      </Helmet>

      <CustomTitle subHeader="Find here" header="All Trainers"></CustomTitle>

      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          Total Trainers: {trainers.length}
        </h1>
      </div>

      <div className="p-10">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-rose-500 text-black font-bold">
      <tr>
        <th>#</th>
        <th>Profile image</th>
        <th>Trainer Name</th>
        <th>Trainer Email</th>
        <th>Weekly Hour</th>
        <th>Daily Hour</th>
        <th>Experience</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            trainers.map((item,index) =>  <tr key={item._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>

            <td>{item.trainer_name}</td>
            <td>{item.trainer_email}</td>
            <td>{item.weeklyHour} hours</td>
            <td>{item.dailyHour} hours</td>
            <td>{item.experience}+ years</td>
           
            <td>
              <Link><button className="btn btn-sm bth-ghost text-rose-600">Pay</button></Link>
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

export default AllTrainers;
