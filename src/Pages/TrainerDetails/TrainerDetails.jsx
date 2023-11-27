import { FaBullseye, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const TrainerDetails = () => {
    const eachTrainerData = useLoaderData();
    const{
        _id,
        trainer_name,
        trainer_email,
        age,
        photo,
        skills,
        weeklyHour,
        dailyHour,
        experience
     } = eachTrainerData;

     const totalSlots = parseFloat(dailyHour);
     console.log(totalSlots);

     // Generate an array of button elements based on totalSlots
  const slotButtons = Array.from({ length: totalSlots }, (_, index) => (
    <button className='btn btn-xm bg-[#F72464] text-white rounded-md hover:bg-black' key={index + 1} onClick={() => handleSlotClick(index + 1)}>
      {`Slot ${index + 1}`}
    </button>
  ));

  // Handle slot button click event
  const handleSlotClick = (slotNumber) => {
    // Add your logic here for handling the slot button click
    console.log(`Slot ${slotNumber} clicked`);
  };



    return (
        <div className="py-20">
            <div className="flex flex-col lg:flex-row justify-center items-center p-4">
                {/* left */}
                <div className=" p-4">
                     <h1 className="text-3xl font-extrabold text-black ">Trainer: {trainer_name}</h1>
                      <p>Experience: {experience}+ years</p>
                      <p>{trainer_email}</p>
                      <hr />
                     <div className="py-4">
                        <p className="text-2xl font-bold text-[#F72464]">Skills</p>
                        <ul>
                        <li className="flex items-center gap-2"><FaBullseye className="text-rose-500"></FaBullseye> Certified</li>
                        <li className="flex items-center gap-2"><FaBullseye className="text-rose-500"></FaBullseye>Customized Bodybuilding</li>
                        <li className="flex items-center gap-2"><FaBullseye className="text-rose-500"></FaBullseye>{skills}</li>
                      </ul>
                     </div>

                     <div className="flex mx-auto text-3xl gap-2 mb-4 text-[#F72464]">
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
              </div>

              <div className='mt-4'>
                {/* Display the generated slot buttons */}
                <p className='text-2xl text-black font-bold py-2'>Available Slots</p>
              {slotButtons}

              </div>
                      
                </div>
                 
                 {/* right */}
                 <div className="rounded">
                   <img 
                   className="rounded p-4 h-[500px] mx-auto"
                   src={photo} alt="" />
                 </div>


            </div>



        </div>
    );
};

export default TrainerDetails;