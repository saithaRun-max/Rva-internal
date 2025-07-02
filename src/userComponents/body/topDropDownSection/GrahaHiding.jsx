"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import React from "react";

// import { Checkbox } from "radix-ui";

const GrahaHiding = () => {
  return (
    <div>
      <Select className="">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Graha Hiding" />
        </SelectTrigger>
        <SelectContent className="shadow-none align-middle">
          <p className=" text-xs">
            {" "}
            <Checkbox className="h-4" />
            {"All"}
          </p>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GrahaHiding;
