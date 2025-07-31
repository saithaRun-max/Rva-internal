import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandShortcut } from "@/components/ui/command";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImCommand } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import searchDocumentation from "./searchDocumentation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsFileEarmark } from "react-icons/bs";

import { searchSuggestions } from "@/lib/searchSuggestionsConstatnt";

export function SearchBarDailog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div
            className={`font-[sans-serif] text-sm   font-medium   text-[#777777] dark:text-white dark:opacity-100   md:visible md:w-64 w-28 border rounded-sm md:py-[6px] py-1    md:pl-4 pl-2 pr-1  h-8  bg-white hover:bg-white visited:bg-white active:bg-white  flex justify-between`}
          >
            <span className="">
              Search<span className="md:hidden lg:hidden">...</span>{" "}
              <span className="hidden md:inline-block lg:inline-block">
                documentation...
              </span>
            </span>
            <div className="rounded border text-xs bg-[#F4F4F5] md:p-[2px]  ">
              <div className="hidden md:inline-flex">
                <ImCommand className="text-sm " />
                <span className=" ml-[2px] "> P</span>
              </div>
              <div className="md:hidden lg:hidden ">
                <AiOutlineSearch className="text-lg " />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[512px] max-h-[350px] p-0   -mt-20 bg-white   ">
          <DialogTitle className="hidden">Search documentation</DialogTitle>
          <div>
            <form>
              <div className="">
                <div className="flex align-middle  pl-2 border-b mx-2  h-12 ">
                  <AiOutlineSearch className="text-xl mt-4" />
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search Calculations"
                    required
                    className="border-none shadow-none h-12 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0"
                  />
                </div>
                <div className="overflow-y-scroll h-[300px] ">
                  {searchSuggestions.map((set, i) => (
                    <div className="" key={i}>
                      <div className="sticky top-0 px-10 bg-white rounded">
                        <p className="text-xs  font-medium leading-12 font-[helvetica] text-[#506176]   ">
                          {set.name}
                        </p>
                      </div>
                      <div>
                        {set?.items?.map((item, i) => (
                          <div
                            key={i}
                            className="flex align-middle   text-[#555557] font-sans px-6"
                          >
                            <div className="h-[46px] w-full hover:bg-[#f0f0f1] rounded-sm flex  px-2 pt-3">
                              <BsFileEarmark size={18} className="" />
                              <p className="ml-3  text-sm font-medium">
                                {item.label}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
      </form>
      <DialogDescription className="hidden">
        {"search for documentaion"}
      </DialogDescription>
    </Dialog>
  );
}
