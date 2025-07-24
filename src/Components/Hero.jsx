import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobile(isMobile && isPortrait);
    };

    checkOrientation(); // initial check
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  const cld = new Cloudinary({ cloud: { cloudName: "dsea9eyps" } });

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 45000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-screen h-[calc(100vh-80px)]"
    >
      <SwiperSlide className="w-full h-full">
        <div className="relative w-full h-full">
          {isMobile ? (
            <video
              src="/BannerVideo/JSR_phone.mp4" // path from public folder
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-fill"
            />
          ) : (
            <AdvancedVideo
              cldVid={cld.video("ji6qdcwev4ptfvxdzhkl").quality("auto")}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
