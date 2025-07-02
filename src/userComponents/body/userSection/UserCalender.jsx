"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function formatDate(date) {
  if (!date) {
    return "Birth Date";
  }
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
}
function isValidDate(date) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

const UserCalender = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState("");
  const [value, setValue] = useState(formatDate(date));

  return (
    <div className="flex  ">
      <div className="flex flex-col gap-3">
        <div className="relative flex gap-2">
          <Input
            id="date"
            value={value}
            placeholder="hh-mm-ss"
            className="bg-background pr-4 h-10 w-[150px] shadow-none rounded-sm text-sm"
            onChange={(e) => {
              const date = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(date)) {
                setDate(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date-picker"
                variant="ghost"
                className="absolute top-5 right-1 size-7 -translate-y-1/2 dark:bg-black dark:text-white"
              >
                <CalendarIcon className="size-3.5" />
                {!date && <span className="sr-only">Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                className="dark:bg-black dark:text-white"
                month={month}
                // animate
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  setValue(formatDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default UserCalender;
