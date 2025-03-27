import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
Aos.init({
  duration: 1200,
});

const Rental = () => {
  const [rentals, setRentals] = useState([]);
  // const rentals = [
  //   {
  //     heading: "Professional cinema cameras, equipments and lenses",
  //     content:
  //       "At JSR, we take immense pride in providing top-tier equipment to fuelyour creative journey. Unleash your creativity with cutting-edge technology. Our lineup boasts the latest in camera technology, ensuring that you have the tools you need to capture exactly what you desire. At JSR, we offer professional cameras from renowned brands like Arri, Red, Sony FX and Venice series, Canon, and Lumix. These cameras are tailored to meet your demands for excellence. In addition to cameras, we provide a variety of high-quality lenses, including Ultra Prime, Master Prime, Supreme Prime, Signature Prime, Cooke S4i and S7i, Pancro Classic, Xeen Prime, CP2, CP3 high-speed lenses, Sigma lenses, and many others.",
  //   },
  //   {
  //     heading: "Professional lighting system and gears",
  //     content:
  //       "We understand that lighting is a fundamental element in the art of filmmaking and can make or break the visual quality of a film. That's why we offer a comprehensive range of lighting equipment, along with a team of experienced lighting technicians who are dedicated to crafting the perfect ambiance for your project. Our production house provides filmmakers with top-notch professional lighting solutions, including systems from Arri, Film Gear, Godox, and Aputure. Our offerings range from PAR lighting and SkyPanels to small RGB kits and much more.",
  //   },
  //   {
  //     heading: "Renting The Studio",
  //     content:
  //       "Are you in search of the perfect studio space for your creative endeavors? Look no further! JSR Production House is your one-stop solution. We offer professional color grading setups, VFX, Unreal Engine-based virtual production setups with anti-latency sensors and virtual walls, as well as music production setups. Our equipment range includes Pro Tools, Universal Audio, DaVinci Resolve, BaseLight, and other professional software and equipment.",
  //   },
  //   {
  //     heading: "Transport & logistics",
  //     content:
  //       "At JSR Production House, we understand that seamless logistics are vital for successful production. That's why we specialize in providing transportation solutions for every aspect of your creative project. Whether you need to move equipment or your team, we've got you covered. Our fleet includes a range of vehicles, from luxury options like sports cars and limousines to commercial choices such as SUVs, MUVs, vanity vans, production pickup trucks, buses, taxis, and generators.",
  //   },
  //   {
  //     heading: "Location & Accomodation",
  //     content:
  //       "At JSR Production House, we understand that comfortable and convenient accommodations are essential for the success of any production. That's why we specialize in providing top-notch lodging options for you. From prime locations to hotels, resorts, clubs, pubs, and cafes, we offer a comprehensive range of options, all available under one roof.",
  //   },
  // ];

  async function get() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-x7rr.onrender.com/Rentals"
      );
      // console.log("data[0]",data[0]);
      setRentals(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      

      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        {/* <h1 className="text-2xl lg:text-6xl text-start bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1> */}
        {rentals.map((item, index) => {
          return (
            <>
              <h3
                key={index}
                className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6"
                data-aos="fade-up"
              >
                {item?.heading}
              </h3>
              <p className="font2 opacity-40 pb-10" data-aos="fade-up">{item?.content}</p>
            </>
          );
        })}
        
      </div>
    </>
  );
};

export default Rental;
