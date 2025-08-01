"use client";

import React from "react";
import UserMain from "./userSection/UserMain";
import GetBigPanchang from "./bigPanchangSection/BigPanchangMain";
import HouseMain from "./houseSection/HouseMain";
import FilterButtonsCharts from "./middleFiltersSection/MiddleFiltersMain";
import TopFilterSection from "./topDropDownSection/TopFilterSection.jsx";
import ChartMain from "./GraphsSection/MyLineChart";
import ChartMainSection from "./GraphsSection/ChartMainSection";
import gptDailogbox from "../header/gptDailogbox";
import BigPanchangMain from "./bigPanchangSection/BigPanchangMain";

const BodyMain = () => {
  return (
    <div className=" w-full min-w-[390px] max-w-[1152px] mx-auto">
      <UserMain />
      <TopFilterSection />
      <BigPanchangMain />
      <FilterButtonsCharts />
      <HouseMain />
      <ChartMainSection />
    </div>
  );
};

export default BodyMain;
