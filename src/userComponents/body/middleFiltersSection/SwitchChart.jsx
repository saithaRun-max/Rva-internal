
import React from "react";

const SwitchChart = () => {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-[48px] h-[25px] bg-[#4D4D4D]  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[21px] after:transition-all dark:border-gray-600 peer-checked:bg-[#19AB27] dark:peer-checked:bg-[#19AB27]"></div>
      </label>
    </div>
  );
};

export default SwitchChart;
