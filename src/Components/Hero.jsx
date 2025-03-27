import { Swiper, SwiperSlide } from "swiper/react";
 import { Cloudinary } from '@cloudinary/url-gen';
 import { AdvancedVideo } from '@cloudinary/react';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { useEffect, useState } from "react";
// import "../released.css";


import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
   const cld = new Cloudinary({ cloud: { cloudName: 'dsea9eyps' } });
  // const [array, setArray] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(
  //       "https://jsr-backend-p4sz.onrender.com/Video"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setArray([{link:"https://res.cloudinary.com/djb3n17c0/video/upload/v1693649840/NON-CINEMASCOPE_logo_cgnxwi.mp4"}]);
  //   };
  //   fetchProducts();
  // },[]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 45000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      {/* {
      array.map((item, index)=>{
        return( */}
      <SwiperSlide>
         <AdvancedVideo
  controls={false}
  className=" -mt-48  -mb-40 sm:mb-0 sm:mt-0 sm:object-cover w-screen h-[70vh]"
  autoPlay
  muted
  loop
  cldVid={cld.video('ji6qdcwev4ptfvxdzhkl').quality('auto')}
/> 

{/* <video autoPlay controls className="w-screen h-[70vh]" >
  <source src="JSR.mp4" type="video/mp4"></source>
</video> */}
      </SwiperSlide>
        {/* )
      }
      )} */}
     
    </Swiper>
    </>
  );
};

export default Hero;
