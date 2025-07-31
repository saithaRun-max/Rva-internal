import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HouseMain from "../houseSection/HouseMain";

import { setTransitToggleStatus } from "@/ReduxStore/slices/transitToggleSlice";
import { useDispatch } from "react-redux";

const TransiteDropdown = () => {
  const dispatch = useDispatch();

  const hangleTransitToggle = () => {
    dispatch(setTransitToggleStatus());
  };

  return (
    <div className="h-[40px] flex">
      {" "}
      <div className=" ">
        <Select defaultValue="d1Chart" className="rounded-sm ">
          <SelectTrigger className="w-[297px] py-5 rounded-sm ">
            <SelectValue placeholder="d1 Chart" className="" />
          </SelectTrigger>
          <SelectContent className="h-60">
            <SelectGroup>
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
      <div className="ml-3 mt-2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value="isTransitVisible"
            onChange={() => hangleTransitToggle()}
            className="sr-only peer"
          />
          <div className="relative w-[48px] h-[25px] bg-[#4D4D4D]  rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[21px] after:transition-all dark:border-gray-600 peer-checked:bg-[#19AB27] dark:peer-checked:bg-[#19AB27]"></div>
        </label>
      </div>
    </div>
  );
};

export default TransiteDropdown;
