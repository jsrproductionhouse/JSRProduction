import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = [
    "./gallery1.jpg",
    "./gallery2.jpg",
    "./gallery3.jpg",
    "./gallery4.jpg",
    "./gallery5.jpg",
    "./gallery6.jpg",
    "./gallery7.jpg",
    "./gallery8.jpg",
    "./gallery9.jpg",
    "./gallery10.jpg",
    "./gallery11.jpg",
    "./gallery12.jpg",
    "./gallery13.jpg",
    "./gallery14.jpg",
  ];

  return (
    <>
      <h1 className="text-center pt-20 -mt-5 lg:pt-28 text-4xl lg:text-6xl tracking-[2px] lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>

      <div
        className="bg-black h-[80vh] w-screen flex flex-col justify-center gap-y-2 p-5 -mt-6 lg:-mt-16 overflow-x-scroll scrollbar-hide"
        style={{
          backgroundImage: 'url("/Images/TEAM1.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PhotoProvider>
          <div className="flex gap-3 w-[1800px] h-[250px]">
            {images.slice(0, 7).map((img, index) => (
              <PhotoView src={img} key={index}>
                <img
                  src={img}
                  alt={`img-${index + 1}`}
                  className={`trans h-full ${
                    index === 2 || index === 5 ? "w-[400px]" : "w-[200px]"
                  } rounded-md border-2 border-white`}
                />
              </PhotoView>
            ))}
          </div>

          <div className="flex gap-3 h-[250px] w-[1800px] mt-3">
            {images.slice(7).map((img, index) => (
              <PhotoView src={img} key={index + 7}>
                <img
                  src={img}
                  alt={`img-${index + 8}`}
                  className={`trans h-full ${
                    index === 0 || index === 4 ? "w-[413px]" : "w-[200px]"
                  } rounded-md border-2 border-white`}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
