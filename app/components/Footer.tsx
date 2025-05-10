import React from "react";
import Image from "next/image";
import { GithubIcon, DiscordIcon, InstagramIcon } from "../Icons";

const Footer = () => {
  return (
    <footer className="bg-[#D5C2A2] w-full text-sm text-black px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo + Text */}
          <div className="flex gap-4 items-start">
            <Image
              src="/static/gray_cs_seal.png"
              width={48}
              height={48}
              alt="CS Club Seal"
              className="shrink-0"
            />
            <div>
              <p className="font-garamond text-lg font-thin">
                Mt. SAC Computer Science Club
              </p>
              <p className="mt-1 text-xs">
                Made with ❤️,{" "}
                <a
                  className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
                  href="https://linkedin.com/in/btgarcia05"
                  target="_blank"
                >
                  Benjamin Garcia
                </a>
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap gap-6 items-center text-sm font-medium">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/team" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/join-us" className="hover:underline">
                Join us!
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScxLfb-J6ADbh93Nr3JSLsZD2LtCp9Y7zVORY5YkhY4QY6fgA/viewform"
                className="hover:underline"
              >
                Mailing list
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-black/20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 Mt. SAC Computer Science Club. All rights reserved.</p>
            <p>
              Contact us at:
              <a
                href="mailto:mtsac.csclub@gmail.com"
                className="hover:text-blue-700 ml-1 hover:underline"
              >
                mtsac.csclub@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
          <a href="https://v1.mtsaccs.org" className="hover:text-yellow-600">
              v1
            </a>
            <a href="https://github.com/mtsac-cs" className="hover:text-white">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com/invite/sWpjfHVuuT"
              className="hover:text-white"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/cs.mtsac/"
              className="hover:text-white"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
