import img from "../../assets/Banner/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
AOS.init();

const BookTrainer = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [slotId] = useSearchParams();
    console.log("booked slot", slotId.get("slot"));
    const trainerData = useLoaderData();
    console.log("Booking Page", trainerData);
    const {
      _id,
      trainer_name,
      trainer_email,
      photo,
      weeklyHour,
      dailyHour,
      experience
   } = trainerData;

      const handleSilverPackage = (e) => {
          e.preventDefault();
          const form = e.target;
          const packageName = form.packageName.value;
          const price = form.price.value;
          console.log(packageName, price);

          const bookTrainerPackageData = {
             packageName,
             price,
             userEmail : user?.email,
             trainer_id: _id,
             trainer_name,
             trainer_email,
             trainer_photo: photo,
             trainer_dailyHour:  dailyHour,
             trainer_weeklyHour:  weeklyHour,
             experience,
             selected_slot: slotId.get("slot"),
          }
          console.log("Selected Package Data sliver", bookTrainerPackageData);

          axiosSecure.post('/packages', bookTrainerPackageData)
     .then(res => {
       console.log(res.data);
       if(res.data.insertedId)
       {
        
        toast.success(`${packageName} package is booked Successful.`, {
           position: "top-center",
         });
       }
     })

      } ;

      const handleGoldPackage = (e) => {
        e.preventDefault();
        const form = e.target;
        const packageName = form.packageName.value;
        const price = form.price.value;
        console.log(packageName, price);

        const bookTrainerPackageData = {
           packageName,
           price,
           userEmail : user?.email,
           trainer_id: _id,
           trainer_name,
           trainer_email,
           trainer_photo: photo,
           trainer_dailyHour:  dailyHour,
           trainer_weeklyHour:  weeklyHour,
           experience,
           selected_slot: slotId.get("slot"),
        }

        console.log("Selected Package Data gold", bookTrainerPackageData);

        axiosSecure.post('/packages', bookTrainerPackageData)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId)
          {
           
           toast.success(`${packageName} package is booked Successful.`, {
              position: "top-center",
            });
          }
        })
    } ;

    const handleDiamondPackage = (e) => {
      e.preventDefault();
      const form = e.target;
      const packageName = form.packageName.value;
      const price = form.price.value;
      console.log(packageName, price);

      const bookTrainerPackageData = {
         packageName,
         price,
         userEmail : user?.email,
         trainer_id: _id,
         trainer_name,
         trainer_email,
         trainer_photo: photo,
         trainer_dailyHour:  dailyHour,
         trainer_weeklyHour:  weeklyHour,
         experience,
         selected_slot: slotId.get("slot"),
      }

      console.log("Selected Package Data Diamond", bookTrainerPackageData);
      axiosSecure.post('/packages', bookTrainerPackageData)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId)
        {
         
         toast.success(`${packageName} package is booked Successful.`, {
            position: "top-center",
          });
        }
      })
  } ;



  return (
    <div>
      <Helmet>
              <title>FitHub | BookTrainer</title>
            </Helmet>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white"
      >
       <div data-aos="zoom-in" className="bg-black bg-opacity-40 border-2 border-[#F72464] text-white p-8 text-center">
          <h1 className="text-center text-6xl text-[#F72464]  font-extrabold">
           Booking Trainer
          </h1>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          {/* silver plans */}
           <div className="bg-base-200 p-6 rounded-md border-r-2 border-b-2 border-rose-500 ">
              <h1 className="text-2xl font-bold">Silver Package</h1>
              <p className="text-5xl font-bold text-rose-500">$80</p>
              <ul className="my-4">
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>24+ Classes</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Weekly Health Diet Check</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Parking Facility</p>
                </li>
              </ul>
              <form onSubmit={handleSilverPackage}>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Package</span>
              </label>
              <input
                type="text"
                placeholder="Silver"
                name="packageName"
                className="input input-bordered rounded"
                defaultValue="Sliver"
                readOnly
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Price:($)</span>
              </label>
              <input
                type="number"
                placeholder="80"
                name="price"
                className="input input-bordered rounded"
                defaultValue="80"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
            <input
              className="btn my-auto lg:btn-block bg-[#F72464] hover:bg-rose-500 text-white"
              type="submit"
              value="Join Now"
            />
          </div>

              </form>
           </div>



           {/* gold plan*/}
           <div className="bg-base-200 p-6 rounded-md border-r-2 border-b-2 border-rose-500 ">
              <h1 className="text-2xl font-bold">Gold Package</h1>
              <p className="text-5xl font-bold text-rose-500">$120</p>
              <ul className="my-4">
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>36+ Classes</p>
                </li>

                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Weekly Health Diet Check</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Parking Facility</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>2 Special class with instructor</p>
                </li>
              </ul>
              <form onSubmit={handleGoldPackage}>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Package</span>
              </label>
              <input
                type="text"
                placeholder="Gold"
                name="packageName"
                className="input input-bordered rounded"
                defaultValue="Gold"
                readOnly
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Price:($)</span>
              </label>
              <input
                type="number"
                placeholder="120"
                name="price"
                className="input input-bordered rounded"
                defaultValue="120"
                readOnly
              />
            </div>

            <div className="form-control mt-6">
            <input
              className="btn my-auto lg:btn-block bg-[#F72464] hover:bg-rose-500 text-white"
              type="submit"
              value="Join Now"
            />
          </div>


              </form>
           </div>

           {/* diamond */}
           <div className="bg-base-200 p-6 rounded-md border-r-2 border-b-2 border-rose-500 ">
              <h1 className="text-2xl font-bold">Diamond Package</h1>
              <p className="text-5xl font-bold text-rose-500">$250</p>
              <ul className="my-4">
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>45+ Classes</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>24/7 entry free</p>
                </li>

                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Weekly Health Diet Check</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>Parking Facility</p>
                </li>
                <li className="flex gap-2 align-center">
                    <FaCircle className="text-rose-500"></FaCircle>
                    <p>2 Special class with instructor</p>
                </li>
              </ul>
              <form onSubmit={handleDiamondPackage}>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Package</span>
              </label>
              <input
                type="text"
                placeholder="Diamond"
                name="packageName"
                className="input input-bordered rounded"
                defaultValue="Diamond"
                readOnly
              />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Price:($)</span>
              </label>
              <input
                type="number"
                placeholder="250"
                name="price"
                className="input input-bordered rounded"
                defaultValue="250"
                readOnly
              />
            </div>
               
            <div className="form-control mt-6">
            <input
              className="btn my-auto lg:btn-block bg-[#F72464] hover:bg-rose-500 text-white"
              type="submit"
              value="Join Now"
            />
          </div>


              </form>
           </div>



      </div>


    </div>
  );
};

export default BookTrainer;
