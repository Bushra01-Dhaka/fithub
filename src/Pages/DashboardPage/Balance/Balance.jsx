import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaThumbsUp, FaUser, FaUsers } from "react-icons/fa";


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
    return (
        <div>
            <Helmet>
                <title>Fithub | Dashboard | Balance</title>
            </Helmet>
            {/* <CustomTitle
            subHeader="Have a look"
            header="Balance"
            ></CustomTitle> */}

            <div className="w-[60%] mx-auto mt-10">
            <div className="stats shadow bg-rose-300 py-6 border-2 border-rose-600">
  
  <div className="stat place-items-center">
    <FaUsers className="text-3xl text-black m-2"></FaUsers>
    <div className="stat-title text-slate-600">Total Users</div>
    <div className="stat-value text-rose-600">{stats.users}</div>
  </div>

  <div className="stat place-items-center">
    <FaUser  className="text-3xl text-black m-2"></FaUser>
    <div className="stat-title text-slate-600">Total Trainers</div>
    <div className="stat-value text-rose-600">{stats.totalTrainers}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <FaThumbsUp className="text-3xl text-black m-2"></FaThumbsUp>
    <div className="stat-title text-slate-600">Total Subscribers</div>
    <div className="stat-value text-rose-600">{stats.subscriber}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <FaDollarSign className="text-3xl text-black m-2" ></FaDollarSign>
    <div className="stat-title text-slate-600">Paid Members</div>
    <div className="stat-value text-rose-600">{stats.paidUser}</div>
   
  </div>
 
  
</div>


</div>




        </div>
    );
};

export default Balance;