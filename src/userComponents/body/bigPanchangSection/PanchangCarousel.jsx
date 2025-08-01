import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import PanchangIconComponent from "./PanchangIconComponent";

const PanchangCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full md:hidden lg:hidden  "
    >
      <CarouselContent className="">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-1/10 lg:basis-1/10 basis-1/4 "
          >
            <div className="p-1">
              <PanchangIconComponent
                icon={mrigasiraIcon}
                name={"Nakshtra"}
                type="imgage"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-mt-2" />
      <CarouselNext className="-mt-2 mx-2" />
    </Carousel>
  );
};

export default PanchangCarousel;
