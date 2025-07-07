import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaMinus } from "react-icons/fa";

import { HiOutlineMinus } from "react-icons/hi2";

const ProgressionButtons = () => {
  const year = 2025;

  const [counter, setCounter] = useState(year);

  return (
    <div className="flex justify-between w-[360px] font-[helvetica]">
      <div>
        <p className="text-[13px] font-semibold">{"Progression Chart"}</p>
        <pre className="text-[13px] opacity-80 font-[helvetica]">
          DATE - {"02-06-2025"} AGE - {0}
        </pre>
      </div>
      <div>
        <div className="w-[130px] h-10 border rounded-sm flex justify-between">
          <button
            id="decreaseBtn"
            className="w-8  border-r text pl-2"
            onClick={() => setCounter(counter - 1)}
          >
            <HiOutlineMinus />
          </button>
          <div>
            <p className="text-[13px] mt-2">{counter}</p>
          </div>
          <button
            className="w-8  border-l text pl-2"
            id="increaseBtn"
            onClick={() => setCounter(counter + 1)}
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressionButtons;
