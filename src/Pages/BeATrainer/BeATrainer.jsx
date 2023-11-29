import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/classes/classes1.jpg";
import Newsletters from "../../Components/Newsletter/Newsletters";

import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
AOS.init();

const BeATrainer = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleApplyNow = (e) => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email = user?.email;
     const age = form.age.value;
     const photo = form.photo.value;
     const skills = form.skills.value;
     const weeklyHour = form.weeklyHour.value;
     const dailyHour = form.dailyHour.value;
     const experience = form.experience.value;

     console.log(name, email, age, photo, skills, weeklyHour, dailyHour, experience);

    

     const trainerData = {
        trainer_name: name,
        trainer_email: email,
        age,
        photo,
        skills,
        weeklyHour,
        dailyHour,
        experience,
        status: "user"
     }
     console.log(trainerData);
     axiosSecure.post('/trainers', trainerData)
     .then(res => {
       console.log(res.data);
       if(res.data.insertedId)
       {
        
        toast.success(`Applied Successful.`, {
           position: "top-center",
         });
       }
     })
  }

  return (
    <div>
     <Helmet>
              <title>FitHub | BeATrainer</title>
            </Helmet>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white"
      >
        <div data-aos="zoom-in" className="bg-black bg-opacity-40 border-2 border-[#F72464] text-white p-8 text-center">
          <h1 className="text-center text-6xl text-[#F72464]  font-extrabold">
            Be a trainer?
          </h1>
          <p className="py-4">You are welcome to join Fithub team</p>
        </div>
      </div>

      <div>
        <form onSubmit={handleApplyNow} className="px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mxx-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={`${user?.email}`}
                className="input input-bordered"
                required
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="number"
                placeholder="age"
                name="age"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>


              <div className="form-control">
              <label className="label">
                <span className="label-text">Skills</span>
              </label>

              <select name="skills" className="select select-bordered w-full max-w-xs">
            <option>Certifications</option>
            <option>Customized Program Design</option>
            <option>Motivational Skills</option>
            <option>Nutritional Guidance</option>
          </select>
            
            </div>

            {/* <select name="skills" className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Skills
            </option>
            <option>Certifications</option>
            <option>Customized Program Design</option>
            <option>Motivational Skills</option>
            <option>Nutritional Guidance</option>
          </select> */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available time in a week</span>
              </label>
              <input
                type="number"
                name="weeklyHour"
                placeholder="weekly available hours"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available time in a day</span>
              </label>
              <input
                type="number"
                name="dailyHour"
                placeholder="daily available hours"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Years of Experience</span>
              </label>
              <input
                type="number"
                placeholder="experience (0 if it's your first job)"
                name="experience"
                className="input input-bordered"
                required
              />
            </div>
        


          </div>

         

          <div className="form-control mt-6">
            <input
              className="btn lg:btn-block bg-[#F72464] hover:bg-rose-500 text-white"
              type="submit"
              value="Apply Now"
            />
          </div>
        </form>
      </div>

      <Newsletters></Newsletters>
    </div>
  );
};

export default BeATrainer;
