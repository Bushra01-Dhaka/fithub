import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";


const Blog = ({blog}) => {
    const {title, description, image, role} = blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[250px] w-full" src={image} alt="Shoes" /></figure>
                {
                  role &&  <div className="flex absolute border-2 border-rose-600 justify-center items-center m-2 bg-black text-white h-[80px] w-[80px] rounded-[50%]">
                  <FaStar className="text-rose-600 text-xl"></FaStar>
                  <small>{role}</small>
                  </div>
                }
               
                <div className="card-body">
                  <h2 className="card-title text-black">{title}</h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end text-xl my-4 items-center">
                   <FaThumbsUp className="text-rose-400 hover:text-rose-600"></FaThumbsUp>
                   <FaThumbsDown className="text-black hover:text-rose-600"></FaThumbsDown>
                  </div>
                </div>
              </div>
    );
};

export default Blog;