"use client";

import React from "react";
import UserMain from "./userSection/UserMain";
import GetBigPanchang from "./bigPanchangSection/GetBigPanchang";
import HouseMain from "./houseSection/HouseMain";
import FilterButtonsCharts from "./topFilterButtonsSection/FilterButtonsCharts";

const BodyMain = () => {
  return (
    <div className=" w-full min-w-[390px] max-w-[1152px] mx-auto">
      <UserMain />

      <GetBigPanchang />
      <FilterButtonsCharts />
      <HouseMain />
    </div>
  );
};

export default BodyMain;
