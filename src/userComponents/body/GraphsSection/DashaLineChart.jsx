import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data where tasks follow continuously (no offset)
const data = [
  {
    resource: "Team A",
    Planning: 60,
    Development: 120,
    Testing: 90,
  },
  {
    resource: "Team B",
    Planning: 30,
    Development: 150,
    Testing: 60,
  },
];

// Task colors
const colors = {
  Planning: "#8884d8",
  Development: "#82ca9d",
  Testing: "#ffc658",
};

// Format minutes to HH:MM
const formatMinutes = (min) => {
  const h = String(Math.floor(min / 60)).padStart(2, "0");
  const m = String(min % 60).padStart(2, "0");
  return `${h}:${m}`;
};

export default function DashaLineChart() {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        accessibilityLayer
        barCategoryGap="10%"
        barGap={4}
        data={[
          {
            amt: 1400,
            name: "Page A",
            pv: 800,
            uv: 590,
          },
          {
            amt: 1400,
            name: "Page B",
            pv: 800,
            uv: 590,
          },
          {
            amt: 1506,
            name: "Page C",
            pv: 967,
            uv: 868,
          },
          {
            amt: 989,
            name: "Page D",
            pv: 1098,
            uv: 1397,
          },
          {
            amt: 1228,
            name: "Page E",
            pv: 1200,
            uv: 1480,
          },
          {
            amt: 1100,
            name: "Page F",
            pv: 1108,
            uv: 1520,
          },
          {
            amt: 1700,
            name: "Page G",
            pv: 680,
            uv: 1400,
          },
        ]}
        desc=""
        height={300}
        margin={{}}
        stackOffset="positive"
        syncMethod="index"
        tabIndex={0}
        width={500}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend
          onClick={function vG() {}}
          onMouseEnter={function vG() {}}
          onMouseOut={function vG() {}}
        />
        <Bar
          activeBar={{
            fill: "gold",
          }}
          dataKey="pv"
          fill="#8884d8"
          stackId="a"
        />
        <Bar
          activeBar={{
            fill: "silver",
          }}
          dataKey="uv"
          fill="#82ca9d"
          stackId="a"
        />
        <Tooltip defaultIndex={1} />
      </BarChart>
    </ResponsiveContainer>
  );
}
