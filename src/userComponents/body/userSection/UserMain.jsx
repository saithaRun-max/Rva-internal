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

import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addItem } from "@/ReduxStore/slices/cartSlice";

const UserMain = () => {
  const [name, setName] = useState("User");
  const [birthTime, setBirthTime] = useState("10-25-00");
  const [birthLocation, setBirthLocation] = useState("Hyderabad");
  const [country, setCountry] = useState("India");
  const dispatch = useDispatch();

  const handleData = () => {
    dispatch(
      addItem({
        name: name,
        birthTime: birthTime,
        birthLocation: birthLocation,
        country: country,
      })
    );
  };

  return (
    <div className="w-full flex  mt-8 ">
      <Input
        id="Name"
        type="text"
        placeholder="Name"
        autoComplete="off"
        className="h-[40px] w-[270px] shadow-none rounded-sm pl-7 "
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
      <div className="h-10 w-[270px] border rounded-sm  ml-2 shadow-none p-2 pl-3 flex">
        {" "}
        <MdOutlineLocationOn className="text-2xl" />
        <Input
          id="birthLocation"
          type="text"
          placeholder="Birth Place"
          className=" -mt-2 border-none"
          required
          value={birthLocation}
          onChange={(e) => setBirthLocation(e.target.value)}
        />
      </div>
      <div className=" w-[120px] h-10 ml-2 font-[helvetica] text-[14px]  pt-[2px] bg-[#151515] dark:bg-white dark:text-black rounded-sm flex align-middle">
        <Button
          className=" hover:bg-[#151515] dark:bg-white dark:text-black hover:text-white text-white rounded-sm h-full m-0 "
          onClick={handleData}
          key={"123"}
        >
          {"Submit"}{" "}
        </Button>

        <div className="border-1 dark:border-black opacity-60 h-[70%] mt-1"></div>
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild className="">
            <Button
              variant="ghost"
              size="icon"
              className="w-5 hover:bg-[#151515] hover:text-white dark:hover:bg-white dark:text-black text-white ml-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="font-[helvetica] text-lg w-[150px] px-3"
            align="end"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <RiPencilFill />
                <span className="ml-1">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FaCloudDownloadAlt />
                <span className="ml-1">Save</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RiDeleteBin2Fill />
                <span className="ml-1">Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMain;
