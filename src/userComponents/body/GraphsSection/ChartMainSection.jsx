import React from "react";
import MyLineChart from "./MyLineChart";

import ChatGptHorizontalBarChart from "./ChatGptHorizontalBarChart";
import DashaLineChart from "./DashaLineChart";

const ChartMainSection = () => {
  return (
    <div>
      <MyLineChart />

      <DashaLineChart />
      {/* <ChatGptHorizontalBarChart /> */}
    </div>
  );
};

export default ChartMainSection;
