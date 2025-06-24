"use client";

import React from "react";
import Theme from "./Theme";


const Header = () => {
  return (
    <>
      <div className="w-screen h-14 border border-b box-border ">
        <div className=" min-w-[390px]  max-w-[1210px] mx-auto ">
          <div className="pt-3 ">
        
          <div className="flex align-middle justify-between  ">
            <div className="flex">
              <img
                src="https://app.rahasyavedicastrology.com/_next/static/media/rva.0c5036ce.svg"
                alt="logo"
                className="w-20 h-7"
              />
              <div className="md:flex md:ml-1 lg:ml-1 align-middle mt-1 hidden md:visible">
                <h5 className="text-sm font-medium opacity-50 text-black ">Charts</h5>
                <h5 className="text-sm font-medium opacity-50 text-black ml-8">Graphs</h5>
                <h5 className="text-sm font-medium opacity-50 text-black ml-8">Dasha</h5>
                <h5 className="text-sm font-medium opacity-50 text-black ml-8">
                  KP Tables
                </h5>
                <h5 className="text-sm font-medium opacity-50 text-black ml-8">Aspects</h5>
                <h5 className="text-sm font-medium opacity-50 text-black ml-8">
                  Strength
                </h5>
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
