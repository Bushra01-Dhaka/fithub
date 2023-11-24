import { Link } from "react-router-dom";
import CustomTitle from "../../Hooks/CustomTitle";
import img1 from "../../assets/aboutUs/founder.jpg"
import img2 from "../../assets/aboutUs/trainers-group.jpg"
import img3 from "../../assets/Banner/banner2.jpg"

const About = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${img3})`}} className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={img2}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-[#F72464] shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            
            <CustomTitle
            subHeader="Our team"
            header="About Us"
            ></CustomTitle>

            <p className="py-6">
            Meet <span className="text-[#F72464] font-bold">Allen Roger</span>, the visionary founder of <span className="text-[#F72464] font-bold">FITHUB</span>. Driven by a passion for holistic wellness, Mayra embarked on a mission to create a fitness platform that transcends conventional boundaries. With a background in fitness training and a deep understanding of diverse wellness practices, Mayra leads a dedicated team committed to delivering unparalleled services.
            </p>
            <p className="py-6">
            <span className="text-[#F72464] font-bold">FITHUB</span> is more than a website; it is a collective effort to empower individuals on their fitness journey. Together, Mayra and the FITHUB team strive to provide tailored, expert guidance, ensuring every user achieves their health and fitness goals with the best-in-class services and support.
            </p>
            
            <Link><button className="my-4 btn bg-[#F72464] text-white rounded-md  hover:border-2 hover:border-[#F72464] hover:text-[#F72464]  hover:bg-white border-0 ">Explore Classes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
