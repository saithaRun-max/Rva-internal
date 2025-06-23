"use client";

import React from "react";
import HouseComponent from "./HouseComponent";

const HouseMain = () => {
  return (
    <div className=" md:flex md:justify-between ">
      <div>
        {" "}
        <HouseComponent />
      </div>
      <div className="">
        <HouseComponent />
      </div>
      <div>
        <HouseComponent />
      </div>
    </div>
  );
};

export default HouseMain;
