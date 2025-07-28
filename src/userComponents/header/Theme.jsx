"use client";
import React from "react";

import { Moon, Sun, SunIcon, SunMedium } from "lucide-react";
import { IoMoonSharp } from "react-icons/io5";
import { HiMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { sunSvg, moonSvg } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme == "dark" ? (
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-none dark:bg-none"
          icon={Sun}
          onClick={() => setTheme("light")}
        >
          <FiSun />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="h-[30px] w-[30px] rounded-full border-none bg-none shadow dark:bg-none"
          onClick={() => setTheme("dark")}
        >
          <IoMoonSharp />
        </Button>
      )}
    </div>
  );
};

export default Theme;
