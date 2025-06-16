import React, { useEffect, useState } from "react";
// import "../Gallery/Gallery.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { BACKEND_URL } from "../../../config";

const Gallery = (props) => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${BACKEND_URL}/Gallery`);
      const data = await response.json();
      // console.log(data, " gallery =>>>");
      setGallery(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center pt-20 -mt-5 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>
      <div
        className="bg-black  h-[80vh] w-screen flex flex-col justify-center   gap-y-2 p-5 -mt-6  lg:-mt-16  scrollbar-hide   overflow-x-scroll "
        style={{
          backgroundImage: 'url("Public/Images/TEAM1.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PhotoProvider>
          <div className=" flex  gap-3 w-[1800px]  h-[250px]        ">
            <div className="  ">
              <PhotoView src={gallery?.img1}>
                <img
                  src={gallery?.img1}
                  className="trans h-[100%] w-[200px] rounded-md   border-2 border-white   "
                  alt="img1"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img3}>
                <img
                  src={gallery?.img3}
                  className=" trans h-[100%]  w-[200px] rounded-md  border-2 border-white  "
                  alt="img3"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img8}>
                <img
                  src={gallery?.img8}
                  className=" trans h-[100%] w-[400px]  rounded-md border-2 border-white  "
                  alt="img5"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img7}>
                <img
                  src={gallery?.img7}
                  className=" trans h-[100%] w-[200px] rounded-md  border-2 border-white  "
                  alt="img7"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img9}>
                <img
                  src={gallery?.img9}
                  className=" trans h-[100%] w-[200px] rounded-md   border-2 border-white  "
                  alt="img9"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img11}>
                <img
                  src={gallery?.img11}
                  className=" trans h-[100%] w-[400px] rounded-md  border-2 border-white  "
                  alt="img11"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img13}>
                <img
                  src={gallery?.img13}
                  className=" trans h-[100%] w-[200px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
          </div>
          <div className="flex  gap-3  h-[250px] w-[1800px] mt-3      ">
            <div className="   ">
              <PhotoView src={gallery?.img2}>
                <img
                  src={gallery?.img2}
                  className=" trans h-[100%] w-[413px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img4}>
                <img
                  src={gallery?.img4}
                  className=" trans h-[100%] w-[195px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img6}>
                <img
                  src={gallery?.img6}
                  className=" trans h-[100%] w-[195px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img5}>
                <img
                  src={gallery?.img5}
                  className=" trans h-[100%] w-[200px] rounded-md    border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img12}>
                <img
                  src={gallery?.img12}
                  className=" trans h-[100%] w-[400px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img10}>
                <img
                  src={gallery?.img10}
                  className=" trans h-[100%] w-[200px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
            <div className="">
              <PhotoView src={gallery?.img14}>
                <img
                  src={gallery?.img14}
                  className=" trans h-[100%] w-[200px] rounded-md   border-2 border-white  "
                  alt="img13"
                ></img>
              </PhotoView>
            </div>
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
