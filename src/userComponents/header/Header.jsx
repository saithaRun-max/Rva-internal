"use client";

import React from "react";
import Theme from "./Theme";
import { useTheme } from "next-themes";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-screen h-14 border border-b box-border ">
        <div className=" min-w-[390px]  max-w-[1210px] mx-auto ">
          <div className="pt-3 ">
            <div className="flex align-middle justify-between  ">
              <div className="flex">
                <img
                  src={
                    theme == "dark"
                      ? "https://app.rahasyavedicastrology.com/_next/static/media/rva-dark.1324b70c.svg"
                      : "https://app.rahasyavedicastrology.com/_next/static/media/rva.0c5036ce.svg"
                  }
                  alt="logo"
                  className="w-20 h-7"
                />
                <div
                  className={`font-[sans-serif] text-[13px] font-medium opacity-50  text-black dark:text-white dark:opacity-100  md:flex md:ml-1 lg:ml-1   align-middle mt-1 hidden md:visible `}
                >
                  <h5 className="">Charts</h5>
                  <h5 className=" ml-8">Graphs</h5>
                  <h5 className=" ml-8">Dasha</h5>
                  <h5 className=" ml-8">KP Tables</h5>
                  <h5 className=" ml-8">Aspects</h5>
                  <h5 className=" ml-8">Strength</h5>
                </div>
              </div>
              <div className="-mt-1">
                <Theme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
