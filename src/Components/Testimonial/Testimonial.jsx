
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CustomTitle from "../../Hooks/CustomTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="py-20 px-8 bg-base-200">

        <CustomTitle
        subHeader="What our client says"
        header="Testimonial"
        ></CustomTitle>
        <div className="py-8">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

    <div className="card bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <FaHeart className="text-3xl text-rose-500 absolute right-8 top-4 pb-2 "></FaHeart>
    <p>FITHUB is a game-changer! The personalized workouts and expert advice helped me achieve my fitness goals faster than ever. The ${`website's `} user-friendly interface makes staying committed a breeze!</p>
    <hr />
    <div className=" flex  gap-6 items-center">
        <div>
        <p className=" font-bold text-rose-500">Rayhan Rahman</p>
       <p>Tallin, Estonia</p>
        </div>
     <img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/7WysTJG/song3.jpg" alt="Shoes" />
    </div>
  </div>
</div>

    
        </SwiperSlide>


        <SwiperSlide>
    <div className="card bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <FaHeart className="text-3xl text-rose-500 absolute right-8 top-4 pb-2 "></FaHeart>
    <p> Exceptional results! FITHUB s innovative training methods and personalized approach set it apart. The team s dedication to users well-being is evident. It s not just a gym website; it s a comprehensive lifestyle guide for lasting health.</p>
    <hr />
    <div className=" flex  gap-6 items-center">
        <div>
        <p className=" font-bold text-rose-500">Fawad Khan</p>
       <p>Tartu, Estonia</p>
        </div>
     <img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/vmzMSLn/music.jpg" alt="Shoes" />
    </div>
  </div>
</div>
        </SwiperSlide>


        <SwiperSlide>
       
    <div className="card bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <FaHeart className="text-3xl text-rose-500 absolute right-8 top-4 pb-2 "></FaHeart>
    <p>Exceptional results! FITHUB s innovative training methods and personalized approach set it apart. The team s dedication to users well-being is evident. It s not just a gym website; it s a comprehensive lifestyle guide for lasting health.</p>
    <hr />
    <div className=" flex  gap-6 items-center">
        <div>
        <p className=" font-bold text-rose-500">David Roger</p>
       <p>Berlin, Germany</p>
        </div>
     <img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/2Kcjv57/photography2.jpg" alt="Shoes" />
    </div>
  </div>
</div>

        </SwiperSlide>


        <SwiperSlide>   
        <div className="card bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <FaHeart className="text-3xl text-rose-500 absolute right-8 top-4 pb-2 "></FaHeart>
    <p>FITHUB is a game-changer! The personalized workouts and expert advice helped me achieve my fitness goals faster than ever. The ${`website's `} user-friendly interface makes staying committed a breeze!</p>
    <hr />
    <div className=" flex  gap-6 items-center">
        <div>
        <p className=" font-bold text-rose-500">Murtasim Khan</p>
       <p>Lisbon, Portugal</p>
        </div>
     <img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/7WysTJG/song3.jpg" alt="Shoes" />
    </div>
  </div>
</div>
    </SwiperSlide>


        <SwiperSlide>
        <div className="card bg-base-100 shadow-xl">
  <figure></figure>
  <div className="card-body">
    <FaHeart className="text-3xl text-rose-500 absolute right-8 top-4 pb-2 "></FaHeart>
    <p>Exceptional results! FITHUB s innovative training methods and personalized approach set it apart. The team s dedication to users well-being is evident. It s not just a gym website; it s a comprehensive lifestyle guide for lasting health.</p>
    <hr />
    <div className=" flex  gap-6 items-center">
        <div>
        <p className=" font-bold text-rose-500">Robin Hood</p>
       <p>Berlin, Germany</p>
        </div>
     <img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/2Kcjv57/photography2.jpg" alt="Shoes" />
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
        </div>
    
    </div>
  );
};

export default Testimonial;
