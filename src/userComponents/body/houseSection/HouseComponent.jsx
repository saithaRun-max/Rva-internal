"use client";

import { useEffect, useState } from "react";
import { avargaData } from "@/lib/astakavargaConstants";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HouseComponent = () => {
  // const [stractureData, setStractureData] = useState("");

  // const houseNum = Object.values(avargaData.charts.d1Chart);

  // {
  //   houseNum.map((item, i) => {
  //     const rawItemsData = Object.values(item);

  //     const itemsData = rawItemsData.map((values) => {
  //       const {
  //         signNumber,
  //         text,
  //         houseSymbol,
  //         starHouse,
  //         graha,
  //         isRetrograde,
  //         isRetrograde30,
  //         rashi,
  //         nakshatra,
  //       } = values;

  //       const extractData = {
  //         signNumber: signNumber,
  //         text: text,
  //         houseSymbol: houseSymbol,
  //         starHouse: starHouse,
  //         graha: graha,
  //         isRetrograde: isRetrograde,
  //         isRetrograde30: isRetrograde30,
  //         rashi: rashi,
  //         nakshatra: nakshatra,
  //       };

  //       console.log(extractData);
  //     });
  //   });
  // }

  // console.log(stractureData);

  return (
    <>
      <div>
        <div className="w-[360px] border-[#726f5f] border-[1px]  dark:border-[#ffffff]  object-cover bg-[#ffffdc] dark:bg-[#111318] text-[13px] font-medium font-[helvetica] ">
          <div className="w-[359px] h-[90px]  border-b border-[#726f5f] dark:border-white box-content flex ">
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p className="">
                <span
                  className="wrap-anywhere dark:text-[#f68e8e] text-[#FF0000]  hover:text-[#0F0AF0] "
                  id="roman"
                >
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p className="">
                <span
                  className="wrap-anywhere dark:text-[#f68e8e] text-[#FF0000] hover:text-[#0F0AF0] "
                  id="roman"
                >
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white  text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p className="">
                <span
                  className="wrap-anywhere dark:text-[#f68e8e]  text-[#FF0000] hover:text-[#0F0AF0] "
                  id="roman"
                >
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>

              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="  p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px] ">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>

          <div className="w-[359px] h-[90px] border-[#726f5f] dark:border-white box-content flex ">
            <div className=" border-b border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[89.5px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>

            <div className="border-x border-[#726f5f] dark:border-white p-6 m-0 w-[181px] h-[180px] leading-5">
              <div className="wrap-anywhere p-3">
                <p>Name : {"Admin"}</p>
                <p>Date : {"04-02-2025"}</p>
                <p>Time : {"14:16:05"}</p>
                <p>Latitude : {"14.8"}</p>
                <p>Longitude : {"80.7"}</p>
              </div>
            </div>
            <div className=" border-b border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>

          <div className="w-[359px] h-[90px]  border-b border-[#726f5f] dark:border-white  box-content flex justify-between">
            <div className="  p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px] ">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>

            <div className="  p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>
          <div className="w-[359px] h-[90px]   box-content flex ">
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="border-r border-[#726f5f] dark:border-white p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
            <div className="  p-0.5 pl-1 m-0 w-[90px] h-full leading-[13px]">
              <p>
                <span className="wrap-anywhere dark:text-white text-black hover:text-[#FF1493] ">
                  <Tooltip className="bg-[#7B7B75]">
                    <TooltipTrigger>{"IIV 21:20:19"}</TooltipTrigger>
                    <TooltipContent>
                      {"Ju | Revati-2 | Me | Ju "}
                    </TooltipContent>
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseComponent;
