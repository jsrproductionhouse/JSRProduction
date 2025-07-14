import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Gallery2.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Gallery2 = () => {
  const images = [
    "./gallery1.jpg",
    "./gallery2.jpg",
    "./gallery3.jpg",
    "./gallery4.jpg",
    "./gallery5.jpg",
    "./gallery6.jpg",
    "./gallery7.jpg",
    "./gallery8.jpg",
    "./gallery9.jpg",
    "./gallery10.jpg",
    "./gallery11.jpg",
    "./gallery12.jpg",
    "./gallery13.jpg",
    "./gallery14.jpg",
  ];

  return (
    <div>
      <h1 className="text-center pt-20 -mt-5 lg:pt-28 text-4xl lg:text-6xl tracking-[2px] lg:tracking-[6px] pb-2 lg:pb-4">
        GALLERY
      </h1>

      <PhotoProvider>
        <Swiper
          className="tranding-slider"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {images.map((url, index) => (
            <SwiperSlide key={index} className="tranding-slide">
              <PhotoView src={url}>
                <img src={url} alt={`Slide ${index}`} />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </div>
  );
};

export default Gallery2;
