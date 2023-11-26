import About from "../../../Components/About/About";
import Banner from "../../../Components/Banner/Banner";
import FeaturedClasses from "../../../Components/FeaturedClass/FeaturedClasses";
import Features from "../../../Components/Features/Features";
import Newsletters from "../../../Components/Newsletter/Newsletters";
import Testimonial from "../../../Components/Testimonial/Testimonial";
import Trainers from "../../../Components/Trainer/Trainers";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Features></Features>
           <About></About>
           <FeaturedClasses></FeaturedClasses>
           <Testimonial></Testimonial>
           <Newsletters></Newsletters>
           <Trainers></Trainers>
        </div>
    );
};

export default Home;