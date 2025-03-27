import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../future.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

const UpcomingProjects = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Upcoming"
      );
      const data = await response.json();
      // console.log(data, "=>>>");
      setLoading(false);
      setArray(data);
    };

    const timeOutId = setTimeout(async () => {
      fetchProducts();
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, []);

  // const UP = [
 
  //   {
  //     title: "DEEPER (Music Video)",
  //     img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740466/fwmlhebuiftcq9mtqzig.jpg",
  //     producer:"Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop:"Suniel Kumar",
  //     link:" ",
  //   },
  //   // {
  //   //   title: "ROMEO (Music Video)",
  //   //   img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740500/tkhuqqhzmrztzvfap6o2.jpg",
  //   //   producer:"Tarun Rawat",
  //   //   director: "Tarun Rawat",
  //   //   dop:"Suniel Kumar",
  //   //   link:" ",
  //   // },
  //   {
  //     title: "MUSSORIIE  BOYZ [FEATURE FLIM]",
  //     img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740532/m6haogzmypla4xi4b6k1.jpg",
  //     producer:"Tarun Rawat",
  //     director: "Hriday V. Shetty",
  //     dop:"Faroque Khan",
  //     link:" ",
  //   },
  //   {
  //     title: "CHHAL [FEATURE FLIM]",
  //     img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740563/cbm2y7zeflmibg2grttq.jpg",
  //     producer:"Tarun Rawat",
  //     director: "Yogesh Vats",
  //     dop:"Yogesh Vats",
  //     link:" ",
  //   },
  //   {
  //     title: "AGENT ONE [WEB SERIES]",
  //     img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740664/alttbsah74josrtddy3e.jpg",
  //     producer:"Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop:"Suniel Kumar",
  //     link:" ",
  //   },
  //   {
  //     title: "BAS AB REHNE DO",
  //     img:"https://res.cloudinary.com/dsea9eyps/image/upload/v1698740703/p33dx0dfgxnqga5uqgto.jpg",
  //     producer:"Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop:"Suniel Kumar",
  //     link:" ",
  //   },
  // ]

  return (
    <>
      <div className="">
        <div className="text-center pt-10 lg:pt-28 z-30 tracking-[2px]  lg:tracking-[6px]  ">
          <h1 className=" text-2xl md:text-lg lg:text-xl pb-2 lg:pb-5">
            JSR PRODUCTION HOUSE
          </h1>
          <h2 className="text-4xl md:text-4xl lg:text-7xl pb-10 lg:pb-20">
            UPCOMING PROJECTS
          </h2>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper p-2"
      >
        {
        // loading
        //   ? [1, 2, 3, 4].map((index) => (
        //       <SwiperSlide key={index}>
        //         <SkeletonCard />
        //       </SwiperSlide>
        //     ))
        //   : 
          array.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card data={item} />
                </SwiperSlide>
              );
            })}
      </Swiper>
      {/* <>
        {array.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </> */}
    </>
  );
};

export default UpcomingProjects;
