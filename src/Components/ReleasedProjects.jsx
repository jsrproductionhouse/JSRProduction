// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../released.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { useEffect, useState } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const ReleasedProjects = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/RProject"
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

  // const RP = [
  //   {
  //     title: "Birha (Audio)",
  //     img: "BIRHA-VERTICLE-POSTER.jpg",
  //     producer: "Tarun Rawat",
  //     musicproducer: "Mad-Dyy",
  //     singer: "Meedhya",
  //     link: "https://youtu.be/uS1wzoelQ4Q?si=A1w0UX79xvKNNXwC",
  //   },
  //   {
  //     title: "Romeo( Music Video)",
  //     img: "VERTICLE.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Suniel Kumar",
  //     link: "https://youtu.be/zOXMIvCKkcg?si=bx7WD6Qdv0UlRef-",
  //   },
  //   {
  //     title: "SIYA RAM (Music Video)",
  //     img: "siya-ram.jpg",
  //     director: "Hriday V. Shetty",
  //     producer: "Tarun Rawat",
  //     dop: "Suniel Rawat",
  //     link: "https://youtu.be/4lClFvi42Ww?si=tEpCECq8dBdsmxTB",
  //   },
  //   {
  //     title: "72 HOURS: Martyr Who Never Died (Feature Film)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698740757/pqun3jlv94xwhuerdnbg.jpg",
  //     producer: "JS Rawat,                         Tarun Rawat      ",
  //     director: "Avinash Dhyani",
  //     dop: "Harish Negi",
  //     link: "https://www.primevideo.com/detail/72-Hours-Martyr-Who-Never-Died/0M2CTFCCYKMAF96HB2M60AK72K",
  //   },
  //   {
  //     title: "BAD MUNDEY (Music Video)",
  //     img: "BAD-MUNDEY.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Suniel Kumar",
  //     link: "https://youtu.be/RrearhCtxgI?si=2fgsC3iwF3oElmVp",
  //   },
  //   {
  //     title: "SCENE GALAT (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698740804/avdrrsjd7ivmednnjfc3.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Suniel Kumar",
  //     link: "https://youtu.be/gXz1Kuu9hq4",
  //   },
  //   {
  //     title: "MERO DIL AEYGAI (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741236/bwfd4n6av0iwodkuicrz.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Prashant Kamboj",
  //     link: "https://youtu.be/XbeCM5eQmzM",
  //   },
  //   {
  //     title: "RUKHSAT (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741261/mdcvzhen3xznyjah29gs.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Harsh Kumar",
  //     dop: "Harish Negi",
  //     link: "https://youtu.be/b9b8nulTBeM",
  //   },
  //   {
  //     title: "KHAYALUN MA (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741288/uqlr5rph07ktnhyt6wvu.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Prashant Kamboj",
  //     link: "https://www.youtube.com/watch?v=w-GxPBP4piA&feature=youtu.be",
  //   },
  //   {
  //     title: "TU NA SAHI (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741313/vezgmjy3tt1mwtzdeivd.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Mayank Kalra",
  //     dop: "Harish Negi",
  //     link: "https://youtu.be/HTxoxOWRhRo",
  //   },
  //   {
  //     title: "SPEED (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741347/rykbz3b29qo80nx0g5e5.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Harish Negi",
  //     link: "https://youtu.be/HtTxJN4-G3M",
  //   },
  //   {
  //     title: "BAIRI PIYA (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741385/vys3fa9spwneyxc7zfnm.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Karan Arora",
  //     dop: "Harish Negi",
  //     link: "https://youtu.be/VdtLg-a8iyg",
  //   },
  //   {
  //     title: "KUYEDI (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741422/jjhutivl7goaiy18dq4g.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Tarun Rawat",
  //     dop: "Deepankar Ghildiyal",
  //     link: "https://youtu.be/EC1bYmTSkvk",
  //   },
  //   {
  //     title: "BABY BAS KAR (Music Video)",
  //     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698741458/ehr1mbkhsz6quuusgfjd.jpg",
  //     producer: "Tarun Rawat",
  //     director: "Karan Arora",
  //     dop: "Harish Negi",
  //     link: "https://youtu.be/SN1KfPk4-yQ",
  //   },
  // ];

  return (
    <>
      <div>
        <div className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20 ">
          RELEASED PROJECTS
        </div>
        {/* <div className="md:flex hidden justify-center gap-5 pt-20 flex-wrap"></div> */}
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
              <SwiperSlide key={index} className="">
                <Card data={item} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
      {/* <>
        {array.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </> */}
    </>
  );
};

export default ReleasedProjects;
