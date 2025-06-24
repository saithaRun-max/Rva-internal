import React from "react";

const AscendentIcon = ({ icon, name }) => {
  return (
    <div className=" flex-col align-middle justify-center ">
      <div className="">
        <button className="bg-transparent ">
          {icon}
        </button>
      </div>
      <div>
        <span className="text-sm -ml-1">{name}</span>
      </div>
    </div>
  );
};

export default AscendentIcon;
