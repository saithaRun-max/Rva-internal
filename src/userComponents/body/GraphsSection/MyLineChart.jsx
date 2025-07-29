"use client";

import {
  CartesianGrid,
  Dot,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ZAxis,
  Bar,
  BarChart,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Legend,
  Scatter,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots and colors";

import { graphData } from "@/lib/constants";

const mDashaData = [
  {
    year: "2001",
    index: 1,
    value: "100",
    Mdasha: "Surya (Sun)",
    Adasha: "Budha (Mercury)",
  },
  {
    year: "2002",
    index: 1,
    value: 150,
    Mdasha: "Surya (Sun)",
    Adasha: "Budha (Mercury)",
  },
  {
    year: "2003",
    index: 1,
    value: 120,
    Mdasha: "Surya (Sun)",
    Adasha: "Budha (Mercury)",
  },
  {
    year: "2004",
    index: 1,
    value: 200,
    Mdasha: "Surya (Sun)",
    Adasha: "Budha (Mercury)",
  },
  {
    year: "2005",
    index: 1,
    value: 300,
    Mdasha: "Chandra (Moon)",
    Adasha: "kethu",
  },
  {
    year: "2006",
    index: 1,
    value: 400,
    Mdasha: "Chandra (Moon)",
    Adasha: "kethu",
  },
  {
    year: "2007",
    index: 1,
    value: 200,
    Mdasha: "Chandra (Moon)",
    Adasha: "kethu",
  },
  {
    year: "2008",
    index: 1,
    value: 100,
    Mdasha: "Chandra (Moon)",
    Adasha: "kethu",
  },
  {
    year: "2009",
    index: 1,
    value: 150,
    Mdasha: "Rahu",
    Adasha: "Shukra (Venus)",
  },
  {
    year: "2010",
    index: 1,
    value: 160,
    Mdasha: "Rahu",
    Adasha: "Shukra (Venus)",
  },
  {
    year: "2011",
    index: 1,
    value: 170,
    Mdasha: "Rahu",
    Adasha: "Shukra (Venus)",
  },
  {
    year: "2012",
    index: 1,
    value: 180,
    Mdasha: "Rahu",
    Adasha: "Shukra (Venus)",
  },
  {
    year: "2013",
    index: 1,
    value: 144,
    Mdasha: "Budha (Mercury)",
    Adasha: "kethu",
  },
  {
    year: "2014",
    index: 1,
    value: 166,
    Mdasha: "Budha (Mercury)",
    Adasha: "kethu",
  },
  {
    year: "2015",
    index: 1,
    value: 145,
    Mdasha: "Budha (Mercury)",
    Adasha: "kethu",
  },
  {
    year: "2016",
    index: 1,
    value: 150,
    Mdasha: "Budha (Mercury)",
    Adasha: "kethu",
  },
  { year: "2017", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2018", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2019", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2020", index: 1, value: 130, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2021", index: 1, value: 140, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2022", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2023", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2024", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2025", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2026", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2027", index: 1, value: 130, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2028", index: 1, value: 140, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2029", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2030", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2031", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2032", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2033", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2034", index: 1, value: 130, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2035", index: 1, value: 140, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2036", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2037", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2038", index: 1, value: 170, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2039", index: 1, value: 180, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2040", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2041", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2042", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2043", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
  { year: "2043", index: 1, value: 165, Mdasha: "Rahu", Adasha: "kethu" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-2)",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
};

const MyLineChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md bg-[#ffffff] text-black shadow-md h-14 w-36 p-2 px-4 border">
          <p className="font-semibold text-md">{label}</p>
          <p className="pt-2  ">
            {"value"}
            <span className="font-semibold pl-1">{` ${payload[0].value}`}</span>
          </p>
        </div>
      );
    }
  };
  const BubbleCustomTooltip = ({ active, payload, label }) => {
   
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md bg-[#ffffff] text-black   shadow-lg h-28 w-48 p-2 px-4 border">
          {/* <p className="font-light text- ">{label}</p> */}
          <p className="pt-2 font-medium  text-[13px]">
            {"Year"}
            <span className="font-medium pl-1  text-[12px]">{` ${payload[0]?.value}`}</span>
          </p>
          <p className="pt-2 font-medium text-[12px] ">
            {"Maha :"}
            <span className="font-medium pl-1 text-[13px] text-red-600">
              {payload[0]?.payload?.Mdasha}
            </span>
          </p>
          <p className="pt-2 font-medium text-sm text-[12px]">
            {"Antara :"}
            <span className="font- pl-1 text-[13px] text-red-600">
              {payload[0]?.payload?.Adasha}
            </span>
          </p>
        </div>
      );
    }
  };

  const closest = (arr, target) => {
    return arr.reduce((prev, curr) =>
      Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
    );
  };

  const syncMethodFunction = (_ticks, data) => {
    const xValues = mDashaData.map((d) => d.x);
    const closestX = closest(xValues, Number(data.activeLabel));
    return mDashaData.findIndex((d) => d.x === closestX);
  };

  return (
    <div>
      <div className="">
        <h2 className="text-lg font-semibold ">{"Graphs & Timeline"}</h2>
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-[400px] w-full mx-auto p-1  shadow-none rounded-sm  mt-5 "
      >
        <LineChart
          accessibilityLayer
          data={graphData}
          margin={{}}
          syncId="Mixed"
          syncMethod={syncMethodFunction}
          className="  w-[1152px] -ml-8"
        >
          <YAxis />
          <XAxis dataKey="year" />
          <CartesianGrid strokeDasharray="3 3" />
          <ChartTooltip content={<CustomTooltip />} />
          <Line
            dataKey="value"
            type="natural"
            stroke="var(--color-visitors)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="value"
            type="natural"
            stroke="var(--color-visitors)"
            strokeWidth={2}
            dot={false}
            // dot={({ payload, ...props }) => {
            //   return (
            //     <Dot
            //       key={payload.browser}
            //       r={5}
            //       cx={props.cx}
            //       cy={props.cy}
            //       fill={payload.fill}
            //       stroke={payload.fill}
            //     />
            //   );
            // }}
          />
        </LineChart>
      </ChartContainer>
      <ResponsiveContainer width="100%" height={60} className="-ml-5 pt-5">
        <ScatterChart
          width={800}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          syncId="Mixed"
        >
          <XAxis
            type="category"
            dataKey="year"
            name="year"
            interval={2}
            tickLine={{ transform: "translate(0, -6)" }}
            scale="auto"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={true}
            label={{ value: "Dasha", position: "insideRight", }}
            className="text-[12px]"
          />
          <ZAxis type="text" dataKey="Mdasha" />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100, marginTop: -80 }}
            content={<BubbleCustomTooltip />}
          />

          <Scatter data={mDashaData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
