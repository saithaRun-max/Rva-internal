"use client";

import React, { useState } from "react";
import HouseComponent from "./HouseComponent";
import { useSelector } from "react-redux";
import ChartsDropdown from "../middleFiltersSection/ChartsDropdown";
import SwitchChart from "../middleFiltersSection/SwitchChart";
import ProgressionButtons from "../middleFiltersSection/ProgressionButtons";
import TransiteDropdown from "../middleFiltersSection/TransiteDropdown";

const HouseMain = (transiteStatus) => {
  const transitToggleStatus = useSelector(
    (store) => store.transitToggleStatus.status
  );
  return (
    <div className=" md:flex grid gap-10 md:gap-9 md:grid-gap-none px-6 md:px-0 ">
      <div className="">
        <div className=" my-3 flex  md:hidden lg:hidden">
          <ChartsDropdown />
          <div className="ml-3 mt-2">
            {" "}
            <SwitchChart />
          </div>
        </div>
        <HouseComponent />
      </div>
      <div className="">
        <div className=" my-3 flex  md:hidden lg:hidden">
          <div className="">
            {" "}
            <ProgressionButtons />
          </div>
        </div>
        <HouseComponent />
      </div>
      {transitToggleStatus ? (
        <div className="">
          <div className=" my-3 flex  md:hidden lg:hidden">
            <div className="">
              {" "}
              <TransiteDropdown />
            </div>
          </div>
          <HouseComponent />{" "}
        </div>
      ) : (
        <div>
          <div className=" my-3 flex  md:hidden lg:hidden">
            <div className="">
              {" "}
              <TransiteDropdown />
            </div>
          </div>
          <div className=" h-[360px] w-[360px] border border-black dark:border-gray-200  object-cover">
            <p className="text-center">{"Dashas Section"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseMain;
