import { Helmet } from "react-helmet-async";
import img from "../../assets/classes/classesCver.jpg";
import logo from "../../assets/logo/fithub.svg";

import { FaArrowCircleDown } from 'react-icons/fa';
import useClasses from "../../Hooks/useClasses";
import FeaturedClass from "../../Components/FeaturedClass/FeaturedClass";
import { Link } from "react-router-dom";

const Classes = () => {

    const [classes] = useClasses();

  return (
    <div>
      <Helmet>
        <title>FitHib | Classes</title>
      </Helmet>

      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white"
      >
       
         <div className="bg-base-200 bg-opacity-40 p-8 rounded">
         <div className="w-[120px] h-[120px] rounded-[50%] bg-[#F72464] mx-auto">
            <div className="mx-auto items-center">
              <img
                className="w-[100px] h-[100px] mx-auto mb-4 p-2"
                src={logo}
                alt=""
              />
            </div>
          </div>

          <h2 className="text-4xl text-center font-bold my-4">FitHub Classes</h2>
          <hr />
          <p>Elevate Your Workout Experience with FitHub Gym</p>
          <Link to="#classes"><FaArrowCircleDown className="text-[60px] text-center mx-auto py-4 text-[#F72464]"></FaArrowCircleDown></Link>
         </div>

        
      </div>

        <div id="classes" className="grid grid-cols-1 md:grid-cols-2 px-10 gap-6 mt-20 py-8">
            {
                classes.map(item => <FeaturedClass
                    key={item._id}
                    item={item}
                
                ></FeaturedClass>)
            }
        </div>
     

    </div>
  );
};

export default Classes;
