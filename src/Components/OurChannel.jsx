import axios from "axios";
import React, { useEffect, useState } from "react";
import {quality} from "@cloudinary/url-gen/actions/delivery";
import {auto} from "@cloudinary/url-gen/qualifiers/quality";
const OurChannel = () => {
  var [para, setPara] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-x7rr.onrender.com/OurChannel"
      );
      // console.log(data.para);
      setPara(data.para);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  // console.log(para)
  return (
    <div className="py-20 flex flex-col text-center  ">
      <h1 className="text-5xl md:text-5xl lg:text-7xl  tracking-[2px]  lg:tracking-[6px]  py-10">
        OUR CHANNELS
      </h1>
      <p className="font2 py-2  lg:py-1 lg:mt-0 w-[320px] md:w-[550px] text-gray-900 lg:w-[800px] lg:text-[14px] tracking-wide leading-7 " >
      {para}
      {/* JSR Production House offers a variety of production services and have YouTube channels, JSR Production House, JSR Record Label and JSR Records Regional. Our channel is packed with diverse recreational content that highlights local and national talent in movies, music videos, and TV shows. */}
      </p>
      <div className=" pt-10  flex  justify-around">
        <div className="cursor-pointer flex gap-4 lg:gap-36 items-center ">
          <div className="hover:scale-125 duration-200">
            <a
              href=" https://youtube.com/@jsrproductionhouse?si=62bEq73408PN-uPK"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737148/samples/a9netvmy3epwecuknnpq.png"
                // src={new CloudinaryImage("https://res.cloudinary.com/dsea9eyps/image/upload/v1698737148/samples/a9netvmy3epwecuknnpq.png").delivery(quality(auto()))}

                alt="JSR Production House"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
          <div className="hover:scale-125 duration-200">
            <a href="https://www.youtube.com/@JSRRECORDLABEL" target="_blank">
              <img
                src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737408/samples/jydv1y0pssxb035vm8dt.png"
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
          <div className="hover:scale-125 duration-200">
            <a
              href="https://www.youtube.com/@jsrrecordsregional"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dsea9eyps/image/upload/v1698737451/samples/z965k6iozmv6avww0q0s.png"
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChannel;
