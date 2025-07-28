import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const SignInIcon = () => {
  return (
    <div>
      <Link href="/login">
        <div className="h-8 w-[90px] border rounded-full flex  align-middle justify-between px-2">
          <FaRegCircleUser className="text-xl mt-[5px]" />
          <p className="pr-1 mt-[5px] font-[helvetica] text-sm text-[#18181b]">
            {"Sign in"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SignInIcon;
