import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [para, setPara] = useState([]);
  async function getabout() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-x7rr.onrender.com/AParagraph/"
      );
      // console.log(data[0].line);
      setPara(data[0].line);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getabout();
  }, []);

  // console.log(para);

  return (
    <div className="flex flex-col  justify-center pt-10 lg:pt-2 -mt-12 sm:mt-2 md:-mt-4 lg:-mt-36 xl:-mt-24 relative z-40  ">
      <div className="text-center flex flex-col items-center text-gray-600 leading-7">
        <h1 className="text-4xl tracking-wide lg:tracking-widest lg:text-7xl pb-4 pt-5 lg:pt-16 xl:pt-20 2xl:pt-24 text-black">
          ABOUT JSR Production House
        </h1>

        {/* for large */}
        <div className="hidden xl:flex xl:flex-col items-center ">
          <p className=" font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[1200px] lg:text-[14px] tracking-wide text-gray-900    ">
            {para[0]}{" "}
          </p>
          <p className=" xl:w-[1100px] font2 text-gray-900">{para[1]} </p>
          <p className="xl:w-[1000px] font2 text-gray-900">{para[2]} </p>
          <p className=" xl:w-[900px] text-gray-900  font2">{para[3]} </p>
          <p className="xl:w-[800px] text-gray-900  font2">{para[4]} </p>
          <p className=" xl:w-[700px] text-gray-900 font2">{para[5]} </p>
          <p className="  xl:w-[600px] text-gray-900 font2">{para[6]} </p>
        </div>

        {/* for mobile */}
        <div className="xl:hidden font2  text-justify px-5 pb-5 text-gray-900">
        {para.map((paragraph, index) => (
            <p key={index} className="mb-2">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
