import { useEffect, useRef, useState } from "react";
import FooterNav from "../Components/FooterNav";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../released.css";
import Navbar from "../Components/Navbar";
import courses from "../assets/courses.json";
import CourseCard from "../Components/CourseCard";
import EnrollNowForm from "../Components/EnrollNowForm";

//animation
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1200,
});

const Courses = () => {
  //filters
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCourse, setSelectedCourse] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    const filtered =
      activeFilter === "All"
        ? courses
        : courses.filter((course) => course.category === activeFilter);
    setFilteredCourses(filtered);
  }, [activeFilter]);

  const filters = ["All", "Crash Course", "Filmmaking", "Advanced VFX"];
  return (
    <div>
      <div
        className="fixed top-[320px] lg:top-[260px] right-0 h-72 w-10 items-center flex flex-col gap-10 justify-center bg-gray-600 opacity-75 z-50 rounded-tl-md rounded-bl-md     "
        style={{ zIndex: "9999" }}
      >
        <a
          href="https://www.facebook.com/JSRProductionhouse"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
            className="w-7 h-7 hover:scale-125 duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a
          href="https://www.youtube.com/@jsrproductionhouse9127"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a href="https://twitter.com/house_jsr?lang=en">
          {/* <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </a>
      </div>
      <div className="">
        <div className="bg-transparent absolute z-50 inset-1">
          <Navbar
            navBgColor={"bg-white"}
            absolute={" absolute "}
            bar={"text-white"}
          />
          <div className="flex justify-center items-center">
            <h1 className="text-4xl lg:text-7xl text-white tracking-wider absolute top-44 lg:top-44 xl:top-52 2xl:top-72">
              COURSES
            </h1>
          </div>
        </div>
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
            <div className="flex  justify-center w-full">
              <img
                src="Banner.jpg"
                alt=""
                className="h-[400px] lg:h-[500px] w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <img
          src="Banner.jpg"
          alt=""
          className="lg:hidden h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>

      <div className="bg-black text-white px-32 py-8 flex flex-col gap-20">
        {/* intro para */}
        <div data-aos="fade-up" className="flex flex-col gap-5 items-center">
          <div className="font-semibold text-4xl">
            JSR Production House: Course Offerings & Programs
          </div>
          <div className="font2 text-lg opacity-40">
            At <strong>JSR Production House</strong>, we are committed to
            nurturing the next generation of creative professionals by combining{" "}
            <strong>practical, hands-on training</strong> with{" "}
            <strong>industry-standard tools and expert mentorship</strong>. Our
            courses cover a range of in-demand skills—from VFX and Editing to
            DI, Colour Grading, and Filmmaking—designed to prepare you for a
            successful career in the ever-evolving media and entertainment
            world.
          </div>
        </div>

        {/* why coose us */}
        <div data-aos="fade-up" className="flex flex-col gap-5 items-center">
          <div className="font-semibold text-4xl">
            Why Choose JSR Production House?
          </div>
          <ul className="font2 text-lg w-full list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">Small Batch Sizes:</span>{" "}
              <span className="opacity-40">
                Personalized attention with industry-standard equipment
              </span>
            </li>
            <li>
              <span className="font-semibold">Industry-Expert Mentorship:</span>{" "}
              <span className="opacity-40">
                Learn from Bollywood editors, IMDB-certified professionals, and
                experienced VFX artists
              </span>
            </li>
            <li>
              <span className="font-semibold">
                State-of-the-Art Infrastructure:
              </span>{" "}
              <span className="opacity-40">
                High-end Threadripper machines with 30 and 40 series GPUs
              </span>
            </li>
            <li>
              <span className="font-semibold">Licensed Software:</span>{" "}
              <span className="opacity-40">
                Hands-on experience with Adobe, After Effects, Blender, Unreal
                Engine, DaVinci Resolve, Nuke, and more
              </span>
            </li>
            <li>
              <span className="font-semibold">Real-World Projects:</span>{" "}
              <span className="opacity-40">
                Opportunities to intern on upcoming VFX movies, short films, and
                other productions
              </span>
            </li>
            <li>
              <span className="font-semibold">Certifications:</span>{" "}
              <span className="opacity-40">
                Industry-recognized certificates upon course completion
              </span>
            </li>
          </ul>
        </div>

        {/* Filters Section */}
        <div data-aos="fade-up" className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300
          ${
            activeFilter === filter
              ? "bg-white text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* courses cards */}
        <div data-aos="fade-up" className="grid gap-10 md:grid-cols-1">
          {filteredCourses.map((course, index) => (
            <CourseCard
              enrollCall={() => {
                setSelectedCourse(course.title);
                window.scrollTo({
                  top: formRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
              course={course}
              key={index}
            />
          ))}
        </div>

        {/* Additional Perks for All Courses */}
        <div data-aos="fade-up" className="flex flex-col gap-5 items-center">
          <div className="font-semibold text-4xl text-center">
            Additional Perks for All Courses
          </div>
          <ul className="font2 text-lg w-full list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">Personalized mentorship:</span>{" "}
              <span className="opacity-40">From industry professionals</span>
            </li>
            <li>
              <span className="font-semibold">
                Real-world project experience:
              </span>{" "}
              <span className="opacity-40">
                With opportunities for internships
              </span>
            </li>
            <li>
              <span className="font-semibold">Networking opportunities:</span>{" "}
              <span className="opacity-40">
                Guest lectures and workshops with industry experts
              </span>
            </li>
            <li>
              <span className="font-semibold">Career guidance:</span>{" "}
              <span className="opacity-40">And portfolio development</span>
            </li>
          </ul>
        </div>

        {/* About JSR Call-to-Action Section */}
        <div
          ref={formRef}
          className="flex flex-col gap-5 items-center text-center"
        >
          <div className="font-semibold text-4xl">Enroll Now</div>
          <div className="font2 text-lg opacity-40 max-w-4xl">
            <strong>JSR Production House</strong> is more than just a training
            institute — we’re your gateway to a successful film, VFX, and media
            production career. Don’t just learn; <strong>create</strong>,{" "}
            <strong>collaborate</strong>, and <strong>thrive</strong> in the
            industry.
          </div>
          <div className="text-white font2 text-lg flex items-center justify-between gap-5 flex-wrap">
            <p>
              📞 <strong>Phone:</strong> +91-7830399333
            </p>
            <p>
              🌐 <strong>Website:</strong>{" "}
              <a
                href="https://www.jsrproductionhouse.com/"
                className="underline hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                jsrproductionhouse.com
              </a>
            </p>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:info@jsrproductionhouse.com"
                className="underline hover:text-gray-300"
              >
                info@jsrproductionhouse.com
              </a>
            </p>
          </div>

          <div>
            <EnrollNowForm selectedCourse={selectedCourse} />
          </div>
        </div>
      </div>

      <FooterNav />
    </div>
  );
};

export default Courses;
