import React, { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const [bods, setBods] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get("https://jsr-backend-x7rr.onrender.com/Bod");
      setBods(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  // const bods = [
  //   {
  //     name: "Tarun Rawat",
  //     desig: "Vice Chairman, JSR Group",
  //     content: "Tarun Rawat is a titled entrepreneur, producer and director. As a young, successful producer and businessman, he has been working hard to build a legacy as one of the most influential names in his industry. He is known for his ability to spot trends early and turn them into profit and won several awards for the same. It's no wonder that he has made such an impact on the world around him. As a leader, he is known for his ability to motivate others and drive them towards success, but what makes him truly remarkable are his values and integrity.",
  //     img: "https://cdn.discordapp.com/attachments/1078905801017659432/1099956366891831397/Tarun.png",
  //   },
  //   {
  //     name: "J. S. Rawat",
  //     desig: "",
  //     content: "J. S. Rawat, the visionary founder and owner of JSR Group, hailing from Uttarakhand, embarked on an inspiring journey that began with humble roots. Starting with the real estate business, he laid the foundation of his business empire through successful ventures in the realm of properties and developments. Fuelled by unwavering determination, Rawat's ventures expanded to encompass diverse domains, including the renowned JSR Production House, JSR Record Label, JSR Law Consultancy, and the esteemed JSR Group of hotels. His remarkable ascent stands as a testament to the power of hard work and innovation, propelling him from modest beginnings to the pinnacle of entrepreneurship.",
  //     img: "https://res.cloudinary.com/djb3n17c0/image/upload/v1694415722/B_rsmfqt.png",
  //   },
  //   {
  //     name: "Hemal Rawat",
  //     desig: "",
  //     content: "Hemal Rawat is a cornerstone of strength, wisdom, and entrepreneurship within the group's dynamic narrative. Beyond being a supportive partner and a nurturing mother, Hemal Rawat is a distinguished businesswoman in her own right. Her enduring commitment and entrepreneurial flair have not only left an indelible mark on the JSR Group but have also given birth to her own venture – H Beauty Studio, a thriving chain of beauty salons. Hemal Rawat's profound contributions to JSR Production House have elevated the creative essence of the group, showcasing her passion and expertise. She encapsulates the epitome of a remarkable woman who deftly manages her roles as an accomplished business leader, a devoted mother, and a visionary entrepreneur.",
  //     img: "https://hbeautystudio.com/img/Untitled-4.jpg",
  //   },
  //   {
  //     name: "Prashil Rawat",
  //     desig: "",
  //     content: "Born in 7 January 1991, Prashil Rawat is a titled entrepreneur and actor. He has a strong inclination for acting, which has propelled him to pursue it as a career. Prashil has a strong relationship with the art of acting and constantly striving to learn new skills and techniques to improve his performance as an actor. His favourite thing about being an actor is getting to play different characters and learning new things about the timeless art of acting. One thing that attracts him to acting is its power to create a new world where anything is possible.",
  //     img: "",
  //   },
  // ]
  return (
    <div>
      <>
        <div className="bg-black p-5 md:p-12 px-6 h-full w-screen text-white ">
          <div className="flex flex-col-reverse items-center  lg:mx-auto lg:w-[84vw] lg:justify-center lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[0]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2 text-grey-900 ">
                <li>{bods[0]?.desig}</li>
                <li className="opacity-40 text-justify ">
                  {bods[0]?.content}
                </li>
              </ul>
            </div>
            <img
              src="TARUN-2.png"
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          <div className="text-2xl lg:text-6xl text-center bg-black relative z-50 text-white pb-12 mt-2 pt-16 -mb-4  ">
            BOARD OF DIRECTORS
          </div>

          <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40 ">
            <img src="Chairman.png" className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"></img>
            <div className="md:mr-16 lg:ms-8 px-0 lg:pl-16 lg:leading-7 sm:ps-8 float-right justify-start pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[1]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40  text-justify text-grey-900">
                {bods[1]?.content}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center lg:mx-auto lg:w-[84vw] lg:justify-center lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[2]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40  text-justify text-grey-900">
                {bods[2]?.content}
                </li>
              </ul>
            </div>
            <img
              src={bods[2]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:ps-14 lg:flex-row pt-5 lg:pb-40 md:mr-16">
            <img
              src='prashil2.png'
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            />
            <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-10 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[3]?.name}
              </h1>
              <ul className="font2 flex flex-col gap-2">
                <li className="opacity-40 text-grey-900 text-justify">
                {bods[3]?.content}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Team;
