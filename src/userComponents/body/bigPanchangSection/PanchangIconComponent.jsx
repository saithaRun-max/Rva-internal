import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

const PanchangIconComponent = ({ icon, name, type }) => {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger className="hover:bg-[#F5F7FD]  rounded  content-center w-15 h-12">
          <div>
            {type == "image" ? (
              <div className="bg-transparent  h-8 w-12 px-2 py-1.5 content-">
                <img src={icon} />
              </div>
            ) : (
              <div className="bg-transparent h-8 w-12 px-2 ">{icon}</div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#383838]">
          <span className="text-sm font-[helvetica]">{name}</span>
        </TooltipContent>
      </Tooltip>

      <div className=" w-16 text-center">
        <span className="text-sm font-[helvetica]">{name}</span>
      </div>
    </div>
  );
};

export default PanchangIconComponent;
