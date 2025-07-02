import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TransiteDropdown = () => {
  return (
    <div className="h-[40px] ">
      <Select defaultValue="transiteChart" className="rounded-sm ">
        <SelectTrigger className="w-[360px] py-5 rounded-sm ">
          <SelectValue placeholder="d1 Chart" className="" />
        </SelectTrigger>
        <SelectContent className="h-60">
          <SelectGroup>
            <SelectItem value="transiteChart">transite chart</SelectItem>
            <SelectItem value="d2Chart">d2 Chart</SelectItem>
            <SelectItem value="d3Chart">d3 Chart</SelectItem>
            <SelectItem value="d4Chart">d4 Chart</SelectItem>
            <SelectItem value="d1Chart">d1Chart</SelectItem>
            <SelectItem value="d2Chart">d2 Chart</SelectItem>
            <SelectItem value="d3Chart">d3 Chart</SelectItem>
            <SelectItem value="d4Chart">d4 Chart</SelectItem>
            <SelectItem value="d5Chart">d5 Chart</SelectItem>
            <SelectItem value="d6Chart">d6 Chart</SelectItem>
            <SelectItem value="d7Chart">d7 Chart</SelectItem>
            <SelectItem value="d8Chart">d8 Chart</SelectItem>
            <SelectItem value="d9Chart">d9 Chart</SelectItem>
            <SelectItem value="d10Chart">d10 Chart</SelectItem>
            <SelectItem value="d11Chart">d1 Chart</SelectItem>
            <SelectItem value="d12Chart">d11 Chart</SelectItem>
            <SelectItem value="d16Chart">d16 Chart</SelectItem>
            <SelectItem value="d20Chart">d20 Chart</SelectItem>
            <SelectItem value="d24Chart">d24 Chart</SelectItem>
            <SelectItem value="d27Chart">d27 Chart</SelectItem>
            <SelectItem value="d30Chart">d30 Chart</SelectItem>
            <SelectItem value="d40Chart">d40 Chart</SelectItem>
            <SelectItem value="d45Chart">d45 Chart</SelectItem>
            <SelectItem value="d60Chart">d60 Chart</SelectItem>
            <SelectItem value="d150Chart">d150 Chart</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TransiteDropdown;
