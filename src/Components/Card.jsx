import React from "react";

// Cloudinary images
import desiKalakar from "../assets/desiKalakar.jpg";
import deeper from "../assets/deeper.jpg";
import mussorieBoyz from "../assets/mussoriie-boyz2.jpg";
import chaal from "../assets/chhal2.jpg";
import romeo from "../assets/romeo.jpg";
import bairi from "../assets/bairi-piya.jpg";
import birha from "../assets/birha.jpg";
import siyaRam from "../assets/siya-ram.jpg";
import jaiSiLo from "../assets/ja-si-lo-gaassi.jpg";
import ruksat from "../assets/rukhsat.jpg";
import hours from "../assets/72-hours.jpg";
import speed from "../assets/speed.jpg";
import baby from "../assets/baby.jpg";
import checkMate from "../assets/check-mate.jpg";
import rehneDo from "../assets/rehne-do.jpg";
import badMundey from "../assets/badMundey.jpg";
import galat from "../assets/galatKaam.jpg";
import mero from "../assets/mero-dil-aaygyi.jpg";
import kuyedi from "../assets/kuyedi.jpg";
import tuna from "../assets/tu-na-sahi.jpg";
import shiv from "../assets/main-hi-shiv-hu.jpg";

const Card = ({ data }) => {
  const images = {
    "67596164ca660da510294c5a": desiKalakar,
    "67596202ca660da510294c64": mussorieBoyz,
    "6759625fca660da510294c6f": chaal,
    "6759629fca660da510294c79": deeper,
    "6759584aca660da510294ae5": checkMate,
    "675958aeca660da510294af0": rehneDo,
    "67595921ca660da510294afb": romeo,
    "675959daca660da510294b04": birha,
    "67595a48ca660da510294b0e": badMundey,
    "67595ab9ca660da510294b17": siyaRam,
    "67595b34ca660da510294b24": galat,
    "67595bbbca660da510294b2e": mero,
    "67595c44ca660da510294b43": kuyedi,
    "67595cc4ca660da510294b4c": jaiSiLo,
    "67595d35ca660da510294b56": ruksat,
    "67595e47ca660da510294bc4": hours,
    "67595ec1ca660da510294bce": speed,
    "67595f38ca660da510294bd8": bairi,
    "6759601bca660da510294bf9": baby,
    "67596073ca660da510294c03": tuna,
    "675960f3ca660da510294c0d": shiv,
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] xl:max-w-[420px] mx-auto ">
      <a href={data?.link} target="_blank" rel="noreferrer">
        <img
          src={images[data?._id]}
          alt={data?.title || "poster"}
          className="w-full h-64 md:h-72 xl:h-80 object-contain rounded-lg"
        />
      </a>

      <div className="w-full text-left mt-4 font2 space-y-2 text-sm sm:text-base">
        {data?.title && (
          <p className="font-bold text-lg text-center break-words">
            {data.title}
          </p>
        )}

        {data?.producer?.trim() && (
          <p>
            <span className="font-semibold">Producer:</span> {data.producer}
          </p>
        )}

        {data?.director && (
          <p>
            <span className="font-semibold">Director:</span> {data.director}
          </p>
        )}

        {data?.singer && (
          <p>
            <span className="font-semibold">Singer:</span> {data.singer}
          </p>
        )}

        {data?.musicproducer && (
          <p>
            <span className="font-semibold">Music Producer:</span>{" "}
            {data.musicproducer}
          </p>
        )}

        {data?.dop && (
          <p>
            <span className="font-semibold">DOP:</span> {data.dop}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
