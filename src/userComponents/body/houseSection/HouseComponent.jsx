"use client";

import { useEffect, useState } from "react";
import { avargaData } from "@/lib/astakavargaConstants";

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
        <div className="w-[360px] border border-black  object-cover ">
          <div className="w-[360px] h-[90px]  border-b border-gray-900 dark:border-gray-700 box-content flex ">
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere ">12</span>
            </div>
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">{"1"}</span>
            </div>
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">{"2"}</span>
            </div>
            <div className=" border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">{"3"}</span>
            </div>
          </div>

          <div className="w-[360px] h-[90px] border-gray-900 dark:border-gray-700 box-content flex ">
            <div className=" border-b border-gray-900 px-0.5 pl-1 m-0 w-[89px] h-full ">
              <span className="wrap-anywhere">11</span>
            </div>

            <div className="border-x border-gray-900 p-2 m-0 w-[181px] h-[180px] ">
              <span className="wrap-anywhere">Name</span>
            </div>
            <div className=" border-b border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">4</span>
            </div>
          </div>

          <div className="w-[360px] h-[90px]  border-b border-gray-900 dark:border-gray-700 box-content flex justify-between">
            <div className=" border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">10</span>
            </div>

            <div className=" border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">5</span>
            </div>
          </div>
          <div className="w-[360px] h-[90px]  border-gray-900 dark:border-gray-700 box-content flex ">
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">9</span>
            </div>
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">8</span>
            </div>
            <div className="border-r border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">7</span>
            </div>
            <div className=" border-gray-900 px-0.5 pl-1 m-0 w-[90px] h-full ">
              <span className="wrap-anywhere">6</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseComponent;
