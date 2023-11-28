import { FaCheck } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ClassDetails = () => {
  const classData = useLoaderData();
  const { _id, class_title, class_image, short_description } = classData;
  return (
    <div>
      <div>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-[#F72464] text-primary-content text-2xl lg:text-9xl font-black grid place-content-center">
              {class_title}
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-2xl lg:text-9xl font-black grid place-content-center">
              {class_title}
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center py-20 bg-black text-white">

        {/* left side */}
         <div className="flex-1 p-4">
             <h1 className="text-4xl font-bold my-2 text-[#F72464]">Why Choose Fithub</h1>
             <hr/>
             <ul className="space-y-4 py-6">
                <li className="flex items-center gap-2 ">
                    <FaCheck className="text-[#F72464] text-2xl"></FaCheck><p> 100% Cash Back On Annual Membership</p></li>
                <li className="flex items-center gap-2 "><FaCheck className="text-[#F72464] text-2xl"></FaCheck> Highly Qualified & Experienced Floor Trainer</li>
                <li className="flex items-center gap-2 "><FaCheck className="text-[#F72464] text-2xl"></FaCheck> Body Fat Check</li>
                <li className="flex items-center gap-2 "><FaCheck className="text-[#F72464] text-2xl"></FaCheck> Parking facility</li>
                <li className="flex items-center gap-2 "><FaCheck className="text-[#F72464] text-2xl"></FaCheck> Supplementary Advice</li>
                <li className="flex items-center gap-2 "><FaCheck className="text-[#F72464] text-2xl"></FaCheck> Fitness Assessment</li>
             </ul>
         </div>

         {/* right side */}
         <div className="flex-1 p-4">
            <img 
            className="h-[250px] w-full rounded-md shadow-lg"
            src={class_image} alt="" />
            <h1 className="text-3xl font-bold text-[#F72464] mt-4">{class_title}</h1>
             <p className="py-4">{short_description}</p>

             <Link to='/trainer'><button className="btn btn-block my-4 border-0 bg-[#F72464] rounded text-white hover:bg-rose-500">Join Now</button></Link>
         </div>

      </div>


    </div>
  );
};

export default ClassDetails;
