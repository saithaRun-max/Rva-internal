import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProgressionButtons = () => {
  const year = 2025;
  const [counter, setCounter] = useState(Number(year));

  const handleDecrese = () => {
    const stringFormatYear = counter.toString();

    if (stringFormatYear.length == 4) {
      setCounter(counter - 1);
    } else {
      alert("Enter correct year");
    }
  };

  function handleIncrese() {
    const stringFormatYear = counter.toString();
    if (stringFormatYear.length == 4) {
      setCounter(counter + 1);
    } else {
      alert("Enter correct year");
    }
  }

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
            onClick={handleDecrese}
          >
            <HiOutlineMinus />
          </button>
          <div>
            <Input
              type="number"
              value={counter}
              className="text-[13px]  w-14 h-10 rounded-none border-none shadow-none [&::-webkit-outer-spin-button ] [&::-webkit-inner-spin-button]:appearance-none appearance-none "
              minLength={4}
              maxLength={4}
              onChange={(e) => {
                setCounter(Number(e.target.value));
              }}
            />
          </div>
          <button
            className="w-8  border-l text pl-2 "
            id="increaseBtn"
            onClick={() => handleIncrese()}
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressionButtons;
