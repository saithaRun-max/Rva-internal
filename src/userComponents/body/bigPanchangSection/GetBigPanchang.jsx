"use client";

import React from "react";
import AscendentIcon from "./AscendentIcon";

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
} from "@/lib/panchangConstants";

const GetBigPanchang = () => {
  return (
    <div className="h-28 px-9 py-4  border rounded-sm flex justify-between align-middle shadow-none ">
      <AscendentIcon icon={ascendentIcon} name={"Ascendent"} />
      <AscendentIcon icon={mrigasiraIcon} name={"Nakshtra"} />
      <AscendentIcon icon={yogaGandIcon} name={"Yoga"} />
      <AscendentIcon icon={karnaBalavIcon} name={"Karna"} />
      <AscendentIcon icon={horaSaturnIcon} name={"Hora"} />
      <AscendentIcon icon={sunRiseIcon} name={"Sun Rise"} />
      <AscendentIcon icon={sunSetIcon} name={"Sun Set"} />
      <AscendentIcon icon={moonRiseIcon} name={"Moon Rise"} />
      <AscendentIcon icon={moonSetIcon} name={"Moon Set"} />
    </div>
  );
};

export default GetBigPanchang;
