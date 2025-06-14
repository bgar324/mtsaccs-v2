import React from "react";
import Link from "next/link";

const OfficerAnnouncementBanner: React.FC = () => {
  return (
    <div
      className="bg-[#edd7b4] text-black text-center text-sm md:text-base py-3 px-4 shadow-md w-fit animate-fade-in mt-6 mx-auto rounded-lg"
      role="status"
      aria-live="polite"
    >
      <p className="font-bold">
        🚨 Officer applications ARE OUT! 🚨
      </p>
      <p className="mt-1 font-medium">
        Curious about the roles?{" "}
        <Link
          href="/join-us"
          className="font-semibold underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Learn more on Join Us
        </Link>
        . Or, if you're ready to dive in,&nbsp;
        <Link
          href="/apply"
          className="font-semibold underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          apply now!
        </Link>
      </p>
    </div>
  );
};

export default OfficerAnnouncementBanner;
