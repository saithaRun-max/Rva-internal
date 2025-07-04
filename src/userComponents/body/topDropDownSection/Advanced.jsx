import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Advanced = () => {
  return (
    <div>
      <Select  className="">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Advanced" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          {/* <SelectItem value="northIndian">North Indian</SelectItem>
          <SelectItem value="southIndian">South Indian</SelectItem>
          <SelectItem value="eastIndian">East Indian</SelectItem> */}
          
        </SelectContent>
      </Select>
    </div>
  );
};

export default Advanced;
