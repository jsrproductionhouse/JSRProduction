import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
Aos.init({
  duration: 1200,
});

const Service = () => {
  const [a,setA]=useState([]);
  async function get()
  {
      try{

          const {data}=await axios.get("https://jsr-backend-x7rr.onrender.com/Service")
          setA(data);
      }
      catch(e)
      {
          console.log(e);
      }
  }
useEffect(()=>{
  get();
},[])
// const ar=[
//   {
//     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698742150/fzxwovpyuq6hjtnwvlxx.jpg",
//     mainHeading: "PRE-PRODUCTION",
//     desc: "Pre-production is an essential part of the filmmaking process at JSR Production House . It is during this phase that we meticulously plan, coordinate, and prepare for every aspect of the project to ensure its success.",
//     subHeading1: "Story and Scriptwriting",
//     desc1: "Have a story concept but are unsure about how to present it on screen? Don't worry, JSR Production house has your back. With our storytelling, your story will make people all the emotions you wanna portray and jump out of their seats with excitement.",
//     subHeading2: "Screenplay",
//     desc2: "Professional screenwriters will work with you every step of the way, from dialogue, scenes, and sequences to execution strategy,until your vision becomes a reality!",
//     subHeading3: "Storyboarding",
//     desc3: "Get a close look at your work through a storyboard made for your script, which includes a shot-by-shot sequence, placements, and direction elements: a visual representation of your story plan.",
//   },
//   {
//     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698742166/goj6pzpshhb8lrfatjfv.jpg",
//     mainHeading: "PRODUCTION",
//     desc: "During production, JSR Production house provides you with comprehensive support, including camera operation, lighting, sound recording, and on-set coordination.",
//     subHeading1: "Filming",
//     desc1: "We specialize in producing and directing award- winning films. JSR's outstanding team will work and bring your story to life in the most beautiful way!",
//     subHeading2: "Commercial Advertisement",
//     desc2: "With JSR Production house, you will receive the most effective and visually appealing advertisements that represent your brand and its goals to the maximum extent -ads that are powerful and unforgettable!",
//     subHeading3: "Music Album",
//     desc3: "If you are looking for a highly professional yet affordable voice recording studio, look no further. JSR Production house is here to help you with everything from the production of music to creating the best music videos for your songs.",
//   },
//   {
//     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698742180/dda4y5o16iepugqotwc7.jpg",
//     mainHeading: "POST-PRODUCTION",
//     desc: "Post-production plays a crucial role in shaping the overall quality and impact of a film under jsr production house we have the best team for   Editing, Visual Effects (VFX), music production , mixing & master, colour correction and grading,   Music composition and Score, Foley and ADR, Title and credit sequence, Quality control. Once all these elements come together, the  product is considered to be in its final form and is ready for distribution to theaters, television, digital platforms etc.    ",
//     subHeading1: "Editing",
//     desc1: "The backbone of post-production, editing is where the magic happens. Our skilled editors work diligently to shape the narrative, pace, and tone, crafting a seamless flow that keeps your audience engaged from start to finish.",
//     subHeading2: "Sound Design and Mixing",
//     desc2: "Sound adds depth and dimension to the visual experience. Our sound engineers work to perfect the audio elements, from dialogue and music to sound effects, ensuring that your project sounds as good as it looks.",
//     subHeading3: "Visual Effects and Color Grading",
//     desc3: "Transform your project into a visually stunning piece with our high-quality visual effects and color grading services. Our team of experts will enhance visuals, correct color imbalances, and add special effects to elevate your story to the next level.",
//   },
//   {
//     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698742196/kutte9epar4vznnleedc.jpg",
//     mainHeading: "VIRTUAL PRODUCTION",
//     desc: "Our Virtual Production services harness the latest technology and innovation to create immersive and captivating experiences for your projects. With a seamless blend of the physical and virtual realms, we bring your visions to life like never before.",
//     subHeading1: "Virtual Sets and Environments",
//     desc1: "Our skilled team of artists and technicians design and create virtual sets and environments that perfectly complement your storyline. Whether it's historical locations, futuristic landscapes, or fantasy worlds, we can visualize and build it all.",
//     subHeading2: "Virtual Cameras and Cinematography",
//     desc2: "Our team of experienced cinematographers utilizes virtual cameras to capture dynamic shots within the virtual environment, enhancing the visual storytelling of your project.",
//     subHeading3: "Game Engine Technology",
//     desc3: "We utilize powerful game engine technology to create dynamic and  immersive virtual worlds, resulting in higher fidelity and more engaging experiences.",
//   },
//   {
//     img: "https://res.cloudinary.com/dsea9eyps/image/upload/v1698742211/enzqodftjwp1k620qf0o.jpg",
//     mainHeading: "MARKETING AND DISTRIBUTION",
//     desc: "We are delighted to present our Marketing and Distribution services that are designed to help your projects reach the widest audience and achieve success.",
//     subHeading1: "Market Research and Strategy",
//     desc1: "Our first step is to conduct in-depth market research to understand your project's potential audience and the competitive landscape. Based on the findings, we develop a tailored marketing strategy to maximize your project's visibility and impact.",
//     subHeading2: "Public Relations (PR)",
//     desc2: "Our PR experts work diligently to build positive media coverage for your productions. We engage with journalists, bloggers, and influencers to ensure your projects get the attention they deserve.",
//     subHeading3: "Distribution Strategies",
//     desc3: "We develop customized distribution plans to ensure your productions are accessible to the right distribution channels, whether it's theatrical releases, streaming platforms, DVD/Blu-ray, or international markets.",
//   },
// ]
  return (
    <>
      <div className="bg-black p-5 text-justify md:p-12 px-6 pt-5 h-full w-[100%] text-white ">
        <div
          className="flex flex-col items-center justify-center lg:flex-row pb-10 lg:pb-40"
          data-aos="fade-up"
        >
          <img
            src={a[0]?.img}
            alt=""
            className="w-[320px]  md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
               {a[0]?.mainHeading}
            </h1>
            <p className="font2 opacity-40 pb-4">
            {a[0]?.desc}
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>{a[0]?.subHeading1}</h1></li>
              <li className="opacity-40">
              {a[0]?.desc1}
              </li>
              <li><h1>{a[0]?.subHeading2}</h1></li>
              <li className="opacity-40">
              {a[0]?.desc2}
              </li>
              <li><h1>{a[0]?.subHeading3}</h1></li>
              <li className="opacity-40">
              {a[0]?.desc3}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[1]?.mainHeading}
            </h1>
            <p className="font2 opacity-40 pb-4">
            {a[1]?.desc1}
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>{a[1]?.subHeading1}</h1></li>
              <li className="opacity-40">
              {a[1]?.desc1}
              </li>
              <li><h1>{a[1]?.subHeading2}</h1></li>
              <li className="opacity-40">
              {a[1]?.desc2}
              </li>
              <li><h1>{a[1]?.subHeading3}</h1></li>
              <li className="opacity-40">
              {a[1]?.desc3}
              </li>
            </ul>
          </div>
          <img
            src={a[1]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black text-justify p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src={a[2]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[2]?.mainHeading}
            </h1>
            <p className="font2 opacity-40 pb-4">
            {a[2]?.desc}
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>{a[2]?.subHeading1}</h1></li>
              <li className="opacity-40">
              {a[2]?.desc1}
              </li>
              <li><h1>{a[2]?.subHeading2}</h1></li>
              <li className="opacity-40">
              {a[2]?.desc2}
              </li>
              <li><h1>{a[2]?.subHeading3}</h1></li>
              <li className="opacity-40">
              {a[2]?.desc3}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5 "
              data-aos="fade-up"
            >
              {a[3]?.mainHeading}
            </h1>
            <p className="font2 opacity-40 pb-4">
            {a[3]?.desc}
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>{a[3]?.subHeading1}</h1></li>
              <li className="opacity-40">
              {a[3]?.desc1}
              </li>
              <li><h1>{a[3]?.subHeading2}</h1></li>
              <li className="opacity-40">
              {a[3]?.desc2}
              </li>
              <li><h1>{a[3]?.subHeading3}</h1></li>
              <li className="opacity-40">
              {a[3]?.desc3}
              </li>
            </ul>
          </div>
          <img
            src={a[3]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20  "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black text-justify p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src={a[4]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[4]?.mainHeading}
            </h1>
            <p className="font2 opacity-40 pb-4">
            {a[4]?.desc}
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>{a[4]?.subHeading1}</h1></li>
              <li className="opacity-40">
              {a[4]?.desc1}
              </li>
              <li><h1>{a[4]?.subHeading2}</h1></li>
              <li className="opacity-40">
              {a[4]?.desc2}
              </li>
              <li><h1>{a[4]?.subHeading3}</h1></li>
              <li className="opacity-40">
              {a[4]?.desc3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
