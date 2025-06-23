"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import UserCalender from "./UserCalender";
import { Button } from "@/components/ui/button";
import UseTimePicker from "./UseTimePicker";

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
        className="h-[41px] w-[270px] shadow-none rounded-sm "
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

      <Button className="w-[120px] h-[41px] ml-2">Submit</Button>
    </div>
  );
};

export default UserMain;
