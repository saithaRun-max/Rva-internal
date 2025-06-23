"use client";


import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <>
      <div className="h-16 lg:xl:px-44 px-10 sm:md:px-10 w-full min-w-[420px] mx-auto pt-4 border border-b-2">
        <div className="flex align-middle justify-between max-w-[1170px] ">
          <div className="flex">
            <img
              src="https://app.rahasyavedicastrology.com/_next/static/media/rva.0c5036ce.svg"
              alt="logo"
              className="w-20 h-7"
            />
            <div className="md:flex md:ml-5 lg:ml-5 align-middle mt-1 hidden md:visible">
              <h5 className="text-sm font-medium text-black ">Charts</h5>
              <h5 className="text-sm font-medium text-black ml-8">Graphs</h5>
              <h5 className="text-sm font-medium text-black ml-8">Dasha</h5>
              <h5 className="text-sm font-medium text-black ml-8">KP Tables</h5>
              <h5 className="text-sm font-medium text-black ml-8">Aspects</h5>
              <h5 className="text-sm font-medium text-black ml-8">Strength</h5>
            </div>
          </div>
          <div className="-mt-1">
            <Theme />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
