import { Link } from "react-router-dom";
import img from "../../assets/error/error.svg"

const Error = () => {
    return (
        <div className="h-screen bg-[#F72464]">

            <div className="mx-auto text-center">
                <img 
                className="h-[80vh] mx-auto"
                src={img} alt="" />
                <Link to='/'><button className="btn my-4 text-[#F72464] border-0 hover:bg-white rounded-md bg-white">Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default Error;