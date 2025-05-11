import React from "react";
import Image from "next/image";
import { GithubIcon, DiscordIcon, InstagramIcon } from "../Icons";

/**
 * Footer component displays site-wide navigation, contact information, and social links.
 * Includes copyright notice, developer attribution, and quick access to important pages.
 */
const Footer = () => {
  return (
    <footer
      className="bg-[#D5C2A2] w-full text-sm text-black px-6 py-10"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo + Text */}
          <div className="flex gap-4 items-start">
            <Image
              src="/static/gray_cs_seal.png"
              width={48}
              height={48}
              alt="Mt. SAC Computer Science Club Logo"
              aria-hidden="true"
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
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Visit Benjamin Garcia's LinkedIn profile"
                >
                  Benjamin Garcia
                </a>
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer Navigation">
            <ul
              className="flex flex-wrap gap-6 items-center text-sm font-medium"
              role="list"
            >
              <li>
                <a
                  href="/about"
                  className="hover:underline"
                  aria-label="Learn more about our club"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:underline"
                  aria-label="View our upcoming events"
                  rel="noopener noreferrer"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:underline"
                  aria-label="Meet our team members"
                  rel="noopener noreferrer"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:underline"
                  aria-label="Explore our projects"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/join-us"
                  className="hover:underline"
                  aria-label="Join our club"
                  rel="noopener noreferrer"
                >
                  Join us!
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxLfb-J6ADbh93Nr3JSLsZD2LtCp9Y7zVORY5YkhY4QY6fgA/viewform"
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  Mailing list
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-black/20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col md:flex-row items-center text-center gap-2 md:gap-4">
            <p>© 2025 Mt. SAC Computer Science Club. All rights reserved.</p>
            <p>
              Contact us at:
              <a
                href="mailto:mtsac.csclub@gmail.com"
                aria-label="Send us an email"
                className="hover:text-blue-700 ml-1 hover:underline"
              >
                mtsac.csclub@gmail.com
              </a>
            </p>
          </div>
          <div
            className="flex space-x-4"
            role="list"
            aria-label="Social Media Links"
          >
            <a
              href="https://v1.mtsaccs.org"
              className="hover:text-yellow-600"
              aria-label="Visit our previous website version"
            >
              v1
            </a>
            <a
              href="https://github.com/mtsac-cs"
              className="hover:text-white"
              aria-label="Visit our GitHub organization"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://discord.com/invite/sWpjfHVuuT"
              aria-label="Join our Discord community"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              <DiscordIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/cs.mtsac/"
              aria-label="Follow us on Instagram"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              <InstagramIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
