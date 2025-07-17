import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../released.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "Top 5 Best Production Line Rental Services in Uttarakhand for Filmmakers & Creators",
    description:
      "Due to the film-friendly regulations of the Uttarakhand Film Development Council, Uttarakhand is becoming an increasingly popular filming destination, thanks to its stunning Himalayan backdrop and rich cultural heritage. For filmmakers and creators to fulfill their projects, it is essential to have access to excellent production line rental services. This includes technical support and essential items such as cameras, lighting, grips, and studio space.",
    image: "/gallery1.jpg",
    link: "#",
  },
  {
    id: 2,
    title:
      "Finding the Best Film School for Practical Experience in Uttarakhand: A Student’s Guide",
    description:
      "Nestled in the Himalayas, Uttarakhand is known for its picturesque scenery and is becoming a more and more popular place to shoot movies. For ambitious filmmakers, this natural setting and a growing film industry backed by the Uttarakhand Film Development Council make for the perfect combination. A key component of film education is hands-on experience, which helps students develop their technical proficiency, comprehend industry processes, and create professional portfolios.",
    image: "/js.png",
    link: "#",
  },
  {
    id: 3,
    title:
      "Top 5 Best Film Production Houses in Uttarakhand You Should Know About",
    description:
      "Uttarakhand, a picture-perfect Himalayan state, is emerging as a prosperous film hub due to its thriving creative economy and natural beauty. The state offers a fascinating backdrop for filmmakers, with its majestic snow-capped hills and lush green valleys, inspiring a new breed of film production houses to tell compelling stories.",
    image: "/js3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Top 6 Best Photo Studios for Portfolio Shoot in Dehradun",
    description:
      "The charming capital of Uttarakhand, Dehradun, isn’t just known for its scenic charm, it's quickly becoming a hub for creative talent. Whether you're an aspiring model, actor, influencer, or a professional looking to elevate your personal brand, a powerful portfolio is your first step to standing out. But capturing your true essence of your personality requires more than just a camera, it takes the right studio house with vision, skill, and the advance equipment’s. In this blog, we bring you the Top 6 Photo Studios in Dehradun that specialize in portfolio and ad shoots, each known for their unique approach and creative excellence. Leading the list is Studografia by JSR Production House, renowned for blending cinematic filmmaking techniques with cutting-edge photography to deliver visually stunning, narrative-rich portfolio shoots that set you apart.If you're ready to invest in your brand image, these studios are where your transformation begins.",
    image: "/js2.png",
    link: "#",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <div className="absolute z-20 top-0 left-0 w-full">
        <Navbar
          navBgColor={"bg-white"}
          absolute={" absolute "}
          bar={"text-white"}
        />
      </div>

      {/* Full Width Banner */}
      {/* <div className="relative w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper hidden lg:flex"
        >
          <SwiperSlide>
            <img
              src="Banner.jpg"
              alt="Blog Banner"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </SwiperSlide>
        </Swiper>

       
        <img
          src="Banner.jpg"
          alt="Mobile Banner"
          className="lg:hidden w-full h-[400px] object-cover"
        />

        <h1 className="absolute top-1/2 left-1/2 text-white text-4xl lg:text-7xl font-bold transform -translate-x-1/2 -translate-y-1/2 tracking-widest z-10">
          BLOGS
        </h1>
      </div> */}

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 z-50 pt-20 lg:pt-32">
        <div className="text-6xl font-bold my-5">Blogs</div>
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col md:flex-row items-center mb-24 gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-1/2 shadow-lg object-cover border-2 border-gray-400"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">
                {blog.title} {blog.id == 4 && " (With Expert Tips)"}
              </h2>
              <p className="text-gray-400 font-thin mb-4 text-lg font2">
                {blog.description}
              </p>
              <div
                onClick={() =>
                  navigate(`/blog/${blog.title.replace(/\s+/g, "_")}`)
                }
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Read Now
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
