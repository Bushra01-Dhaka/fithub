import { FaArrowCircleDown } from "react-icons/fa";
import img from "../../assets/Banner/banner3.jpg";
import logo from "../../assets/logo/fithub.svg";
import { Link, useLoaderData } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
AOS.init();

const Gallery = () => {
//   const photo = useLoaderData();
const { photos: initialPhotos } = useLoaderData(); // Assuming useLoaderData returns an object with a photos property
  const [photos, setPhotos] = useState(initialPhotos || []); 

//   
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true); // Assuming there is more data initially

const fetchMoreData = async () => {
  try {
    // Fetch more data here based on the page variable
    const response = await fetch(`http://localhost:5000/gallery?page=${page}`);
    const data = await response.json();

    // Assuming data.images is an array of new images
    if (data.images.length > 0) {
      setHasMore(true);
      setPage((prevPage) => prevPage + 1);

      // Append the new images to the existing photos
      // Modify this based on your data structure
      setPhotos((prevPhotos) => [...prevPhotos, ...data.images]);
    } else {
      setHasMore(false); // No more data available
    }
  } catch (error) {
    console.error('Error fetching more data:', error);
  }
};

// 




  return (
    <div>
      <Helmet>
        <title>FitHib | Gallery</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white"
      >
        <div data-aos="zoom-in" className="bg-black bg-opacity-40 p-8 rounded">
          <div className="w-[120px] h-[120px] rounded-[50%] bg-[#F72464] mx-auto">
            <div className="mx-auto items-center">
              <img
                className="w-[100px] h-[100px] mx-auto mb-4 p-2"
                src={logo}
                alt=""
              />
            </div>
          </div>

          <h2 className="text-4xl text-center font-bold my-4">
            FitHub Gallery
          </h2>
          <hr />
          <p className="text-center">Explore Our gallery</p>
          <Link to="#photos">
            <FaArrowCircleDown className="text-[60px] text-center mx-auto py-4 text-[#F72464]"></FaArrowCircleDown>
          </Link>
        </div>
      </div>

      {/*  */}
      <InfiniteScroll
      dataLength={photos.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >

      {/*  */}

      <div
        id="photos"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8"
      >
        {photos.map((img, index) => (
          <div key={index}>
            <img
              className="h-[250px] w-[400px] object-cover rounded-md shadow-xl border-b-2 border-[#F72464]"
              src={img.image}
              alt=""
            />
          </div>
        ))}
      </div>

    </InfiniteScroll>  
    </div>
  );
};

export default Gallery;
