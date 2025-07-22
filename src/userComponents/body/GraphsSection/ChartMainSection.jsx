import React from "react";
import MyLineChart from "./MyLineChart";

import ChatGptHorizontalBarChart from "./ChatGptHorizontalBarChart";
import DashaLineChart from "./DashaLineChart";
import MyBubblechart from "./MyBubblechart";

const ChartMainSection = () => {
  return (
    <div className="mt-12 h-[1000px]">
      <MyLineChart />

      {/* <MyBubblechart /> */}
      {/* <DashaLineChart /> */}
      {/* <ChatGptHorizontalBarChart /> */}
    </div>
  );
};

export default ChartMainSection;
