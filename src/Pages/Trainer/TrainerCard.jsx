import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
AOS.init();


const TrainerCard = ({card}) => {
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
     } = card;

     const totalSlots = parseFloat(dailyHour);
     console.log(totalSlots);

   


    return (
        <div data-aos = "flip-up" className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6 text-black">
            <figure>
              <img
                className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
                src={photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body mx-auto text-center">
              <h1 className="text-3xl font-bold text-[#F72464]">{trainer_name}</h1>
              <p>{experience}+ years experience</p>
              <p>Available Time Slots: {dailyHour} hours</p>
              <div className="flex mx-auto text-3xl gap-2 mb-4 text-[#F72464]">
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
              </div>
             

              <div>
                <Link to={`/trainerDetails/${_id}`}><button className='btn bg-black text-white rounded-md hover:bg-rose-500'>Know More</button></Link>
              </div>

            </div>

            {/* <div className='text-center'>
                <p className='text-black font-bold'>Available Slots</p>
              {slotButtons}

              </div> */}


          </div> 
    );
};

export default TrainerCard;