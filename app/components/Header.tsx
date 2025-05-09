import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="
        fixed top-3 left-1/2 transform -translate-x-1/2
        w-full max-w-6xl
        py-2 px-6
        flex items-center justify-between
        border border-gray-300
        bg-[#f8ecd4]/90
        rounded-xl shadow-lg 
        z-50
      "
      style={{ backdropFilter: "blur(8px)" }}
    >
      <a href="/" className="cursor-pointer">
        <Image
          src="/static/logo.svg"
          width={50}
          height={50}
          alt="Mt. SAC CS Club logo"
        />
      </a>

      <div className="items-center text-center flex flex-row justify-center gap-4 text-sm ml-20">
        <a
          className="hover:bg-gray-700/10 px-3 py-1 rounded-full cursor-pointer transition duration-200 ease-in-out"
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
        <a className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out" href = "/team">
          Team
        </a>
        <a className="cursor-pointer hover:bg-gray-700/10 px-3 py-1 rounded-full transition duration-200 ease-in-out" href = "/projects">
          Projects
        </a>
      </div>
      <a className="cursor-pointer rounded-full px-4 py-2 bg-[#edd7b4] hover:bg-[#f8ecd4] text-sm duration-200 ease-in-out transition" href = "/join-us">
        Join us!
      </a>
    </div>
  );
};

export default Header;
