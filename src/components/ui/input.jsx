import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground dark:placeholder:text-white placeholder:font-[helvetica] font-[helvetica] placeholder:text-sm selection:bg-primary selection:text-primary-foreground border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-[13px] placeholder:text-[13px]  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
       
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-[lightgray] dark:border-[#2b2f3c]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
