import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ChartType = () => {
  return (
    <div>
      <Select  className="">
        <SelectTrigger className="border rounded-[4px] w-28  text-[12px] dark:bg-none">
          <SelectValue placeholder="Chart Type" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="northIndian">North Indian</SelectItem>
          <SelectItem value="southIndian">South Indian</SelectItem>
          <SelectItem value="eastIndian">East Indian</SelectItem>
          
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChartType;
