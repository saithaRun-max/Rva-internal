import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const SignInIcon = () => {
  return (
    <div>
      <Link href="/login" className="hidden md:inline-block lg:inline-block">
        <div className="h-8 w-[90px] border rounded-full flex  align-middle justify-between px-2">
          <FaRegCircleUser className="text-xl mt-[5px]" />
          <p className="pr-1 mt-[5px] font-[helvetica] text-sm text-[#18181b] ">
            {"Sign in"}
          </p>
        </div>
      </Link>

      <div className="md:hidden lg:hidden">
        <Button
          variant="outline"
          size="icon"
          className="h-[30px] w-[30px] rounded-full border-none bg-none shadow dark:bg-none"
        >
          {" "}
          <FaRegCircleUser className="text-sm" />
        </Button>
      </div>
    </div>
  );
};

export default SignInIcon;
