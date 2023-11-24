
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CustomTitle from "../../Hooks/CustomTitle";
import { Avatar, Card} from "keep-react";
import { Heart } from "phosphor-react";

import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <div className="py-20 px-8">

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
        <Card
      imgSrc="https://i.ibb.co/9GYw8K6/dark-pink.jpg"
      imgSize="md"
      className="max-w-xs mb-4">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="3xl" shape="circle"
           className="w-[70px] h-[70px] border-2 border-[#F72464]"
          img="https://i.ibb.co/7WysTJG/song3.jpg" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Rayhan Rahman</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Rome, Italy</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 text-sm !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            FITHUB is a game-changer! The personalized workouts and expert advice helped me achieve my fitness goals faster than ever. The ${`website's `} user-friendly interface makes staying committed a breeze!
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
        </SwiperSlide>


        <SwiperSlide>
        <Card
      imgSrc="https://i.ibb.co/9GYw8K6/dark-pink.jpg"
      imgSize="md"
      className="max-w-xs mb-4">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="3xl" shape="circle"
           className="w-[70px] h-[70px] border-2 border-[#F72464]"
          img="https://i.ibb.co/vmzMSLn/music.jpg" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Fawad Khan</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Berlin, Germany</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 text-sm !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            Exceptional results! FITHUB s innovative training methods and personalized approach set it apart. The team s dedication to users well-being is evident. It s not just a gym website; it s a comprehensive lifestyle guide for lasting health.
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
        </SwiperSlide>


        <SwiperSlide>
        <Card
      imgSrc="https://i.ibb.co/9GYw8K6/dark-pink.jpg"
      imgSize="md"
      className="max-w-xs mb-4">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="3xl" shape="circle"
           className="w-[70px] h-[70px] border-2 border-[#F72464]"
          img="https://i.ibb.co/2Kcjv57/photography2.jpg" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Ali Ahmed</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Lisbon, Portugal</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 text-sm !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            {`FITHUB is a fitness haven! The nutrition guidance, workout plans, and supportive community make it stand out. Mayra and the team truly care about our success, creating a positive and transformative experience.`}
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
        </SwiperSlide>


        <SwiperSlide>   
            <Card
      imgSrc="https://i.ibb.co/9GYw8K6/dark-pink.jpg"
      imgSize="md"
      className="max-w-xs mb-4">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="3xl" shape="circle"
           className="w-[70px] h-[70px] border-2 border-[#F72464]"
          img="https://i.ibb.co/DLJqfCW/floral.jpg" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Julia Robert</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Tartu, Estonia</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 text-sm !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            {
                `Incredible variety! FITHUB's diverse programs cater to all fitness levels. The engaging community and detailed tracking keep me motivated. A one-stop solution for anyone serious about health and wellness`
            }
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
    </SwiperSlide>


        <SwiperSlide>
        <Card
      imgSrc="https://i.ibb.co/9GYw8K6/dark-pink.jpg"
      imgSize="md"
      className="max-w-xs mb-4">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="3xl" shape="circle"
           className="w-[70px] h-[70px] border-2 border-[#F72464]"
          img="https://i.ibb.co/p1WKyWN/coffee-6.jpg" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Murtasim Mahmud</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Berlin, Germany</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 text-sm !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            FITHUB is a game-changer! The personalized workouts and expert advice helped me achieve my fitness goals faster than ever. The ${`website's `} user-friendly interface makes staying committed a breeze!
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
        </SwiperSlide>
      </Swiper>
        </div>
    
    </div>
  );
};

export default Testimonial;
