"use client";

import React from "react";
import UserMain from "./userSection/UserMain";
import GetBigPanchang from "./bigPanchangSection/GetBigPanchang";
import HouseMain from "./houseSection/HouseMain";
import FilterButtonsCharts from "./middleFiltersSection/MiddleFiltersMain";
import TopFilterSection from "./topDropDownSection/TopFilterSection.jsx";

const BodyMain = () => {
  return (
    <div className=" w-full min-w-[390px] max-w-[1152px] mx-auto">
      <UserMain />
      <TopFilterSection />
      <GetBigPanchang />
      <FilterButtonsCharts />
      <HouseMain />
    </div>
  );
};

export default BodyMain;
