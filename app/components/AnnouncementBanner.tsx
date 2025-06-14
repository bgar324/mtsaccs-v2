import React from "react";
import Link from "next/link";

/**
 * AnnouncementBanner – Displays a seasonal notification site-wide.
 * Styled to match the club's warm beige palette and typography.
 */
const AnnouncementBanner: React.FC = () => {
  return (
    <div
      className=" bg-[#edd7b4] text-black text-center text-sm md:text-base py-3 px-4 shadow-md w-fit animate-fade-in mb-6 mx-auto rounded-lg"
      role="status"
      aria-live="polite"
    >
      <p className="font-medium">
        📅 Check back during the <span className="underline">fall semester</span> for events. Our officers are currently out of office — enjoy the summer! ☀️
      </p>
      <p className="mt-1">
        Interested in planning events?&nbsp;
        <Link
          href="/join-us"
          className="font-semibold underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Apply for an officer position
        </Link>
        !
      </p>
    </div>
  );
};

export default AnnouncementBanner;
