"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { clearInterval } from "timers";

const slides = [
  {
    id: 1,
    img: "/recepcaozinha.jpg",
    bg: "",
  },
  {
    id: 2,
    img: "/salaMassagem.webp",
    bg: "",
  },
  {
    id: 3,
    img: "/lanchonete.webp",
    bg: "",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row relative`}
            key={slide.id}
          >
            <Image
              src={slide.img}
              alt=""
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4  ">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
