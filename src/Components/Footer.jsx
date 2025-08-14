import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black flex flex-row gap-32 items-center px-5 lg:px-28 py-6 flex-wrap">
      {/* Text */}
      <p className="text-white text-xl sm:text-2xl lg:text-4xl tracking-[2px] min-w-[200px]">
        SEEKING A CAREER IN VIDEO PRODUCTION? SEND US YOUR CV!
      </p>

      {/* Button */}
      <Link to="/contact">
        <button className="bg-white px-6 sm:px-10 h-14 tracking-[3px] text-black text-base sm:text-lg">
          Learn More!
        </button>
      </Link>
    </div>
  );
};

export default Footer;
