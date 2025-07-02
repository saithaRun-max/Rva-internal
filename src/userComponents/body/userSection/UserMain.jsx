"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import UserCalender from "./UserCalender";
import { ChevronDown, Pencil, Save, Trash2 } from "lucide-react";

const UserMain = () => {
  const [name, setName] = useState("");
  const [birthTime, setBirthTime] = useState("10-25-00");
  const [birthLocation, setBirthLocation] = useState("");
  const [country, setCountry] = useState("");
  return (
    <div className="w-full flex  mt-8 ">
      <Input
        id="Name"
        type="text"
        placeholder="Name"
        autoComplete="off"
        className="h-10 w-[270px] shadow-none rounded-sm pl-7 "
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="ml-2">
        <UserCalender />
      </div>

      <Input
        type="time"
        step="1"
        id="birthTime"
        placeholder="Time"
        required
        value={birthTime}
        onChange={(e) => setBirthTime(e.target.value)}
        className="bg-background appearance-none h-10 w-[150px] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none shadow-none ml-2 rounded-sm "
      />

      <Input
        id="country"
        type="text"
        placeholder="Country"
        className="h-10 w-[150px] ml-2 rounded-sm  shadow-none"
        required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Input
        id="birthLocation"
        type="text"
        placeholder="Birth Place"
        className="h-10 w-[270px] rounded-sm  ml-2 shadow-none"
        required
        value={birthLocation}
        onChange={(e) => setBirthLocation(e.target.value)}
      />
      <div className=" w-[120px] h-10 ml-2 font-[helvetica] text-[14px]  pt-[2px] bg-[#151515] dark:bg-white dark:text-black rounded-sm">
        <Button className=" hover:bg-[#151515] dark:bg-white dark:text-black hover:text-white text-white rounded-sm h-full m-0 w-full ">
          {"Submit"}{" "}
          <div className="border-1 dark:border-black opacity-60 ml-2 h-full"></div>
          <DropdownMenu className=" ">
            <DropdownMenuTrigger asChild className="">
              <Button
                variant="ghost"
                size="icon"
                className="w-5 hover:bg-[#151515] hover:text-white dark:hover:bg-white dark:text-black "
              >
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="font-[helvetica] text-lg w-[150px]"
              align="end"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Pencil />
                  <span className="ml-1">Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Save />
                  <span className="ml-1">Save</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 />
                  <span className="ml-1">Delete</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Button>
      </div>
    </div>
  );
};

export default UserMain;
