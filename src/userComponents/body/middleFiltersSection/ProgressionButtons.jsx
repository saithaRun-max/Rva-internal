import { Minus } from "lucide-react";
import { useState } from "react";

const ProgressionButtons = () => {
  const year = 2025;

  const [counter, setCounter] = useState(year);

  return (
    <div className="flex justify-between w-[360px] font-[helvetica]">
      <div>
        <p className="text-[13px] font-semibold">{"Progression Chart"}</p>
        <p className="text-sm font-light">
          Date - {"02-07-2025"} <span>{"Age-0"}</span>
        </p>
      </div>
      <div>
        <div className="w-[130px] h-10 border rounded-sm flex justify-between">
          <button
            id="decreaseBtn"
            className="w-8  border-r text pl-2"
            onClick={() => setCounter(counter - 1)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-minus-icon lucide-minus"
              >
                <path d="M5 12h14" />
              </svg>
            </span>
          </button>
          <div>
            <p className="text-[13px] mt-2">{counter}</p>
          </div>
          <button
            className="w-8  border-l text pl-2"
            id="increaseBtn"
            onClick={() => setCounter(counter + 1)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressionButtons;
