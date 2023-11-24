import { Link } from "react-router-dom";
import img1 from "../../assets/Banner/banner1.jpg"
import img2 from "../../assets/Banner/banner2.jpg"
import img3 from "../../assets/Banner/banner3.jpg"
import img4 from "../../assets/Banner/banner4.jpg"
const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      {/* description */}
      <div className="md:flex-1 p-4 mt-8">
        <h1 className="text-6xl font-bold max-w-md"><span className="text-[#F72464]">FitHub</span> Fitness:</h1>
        <p className="text-3xl my-4">Your Journey to a <span className="text-[#F72464]">Stronger</span>,<br /> <span className="text-[#F72464]">Healthier</span> You</p>
        <Link><button className="my-4 btn bg-[#F72464] text-white rounded-md  hover:border-2 hover:border-[#F72464] hover:text-[#F72464]  hover:bg-white text-lg">Explore Classes</button></Link>
      </div>

      {/* slider */}
      <div className="md:flex-1 p-4 mt-10">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={img1}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={img2}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={img3}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={img4}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-[#F72464] border-0 text-white">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
