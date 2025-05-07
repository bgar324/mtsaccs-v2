import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        w-full max-w-6xl
        py-3 px-6
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
          width={60}
          height={60}
          alt="Mt. SAC CS Club logo"
        />
      </a>

      <div className="items-center text-center flex flex-row justify-center gap-4 ml-36">
        <a className="hover:bg-gray-700/10 px-4 py-2 rounded-full cursor-pointer transition duration-200 ease-in-out">
          About
        </a>
        <a className="cursor-pointer hover:bg-gray-700/10 px-4 py-2 rounded-full transition duration-200 ease-in-out">
          Events
        </a>
        <a className="cursor-pointer hover:bg-gray-700/10 px-4 py-2 rounded-full transition duration-200 ease-in-out">
          Team
        </a>
        <a className="cursor-pointer hover:bg-gray-700/10 px-4 py-2 rounded-full transition duration-200 ease-in-out">
          Projects
        </a>
      </div>
      <div className="items-center text-center flex flex-row gap-3">
        <a className="cursor-pointer rounded-full px-4 py-2 bg-[#edd7b4] hover:bg-[#f8ecd4] text-sm duration-200 ease-in-out transition">
          Join us!
        </a>
        <a className="cursor-pointer rounded-full px-4 py-2 bg-black/90 hover:bg-gray-100 duration-400 ease-in-out transition text-white hover:text-black text-sm">
          Forms
        </a>
      </div>
    </div>
  );
};

export default Header;
