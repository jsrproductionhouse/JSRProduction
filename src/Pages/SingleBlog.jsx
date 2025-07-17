import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../released.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Blog1 from "../Components/Blogs/Blog1";
import Blog2 from "../Components/Blogs/Blog2";
import Blog4 from "../Components/Blogs/Blog4";
import Blog3 from "../Components/Blogs/Blog3";
import { useEffect } from "react";

const titles = [
  "Top 5 Best Production Line Rental Services in Uttarakhand for Filmmakers & Creators",
  "Finding the Best Film School for Practical Experience in Uttarakhand: A Student’s Guide",
  "Top 5 Best Film Production Houses in Uttarakhand You Should Know About",
  "Top 6 Best Photo Studios for Portfolio Shoot in Dehradun",
];

const SingleBlog = () => {
  const { id } = useParams(); // get ID from route param

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or just top: 0
  }, []);

  // Function to render blog based on id
  const renderBlogContent = () => {
    switch (id) {
      case titles[0].replace(/\s+/g, "_"):
        return <Blog1 />;
      case titles[1].replace(/\s+/g, "_"):
        return <Blog2 />;
      case titles[2].replace(/\s+/g, "_"):
        return <Blog3 />;
      case titles[3].replace(/\s+/g, "_"):
        return <Blog4 />;
      default:
        return (
          <div className="text-center py-10 text-red-500 font-bold text-xl">
            Blog not found!
          </div>
        );
    }
  };

  return (
    <div className="font2">
      {/* Navbar */}
      <div className="absolute z-50 top-0 left-0 w-full">
        <Navbar
          navBgColor={"bg-white"}
          absolute={" absolute "}
          bar={"text-black"}
        />
      </div>

      {/* Banner Section */}
      {/* <div className="relative w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper hidden lg:flex"
        >
          <SwiperSlide>
            <img
              src="/Banner.jpg"
              alt="Blog Banner"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <img
          src="/Banner.jpg"
          alt="Mobile Banner"
          className="lg:hidden w-full h-[400px] object-cover"
        />
      </div> */}

      {/* Blog Content */}
      <div className=" mx-auto px-6 md:px-20 py-20 lg:py-32">
        <h1 className="text-3xl lg:text-5xl font-bold z-10 md:px-20 px-6">
          {titles.find((title) => title.replace(/\s+/g, "_") === id) || "Blog"}
          {id === titles[3].replace(/\s+/g, "_") && (
            <span> (With Expert Tips)</span>
          )}
        </h1>

        {renderBlogContent()}
      </div>

      <Footer />
    </div>
  );
};

export default SingleBlog;
