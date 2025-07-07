import React from "react";
import ChartsDropdown from "./ChartsDropdown";
import SwitchChart from "./SwitchChart";
import ProgressionButtons from "./ProgressionButtons";
import TransiteDropdown from "./TransiteDropdown";

const middleFiltersMain = () => {
  return (
    <div className="w-full h-28">
      <div className="pt-8 flex">
        <ChartsDropdown />
        <div className="ml-3 mt-3">
          <SwitchChart />
        </div>
        <div className="ml-10">
          <ProgressionButtons />
        </div>
        <div className="ml-9">
          <TransiteDropdown />
        </div>
      </div>
    </div>
  );
};

export default middleFiltersMain;
