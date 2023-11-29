import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";

const AppliedTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  console.log(trainers);

  const onlyAppliedTrainers = trainers.filter(
    (items) => items.status === "user"
  );
  console.log("Applied trainer", onlyAppliedTrainers);

  const handleConfirmTrainer = trainer => {
     axiosPublic.patch(`/trainers/${trainer._id}`)
     .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0)
        {
            refetch(); 
            //toast
        toast.success(`${trainer.trainer_name} is Trainer now.`, {
            position: "top-right",
          });
          
        }
     })
  }

  return (
    <div>
      <Helmet>
        <title>Fithub | Dashboard | AppliedTrainer</title>
      </Helmet>
      <CustomTitle
        subHeader="approved trainers"
        header="Applied Trainers"
      ></CustomTitle>

      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          Total Applied Trainers: {onlyAppliedTrainers.length}
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
                <th>Applied Trainer Name</th>
                <th>Applied Trainer Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {onlyAppliedTrainers.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.trainer_name}</td>
                  <td>{item.trainer_email}</td>

                  <td>
                    {/* <button className="btn btn-sm bth-ghost text-rose-600">
                <FaEye className="text-2xl"></FaEye>
             </button> */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      {" "}
                      <FaEye className="text-2xl text-rose-600"></FaEye>
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <div className="details-box">
                          <h1 className="text-3xl font-extrabold text-center text-black">
                            Details Info
                          </h1>
                           
                          <div className="text-black space-y-2 font-bold text-lg text-center p-6 ">
                             <h2 className=""><span className="text-rose-500">{`Applier's`} Name: </span>{item.trainer_name}</h2>
                             <h2 className=""><span className="text-rose-500">{`Applier's`} Age: </span>{item.age} </h2>
                             <h2 className=""><span className="text-rose-500">Email: </span>{item.trainer_email}</h2>

                             <h2 className=""><span className="text-rose-500">Weekly available hours: </span>{item.weeklyHour} hour</h2>
                             <h2 className=""><span className="text-rose-500">Daily available hours: </span>{item.dailyHour} hour</h2>
                            
                             <h2 className=""><span className="text-rose-500">Experience: </span>{item.experience}+ years</h2>

                             <div className="flex justify-center items-center gap-4  pt-6">
                             <button onClick={() => handleConfirmTrainer(item)} className="btn bg-rose-500 text-white hover:bg-rose-500 ">
                              Confirm
                            </button>
                            <button className="btn bg-black text-white hover:bg-rose-500 ">
                              Reject
                            </button>
                             </div>

                             
                          </div>

                        </div>

                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-rose-600 text-white hover:bg-rose-500 btn-sm">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    {/* modal ends here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedTrainers;
