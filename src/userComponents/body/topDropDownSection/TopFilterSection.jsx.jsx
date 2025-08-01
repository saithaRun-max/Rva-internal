import React from "react";
import Transit from "./TransitSection";
import Language from "./Language";
import ChartType from "./ChartType";
import GrahaHiding from "./GrahaHiding";
import Aspects from "./Aspects";
import Ayanmasha from "./Ayanmasha";
import HouseSystem from "./HouseSystem";
import ChartHiding from "./ChartHiding";
import DefaultLocation from "./DefaultLocation";
import Advanced from "./Advanced";

const TopFilterSection = () => {
  return (
    <div className=" justify-between mt-4 hidden md:inline-flex lg:inline-flex">
      <Transit />
      <Language />
      <ChartType />
      <GrahaHiding />
      <Aspects />
      <Ayanmasha />
      <HouseSystem />
      <ChartHiding />
      <DefaultLocation />
      <Advanced />
    </div>
  );
};

export default TopFilterSection;
