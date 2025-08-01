import React from "react";
 import Link from "next/link";
 
 interface AnnouncementBannerProps {
   season: 'fall' | 'spring';
   applicationsClosed?: boolean;
 }
 
 const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
   season,
   applicationsClosed = true
 }) => {
   const seasonText = season === 'fall' ? 'fall semester' : 'spring semester';
   const breakText =
     season === 'fall'
       ? 'enjoy the summer! ☀️'
       : 'enjoy the winter! ☃️';
 
   return (
     <div
       className=" backdrop-filter backdrop-blur-lg text-black text-center text-sm md:text-base py-3 px-4 shadow-lg border border-gray-300 rounded-lg w-fit animate-fade-in mb-6 mx-auto"
       role="status"
       aria-live="polite"
     >
       <p className="font-base">
         📅 Check back during the <span className="underline">{seasonText}</span> for events. Our officers are currently out of office — {breakText}
       </p>
       {!applicationsClosed && (
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
       )}
     </div>
   );
 };
 
 export default AnnouncementBanner;