"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Language = () => {
  return (
    <div>
      <Select className="" asChild align="end">
        <SelectTrigger className="border rounded-[4px] w-[86px] text-[12px] dark:bg-none">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="shadow-none h-[150px] w-[160px] ">
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Hindi">Hindi</SelectItem>
          <SelectItem value="Tamil">Tamil</SelectItem>
          <SelectItem value="Telugu ">Telugu</SelectItem>
          <SelectItem value="kannada ">Kannada</SelectItem>
          <SelectItem value="malayalam ">Malayalam</SelectItem>
          <SelectItem value="Chimpi ">Chimpi</SelectItem>
          <SelectItem value="Hooo ">HHHHHHHHHHH</SelectItem>
          <SelectItem value="jsjsj ">Roorkey</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
