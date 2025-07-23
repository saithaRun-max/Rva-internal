"use client";

import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import { rvaLogoDark, rvaLogoLight } from "@/lib/imagesConstants";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const { theme } = useTheme();
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <img
            src={theme == "dark" ? rvaLogoDark : rvaLogoLight}
            alt="logo"
            className="w-24 h-7"
          />
        
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
