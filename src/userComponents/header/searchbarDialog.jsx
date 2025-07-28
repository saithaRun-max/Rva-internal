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

export function SearchBarDailog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div
            className={`font-[sans-serif] text-sm font-medium   text-[#777777] dark:text-white dark:opacity-100   md:visible w-64 border rounded-sm py-[6px] pl-4 pr-2 h-8  bg-white hover:bg-white visited:bg-white active:bg-white  flex justify-between`}
          >
            <span>Search documentation...</span>
            <span>⌘P</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[512px] max-h-[350px] p-0 -mt-20 ">
          <div>
            <form>
              <div className="">
                <div className="">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="border-none"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
