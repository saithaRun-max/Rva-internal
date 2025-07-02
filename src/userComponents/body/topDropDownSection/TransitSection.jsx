"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import UserCalender from "../userSection/UserCalender";
import { Button } from "@/components/ui/button";

const TransitSection = () => {
  const [name, setName] = useState("");
  const [birthTime, setBirthTime] = useState("10-25-00");
  const [birthLocation, setBirthLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div>
      <Select className=" ">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Transit" />
        </SelectTrigger>
        <SelectContent className="shadow-none h-[150px] mt-3">
          <div className="w-[1142px] flex flex-wrap ">
            <Input
              id="Name"
              type="text"
              // placeholder="Name"
              autoComplete="off"
              className=" w-[270px] shadow-none rounded-sm pl-7 peer h-12 pt-6 placeholder-transparent "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Name
            </label>
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
              className="bg-background appearance-none h-[41px] w-[150px] [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none shadow-none ml-2 rounded-sm "
            />

            <Input
              id="country"
              type="text"
              placeholder="Country"
              className="h-[41px] w-[150px] ml-2 rounded-sm  shadow-none"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Input
              id="birthLocation"
              type="text"
              placeholder="Birth Place"
              className="h-[41px] w-[270px] rounded-sm  ml-2 shadow-none"
              required
              value={birthLocation}
              onChange={(e) => setBirthLocation(e.target.value)}
            />
            <Input
              id="latitude"
              type="number"
              placeholder="Latitude"
              className="h-[41px] w-[270px] rounded-sm  ml-2 shadow-none"
              required
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <Input
              id="longitude"
              type="number"
              placeholder="Longitude"
              className="h-[41px] w-[270px] rounded-sm  ml-2 shadow-none"
              required
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
            <Input
              id="timeZone"
              type="number"
              placeholder="Time-Zone"
              className="h-[41px] w-[270px] rounded-sm  ml-2 shadow-none"
              required
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            />

            <Button className="w-[120px] h-[41px] ml-2">Submit</Button>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TransitSection;
