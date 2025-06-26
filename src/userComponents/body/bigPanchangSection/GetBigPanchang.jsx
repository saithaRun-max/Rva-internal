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

const GetBigPanchang = () => {
  return (
    <div className="h-28 px-8 pt-4 mt-4 border border-[lightgray] dark:border-[#2b2f3c] rounded-[4px] flex justify-between align-middle shadow-none ">
      <PanchangIconComponent icon={ascendentIcon} name={"Ascendent"} />
      <PanchangIconComponent icon={mrigasiraIcon} name={"Nakshtra"} type="imgage" />
      <PanchangIconComponent icon={""} name={"Thidi"} />
      <PanchangIconComponent icon={yogaGandIcon} name={"Yoga"} />
      <PanchangIconComponent icon={karnaBalavIcon} name={"Karna"} />
      <PanchangIconComponent icon={horaSaturnIcon} name={"Hora"} />
      <PanchangIconComponent icon={sunRiseIcon} name={"18:47:41"} />
      <PanchangIconComponent icon={sunSetIcon} name={"Sun Set"} />
      <PanchangIconComponent icon={moonRiseIcon} name={"18:47:41"} />
      <PanchangIconComponent icon={moonSetIcon} name={"Moon Set"} />
    </div>
  );
};

export default GetBigPanchang;
