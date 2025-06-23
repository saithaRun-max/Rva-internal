
"use client";

import React from "react";
import UserMain from "./userSection/UserMain";
import GetBigPanchang from "./GetBigPanchang";
import HouseMain from "./houseSection/HouseMain";
import FilterButtonsCharts from "./FilterButtonsCharts";

const BodyMain = () => {
  return (
    <div className=" w-full min-w-[350px] max-w-[1130px] mx-auto">
      <UserMain />
      <GetBigPanchang />
      <FilterButtonsCharts/>
      <HouseMain />
    </div>
  );
};

export default BodyMain;
