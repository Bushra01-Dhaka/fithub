import About from "../../../Components/About/About";
import Banner from "../../../Components/Banner/Banner";
import Features from "../../../Components/Features/Features";
import Testimonial from "../../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Features></Features>
           <About></About>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;