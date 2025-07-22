// components/ScatterBubbleChart.tsx

"use client";

import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const mDashaData = [
  { year: "2001", index: 1, value: "100" },
  { year: "2002", index: 1, value: 150 },
  { year: "2003", index: 1, value: 120 },
  { year: "2004", index: 1, value: 200 },
  { year: "2005", index: 1, value: 300 },
  { year: "2006", index: 1, value: 400 },
  { year: "2007", index: 1, value: 200 },
  { year: "2008", index: 1, value: 100 },
  { year: "2009", index: 1, value: 150 },
  { year: "2010", index: 1, value: 160 },
  { year: "2011", index: 1, value: 170 },
  { year: "2012", index: 1, value: 180 },
  { year: "2013", index: 1, value: 144 },
  { year: "2014", index: 1, value: 166 },
  { year: "2015", index: 1, value: 145 },
  { year: "2016", index: 1, value: 150 },
  { year: "2017", index: 1, value: 170 },
  { year: "2018", index: 1, value: 180 },
  { year: "2019", index: 1, value: 165 },
  { year: "2020", index: 1, value: 130 },
  { year: "2021", index: 1, value: 140 },
  { year: "2022", index: 1, value: 170 },
  { year: "2023", index: 1, value: 180 },
];

const aDashaData = [
  { year: "2001", index: 1, value: 160 },
  { year: "2002", index: 1, value: 180 },
  { year: "2003", index: 1, value: 150 },
  { year: "2004", index: 1, value: 120 },
  { year: "2005", index: 1, value: 200 },
  { year: "2006", index: 1, value: 300 },
  { year: "2007", index: 1, value: 100 },
  { year: "2008", index: 1, value: 200 },
  { year: "2009", index: 1, value: 100 },
  { year: "2010", index: 1, value: 150 },
  { year: "2011", index: 1, value: 160 },
  { year: "2012", index: 1, value: 160 },
  { year: "2013", index: 1, value: 180 },
  { year: "2014", index: 1, value: 144 },
  { year: "2015", index: 1, value: 166 },
  { year: "2016", index: 1, value: 145 },
  { year: "2017", index: 1, value: 150 },
  { year: "2018", index: 1, value: 160 },
  { year: "2019", index: 1, value: 180 },
  { year: "2020", index: 1, value: 165 },
  { year: "2021", index: 1, value: 130 },
  { year: "2022", index: 1, value: 140 },
  { year: "2023", index: 1, value: 160 },
  { year: "2024", index: 1, value: 180 },
];

export default function MyBubblechart() {
  return (
    <div className="w-full h-[400px] mt-14">
      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="year"
            name="year"
            interval={1}
            tickLine={{ transform: "translate(0, -6)" }}
            scale="auto"
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Adasha", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" />
          <Tooltip
            cursor={{ strokeDasharray: "2 3" }}
            wrapperStyle={{ zIndex: 100 }}
          />

          <Scatter data={aDashaData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={60} className="mt-5">
        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="year"
            name="year"
            interval={2}
            tickLine={{ transform: "translate(0, -6)" }}
            scale="auto"
             
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "MDasha", position: "insideRight" }}
            scale="auto"
          />
          <ZAxis type="number" dataKey="value" />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
          />
          <Scatter data={mDashaData} fill="#8884d8" shape="circle" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
