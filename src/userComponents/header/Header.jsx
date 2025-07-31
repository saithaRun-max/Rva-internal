"use client";

import React from "react";
import Theme from "./Theme";
import { useTheme } from "next-themes";

import Login from "./LoginIcon";
import { useSelector } from "react-redux";
import { rvaLogoDark, rvaLogoLight } from "@/lib/imagesConstants";
import { SearchBarDailog } from "./searchbarDialog";

import gptDailogbox from "./gptDailogbox";
import SignInIcon from "./SignInIcon";
import LoginPage from "./LoginPage";

const Header = () => {
  const { theme } = useTheme();
  // const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="w-screen   h-14  border-b box-border ">
        <div className=" min-w-[440px]  max-w-[1210px] mx-auto ">
          <div className="pt-3   ">
            <div className="flex align-middle justify-between  md:w-full lg:w-full  px-2 ">
              <div className="flex ">
                <img
                  src={theme == "dark" ? rvaLogoDark : rvaLogoLight}
                  alt="logo"
                  className="w-20 h-7"
                />
                <div
                  className={`font-[sans-serif] text-[13px] font-medium opacity-50  text-black dark:text-white dark:opacity-100  md:flex md:ml-1 lg:ml-1 align-middle mt-1 hidden md:visible `}
                >
                  <h5 className="">Charts</h5>
                  <h5 className=" ml-6">Graphs</h5>
                  <h5 className=" ml-6">Dasha</h5>
                  <h5 className=" ml-6">KP Tables</h5>
                  <h5 className=" ml-6">Aspects</h5>
                  <h5 className=" ml-6">Strength</h5>
                </div>
              </div>
              <div className=" flex ">
                <div className="mr-2"></div>
                <div className="mr-2">
                  <SearchBarDailog />
                </div>
                <div className="mr-2">
                  <Theme />
                </div>
                <div className=" ">
                  <LoginPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
