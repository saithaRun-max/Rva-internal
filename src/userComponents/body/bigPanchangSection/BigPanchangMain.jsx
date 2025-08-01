"use client";

import React from "react";
import PanchangIconComponent from "./PanchangIconComponent";

import {
  ascendentIcon,
  mrigasiraIcon,
  moonSetIcon,
  moonRiseIcon,
  yogaGandIcon,
  karnaBalavIcon,
  horaSaturnIcon,
  sunRiseIcon,
  sunSetIcon,
  asleshaIcon,
  purvaPalgoniIcon,
} from "@/lib/panchangConstants";
import PanchangCarousel from "./PanchangCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const panchangData = [
  {
    icon: ascendentIcon,
    name: "Ascendent",
  },
  {
    icon: mrigasiraIcon,
    name: "Nakshtra",
    type: "image",
  },
  {
    icon: "",
    name: "Thidi",
  },
  {
    icon: karnaBalavIcon,
    name: "Karna",
  },
  {
    icon: horaSaturnIcon,
    name: "Hora",
  },
  {
    icon: sunRiseIcon,
    name: "18:20:16",
  },

  {
    icon: sunSetIcon,
    name: "Sun Set",
  },
  {
    icon: moonRiseIcon,
    name: "18:20:16",
  },
  {
    icon: moonSetIcon,
    name: "Moon Set",
  },
];

const BigPanchangMain = () => {
  return (
    <div>
      <div className="h-28  mt-4 border border-[lightgray] dark:border-[#2b2f3c] rounded-[4px]  grid-cols-10 items-center justify-items-center shadow-none hidden md:grid lg:grid">
        <PanchangIconComponent icon={ascendentIcon} name={"Ascendent"} />
        <PanchangIconComponent
          icon={mrigasiraIcon}
          name={"Nakshtra"}
          type="image"
        />
        <PanchangIconComponent icon={""} name={"Thidi"} />
        <PanchangIconComponent icon={yogaGandIcon} name={"Yoga"} />
        <PanchangIconComponent icon={karnaBalavIcon} name={"Karna"} />
        <PanchangIconComponent icon={horaSaturnIcon} name={"Hora"} />
        <PanchangIconComponent icon={sunRiseIcon} name={"18:47:41"} />
        <PanchangIconComponent icon={sunSetIcon} name={"Sun Set"} />
        <PanchangIconComponent icon={moonRiseIcon} name={"18:47:41"} />
        <PanchangIconComponent icon={moonSetIcon} name={"Moon Set"} />
      </div>

      <div className=" h-28 mx-2 mt-6 border border-[lightgray] dark:border-[#2b2f3c] rounded-[4px]  md:hidden lg:hidden px-12 grid grid-cols-1 items-center justify-items-center ">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 3,
          }}
          className="w-full  "
        >
          <CarouselContent className="">
            {panchangData.map((item, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-1/10 lg:basis-1/10 basis-1/4 "
              >
                <div className="p-1">
                  <PanchangIconComponent
                    icon={item?.icon}
                    name={item?.name}
                    type={item?.type}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className=" " />
        </Carousel>
      </div>
    </div>
  );
};

export default BigPanchangMain;
