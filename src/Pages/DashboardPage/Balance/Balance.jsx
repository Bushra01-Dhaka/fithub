import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaThumbsUp, FaUser, FaUsers } from "react-icons/fa";
import PieChart from "./PieChart";


const Balance = () => {
    const axiosSecure = useAxiosSecure();

    const {data: stats} =  useQuery({
        queryKey: ['admin-state'],
        queryFn:  async() => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    console.log(stats);

    if (!stats) {
        // You can render a loading state or return null
        return <div>Loading...</div>;
      }


    return (
        <div>
            <Helmet>
                <title>Fithub | Dashboard | Balance</title>
            </Helmet>
           

    
<div className="w-[70%] mx-auto">

            <div className=" mx-auto mt-10">

            <div className="stats shadow bg-rose-300 py-6 border-2 border-rose-600">
  
  <div className="stat place-items-center">
    <FaUsers className="text-3xl text-blue-400 m-2"></FaUsers>
    <div className="stat-title text-slate-600">Total Users</div>
    <div className="stat-value text-rose-600">{stats.users}</div>
  </div>

  <div className="stat place-items-center">
    <FaUser  className="text-3xl text-blue-400 m-2"></FaUser>
    <div className="stat-title text-slate-600">Total Trainers</div>
    <div className="stat-value text-rose-600">{stats.totalTrainers}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <FaThumbsUp className="text-3xl text-blue-400 m-2"></FaThumbsUp>
    <div className="stat-title text-slate-600">Total Subscribers</div>
    <div className="stat-value text-rose-600">{stats.subscriber}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <FaDollarSign className="text-3xl text-blue-400 m-2" ></FaDollarSign>
    <div className="stat-title text-slate-600">Paid Members</div>
    <div className="stat-value text-rose-600">{stats.paidUser}</div>
   
  </div>
 
  
</div>
           
           </div>

{/* piechart */}
<br />
<br />

<CustomTitle
            subHeader="Have a look"
            header="Statistics"
            ></CustomTitle>

<div className="ml-16 mb-6">
     
      <PieChart
        totalUsers={stats?.users}
        totalSubscribers={stats?.subscriber}
        totalPaidMembers={stats?.paidUser}
      />
    </div>



</div>          


 </div>
    );
};

export default Balance;