"use client";

import React from "react";
import RegisterForm from "./RegisterForm";
import { rvaLogoDark, rvaLogoLight } from "@/lib/imagesConstants";
import { useTheme } from "next-themes";

const page = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[#F5F5F5] h-full w-screen pt-5">
      <div className="flex justify-center ">
        <a href="#" className="flex items-center font-medium">
          <img
            src={theme == "dark" ? rvaLogoDark : rvaLogoLight}
            alt="logo"
            className="w-24 h-7"
          />
        </a>
      </div>
      <div className="pt-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
