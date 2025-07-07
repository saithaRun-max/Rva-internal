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
import { useSelector } from "react-redux";

const TransitSection = () => {
  const [name, setName] = useState("");
  const [birthTime, setBirthTime] = useState("10-25-00");
  const [birthLocation, setBirthLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [country, setCountry] = useState("");

  const store = useSelector((store) => store?.cart?.items);

  // console.log(store?.name);

  const userName = store?.name;
  const userbirthTime = store?.birthTime;
  const userCountry = store?.country;
  const userBirthLocation = store?.birthLocation;

  return (
    <div>
      <Select className=" ">
        <SelectTrigger className="border rounded-[4px]  text-[12px] dark:bg-none">
          <SelectValue placeholder="Transit" />
        </SelectTrigger>
        <SelectContent className="shadow-none h-[150px] mt-3">
          <div className="w-[1142px] flex flex-wrap p-4 ">
            <Input
              id="Name"
              type="text"
              autoComplete="off"
              className="h-10 w-[270px] shadow-none rounded-sm  "
              required
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="ml-4">
              <UserCalender />
            </div>

            <Input
              type="time"
              step="1"
              id="birthTime"
              placeholder="Time"
              required
              value={userbirthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="bg-background appearance-none h-10 w-[150px]  [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none shadow-none ml-4 rounded-sm "
            />

            <Input
              id="country"
              type="text"
              placeholder="Country"
              className="h-10 w-[150px] ml-4 rounded-sm  shadow-none"
              required
              value={userCountry}
              onChange={(e) => setCountry(e.target.value)}
            />
 <Input
                id="birthLocation"
                type="text"
                placeholder="Birth Place"
                className="h-10 w-[270px] rounded-sm  ml-4 shadow-none"
                required
                value={userBirthLocation}
                onChange={(e) => setBirthLocation(e.target.value)}
              />
            <div className="mt-4 flex">
              {" "}
             
              <Input
                id="latitude"
                type="number"
                placeholder="Latitude"
                className="h-10 w-[270px] rounded-sm   shadow-none"
                required
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
              <Input
                id="longitude"
                type="number"
                placeholder="Longitude"
                className="h-10 w-[270px] rounded-sm  ml-4 shadow-none"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
              <Input
                id="timeZone"
                type="number"
                placeholder="Time-Zone"
                className="h-10 w-[270px] rounded-sm  ml-4 shadow-none"
                required
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
              />
              <Button className="w-[120px] h-10 ml-4">Submit</Button>
            </div>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TransitSection;
