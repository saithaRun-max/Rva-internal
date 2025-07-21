"use client";

import {
  CartesianGrid,
  Dot,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Tooltip,
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

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

// const chartData = [
//   {
//     browser: "chrome",
//     visitors: 275,
//     desktop: 186,
//     fill: "var(--color-chrome)",
//   },
//   {
//     browser: "safari",
//     visitors: 200,
//     desktop: 120,
//     fill: "var(--color-safari)",
//   },
//   {
//     browser: "firefox",
//     visitors: 187,
//     desktop: 166,
//     fill: "var(--color-firefox)",
//   },
//   { browser: "edge", visitors: 173, desktop: 106, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, desktop: 90, fill: "var(--color-other)" },
// ];
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
        <div className="rounded-md bg-[#ffffff] shadow-md h-14 w-36 p-2 px-4">
          <p className="font-semibold text-md">{label}</p>
          <p className="pt-2  ">
            {"value"}
            <span className="font-semibold pl-1">
              {` ${payload[0].value}`}{" "}
            </span>
          </p>
        </div>
      );
    }
  };
  return (
    <div>
      <Card className=" p-1 max-w-[1145px] shadow-none rounded-sm">
        <CardHeader>
          <CardTitle className="text-xl">Line Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[450px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={graphData}
              margin={{
                top: 14,

                right: 14,
              }}
              syncId="Mixed"
            >
              <YAxis />
              <XAxis dataKey="year" />
              <CartesianGrid strokeDasharray="3 3" />

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
        </CardContent>
      </Card>
    </div>
  );
};

export default MyLineChart;
