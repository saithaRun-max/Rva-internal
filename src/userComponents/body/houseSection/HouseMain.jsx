"use client";

import React, { useState } from "react";
import HouseComponent from "./HouseComponent";
import UserCalender from "../userSection/UserCalender";

import { useSelector } from "react-redux";

const HouseMain = (transiteStatus) => {
  const transitToggleStatus = useSelector(
    (store) => store.transitToggleStatus.status
  );
  return (
    <div className=" md:flex  ">
      <div>
        {" "}
        <HouseComponent />
      </div>
      <div className="ml-8">
        <HouseComponent />
      </div>
      {transitToggleStatus ? (
        <div className="ml-8">
          <HouseComponent />{" "}
        </div>
      ) : (
        <div className="ml-8 h-[360px] w-[360px] border border-black dark:border-gray-200  object-cover">
          <p className="text-center">{"Dashas Section"}</p>
        </div>
      )}
    </div>
  );
};

export default HouseMain;
