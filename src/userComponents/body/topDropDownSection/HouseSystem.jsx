import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const HouseSystem = () => {
  return (
    <div>
      <Select  className="">
        <SelectTrigger className="border rounded-[4px] w-[124px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="House System" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="placidus">Placidus</SelectItem>
          <SelectItem value="shripati">Shripati</SelectItem>
          <SelectItem value="koch">Koch</SelectItem>

          <SelectItem value="porphyry">Porphyry</SelectItem>
          <SelectItem value="equal">Equal</SelectItem>
          <SelectItem value="topocentric">Topocentric</SelectItem>
          <SelectItem value="horizontal">Horizontal</SelectItem>
          <SelectItem value="campanus">Campanus</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HouseSystem;
