import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Gallery2.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Gallery2 = () => {
  const [gallery, setGallery] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://jsr-backend-x7rr.onrender.com/Gallery"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        const data = await response.json();
        
        setGallery(Object.values(data).slice(1));
        setIsLoading(false); 
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchProducts();
  }, []);

  
  return (
    <div>
      <h1 className="text-center pt-20 -mt-5 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-2 lg:pb-4">
        GALLERY
      </h1>

      { 
      isLoading ? (
          <p>Loading...</p>
        ) :
         (
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
              {gallery &&
                gallery.map((url, index) => (
                  <SwiperSlide key={index} className="tranding-slide">
                    <PhotoView src={url}>
                      <img src={url} alt={`Slide ${index}`} />
                    </PhotoView>
                  </SwiperSlide>
                ))}
                
            </Swiper>
          </PhotoProvider>
        )
      }
    </div>
  );
};

export default Gallery2;
