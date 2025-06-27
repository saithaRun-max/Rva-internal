"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Ayanmasha = () => {
  return (
    <div>
      <Select className="">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Ayanmasha" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectItem value="Lahari">Lahari</SelectItem>
          <SelectItem value="KP">KP</SelectItem>
          <SelectItem value="KPNew" >
            KP New
          </SelectItem>
          <SelectItem value="KpKjullar ">Kp Khullar</SelectItem>
          <SelectItem value="KpKStrightLine ">Kp Stright Line</SelectItem>
          <SelectItem value="yukteshwar ">Yukteshwar</SelectItem>
          <SelectItem value="raman ">Raman</SelectItem>
          <SelectItem value="jnBhusin ">Jn Bhuasin</SelectItem>
          <SelectItem value="faganBradly ">Fagan Bradly</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Ayanmasha;
