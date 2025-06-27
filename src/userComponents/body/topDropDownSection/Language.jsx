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
      <Select className="h-">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Hindi">Hindi</SelectItem>
          <SelectItem value="Tamil">Tamil</SelectItem>
          <SelectItem value="Telugu " >
            Telugu
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Language;
