import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent px-3">
      <div className="mx-auto max-w-6xl bg-[#f8ecd4]/90 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg py-2 px-4 flex items-center justify-between mt-2">
        {/* Content here */}
        <a href="/" className="cursor-pointer">
          <Image
            src="/static/logo.svg"
            width={50}
            height={50}
            alt="Mt. SAC CS Club logo"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 mx-auto text-sm pl-20">
            <a
              className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out"
              href="/about"
            >
              About
            </a>
            <a
              className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out"
              href="/events"
            >
              Events
            </a>
            <a
              className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out"
              href="/team"
            >
              Team
            </a>
            <a
              className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out"
              href="/projects"
            >
              Projects
            </a>
          </div>
          <a
            className="cursor-pointer rounded-full px-4 py-2 bg-[#edd7b4] hover:bg-[#f8ecd4] text-sm duration-200 ease-in-out transition"
            href="/join-us"
          >
            Join us!
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pt-2 md:pt-0">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full h-3/4 bg-[#f8ecd4] p-0 overflow-y-auto rounded-b-lg"
            >
              <div className="flex flex-col items-center w-full h-full">
                <DialogTitle className="sr-only">
                  Mobile navigation menu
                </DialogTitle>
                {/* CS Seal Image */}
                <a className="w-full flex justify-center py-8 bg-transparent" href = "/">
                  <Image
                    src="/static/gray_cs_seal.png"
                    alt="CS Club Seal"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </a>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 gap-4 w-full flex-grow p-4">
                  <a
                    href="/about"
                    className="text-lg rounded-xl transition duration-200 ease-in-out text-center flex items-center justify-center bg-[#edd7b4]/50"
                  >
                    About
                  </a>
                  <a
                    href="/events"
                    className="text-lg rounded-xl transition duration-200 ease-in-out text-center flex items-center justify-center bg-[#edd7b4]/50"
                  >
                    Events
                  </a>
                  <a
                    href="/team"
                    className="text-lg rounded-xl transition duration-200 ease-in-out text-center flex items-center justify-center bg-[#edd7b4]/50"
                  >
                    Team
                  </a>
                  <a
                    href="/projects"
                    className="text-lg rounded-xl transition duration-200 ease-in-out text-center flex items-center justify-center bg-[#edd7b4]/50" 
                  >
                    Projects
                  </a>
                </div>

                {/* Join Us Button */}
                <div className="w-full px-6 pb-8">
                  <a
                    href="/join-us"
                    className="block w-full text-lg rounded-xl px-4 py-4 bg-[#edd7b4] transition duration-200 ease-in-out text-center"
                  >
                    Join us!
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
