import React from "react";

const PanchangIconComponent = ({ icon, name, type }) => {
  return (
    <div className=" ">
      {type == "image" ? (
        <div className="bg-transparent h-10 w-12 px-2 py-1.5">
          <img src={icon} />
        </div>
      ) : (
        <div className="bg-transparent h-10 w-12 px-2 py-1.5">{icon}</div>
      )}

      <div className="mt-2 w-16 text-center">
        <span className="text-sm font-[helvetica]">{name}</span>
      </div>
    </div>
  );
};

export default PanchangIconComponent;
