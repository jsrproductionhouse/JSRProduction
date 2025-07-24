import { Swiper, SwiperSlide } from "swiper/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { useEffect, useState } from "react";
// import "../released.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dsea9eyps" } });
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
        className="w-screen h-[40vh]" // Ensure Swiper fills screen
      >
        <SwiperSlide className="w-full h-full">
          <div className="relative w-full h-full">
            <AdvancedVideo
              cldVid={cld.video("ji6qdcwev4ptfvxdzhkl").quality("auto")}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="absolute top-0 left-0 w-full h-full object-fit"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
