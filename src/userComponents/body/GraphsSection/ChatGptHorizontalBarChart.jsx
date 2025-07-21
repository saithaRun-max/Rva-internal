"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const startYear = 2000;
const endYear = 2010;

// Segments to show on one horizontal bar
const segments = [
  { start: 2000, end: 2001, color: "#60a5fa" }, // blue
  // { start: 2002, end: 2004, color: "#facc15" }, // yellow
  { start: 2006, end: 2009, color: "#34d399" }, // green
];

// Build data as multiple stacked bars with transparent spacers
const buildStackedData = () => {
  const result = {
    name: "Timeline",
  };

  let current = startYear;

  segments.forEach((segment, index) => {
    const gap = segment.start - current;
    const length = segment.end - segment.start;

    // Add transparent gap
    result[`gap${index}`] = gap;

    // Add visible segment
    result[`seg${index}`] = length;

    // Move current to end of this segment
    current = segment.end;
  });

  return [result];
};

const data = buildStackedData();

export default function ChatGptHorizontalBarChart() {
  return (
    <div className="w-full h-[120px] p-4 bg-white rounded-xl shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{left: 30}}
        >
          <XAxis
            type="number"
            domain={[0, endYear - startYear]}
            ticks={[0, 2, 4, 6, 8, 10]}
            tickFormatter={(tick) => `${startYear + tick}`}
          />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 14 }} />
          <Tooltip
            formatter={(_, name) => {
              const segIndex = name.replace(/\D/g, "");
              const seg = segments[segIndex];
              return [`${seg.start} - ${seg.end}`, "Segment"];
            }}
          />
          {/* Transparent gaps */}
          {segments.map((_, i) => (
            <Bar
              key={`gap-${i}`}
              dataKey={`gap${i}`}
              stackId="a"
              fill="transparent"
            />
          ))}
          {/* Actual colored segments */}
          {segments.map((seg, i) => (
            <Bar
              key={`seg-${i}`}
              dataKey={`seg${i}`}
              stackId="a"
              fill={seg.color}
            >
              <Cell />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
