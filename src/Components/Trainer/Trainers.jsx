import { Link } from "react-router-dom";
import CustomTitle from "../../Hooks/CustomTitle";
import img1 from "../../assets/trainers/profile1.jpg"
import img2 from "../../assets/trainers/profile2.jpg"
import img3 from "../../assets/trainers/profile3.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Trainers = () => {
  return (
    <div className="py-20 bg-base-200">
        <CustomTitle
        subHeader="Our Trainers"
        header="Meet Our Trainers"
        ></CustomTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-10 px-6">
        <div data-aos = "flip-up" className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Harry Potter</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>

        <div data-aos = "flip-up" className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Allen Roger</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>


        <div data-aos = "flip-up" className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Faz Ibrahim</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>


      </div>
      <div className="text-center">
      <Link to='/trainer'><button className="btn text-center mx-auto my-4 border-0 bg-[#F72464] rounded text-white hover:bg-rose-500">Explore Best Trainer</button></Link>
      </div>

    </div>
  );
};

export default Trainers;
