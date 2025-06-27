import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ChartHiding = () => {
  return (
    <div>
      <Select  className="">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Chart Hiding" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="progressionChart">Progression Chart</SelectItem>
          <SelectItem value="transitChart">Transit Chart</SelectItem>
          <SelectItem value="showAllChart">Show All Chart</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChartHiding;
