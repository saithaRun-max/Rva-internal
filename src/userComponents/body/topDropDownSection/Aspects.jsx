"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Aspects = () => {
  return (
    <div>
      <Select className="">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Aspects" />
        </SelectTrigger>
        <SelectContent className="shadow-none flex-none">
          {/* <SelectItem>
            {" "}<span>  <Checkbox id="progression" checked="true" /></span>
          <span>Progression</span>
            
          </SelectItem>
          <SelectItem>
            <span> <Checkbox id="transit" checked="true" /></span>
           
            <span>Transit</span>
          </SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Aspects;
