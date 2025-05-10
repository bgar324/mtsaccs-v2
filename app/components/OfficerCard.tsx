import React from "react";
import Image from "next/image";
import { DiscordIcon } from "../Icons";

/**
 * OfficerCard component displays information about a student officer including their name, role, and social links.
 * @param name - The officer's full name
 * @param role - The officer's role in the club (e.g., President)
 * @param imageSrc - Path to the officer's profile image
 * @param discordUsername - Officer's Discord username for contact
 * @param linkedinUrl - URL to the officer's LinkedIn profile
 */
interface OfficerCardProps {
  name: string;
  role: string;
  imageSrc: string;
  discordUsername: string;
  linkedinUrl: string;
}

const OfficerCard: React.FC<OfficerCardProps> = ({
  name,
  role,
  imageSrc,
  discordUsername,
  linkedinUrl,
}) => {
  return (
    <article
      role="listitem"
      className="flex items-center md:items-start gap-4 p-4 rounded-xl shadow-sm border bg-[#FBF5E8] w-full max-w-md overflow-hidden"
      aria-labelledby={`officer-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-24 h-24 relative flex-shrink-0" aria-hidden="true">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start text-center md:text-left gap-1 mt-2">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-black hover:text-[#0A66C2] transition-colors" id={`officer-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span className="hidden md:inline">{name}</span>
          <span className="md:hidden">
            {name.split(' ').length > 1
              ? `${name.split(' ')[0]} ${name.split(' ').pop()?.[0]}.`
              : name
            }
          </span>
        </a>
        <p className="text-xs md:text-sm text-gray-900">{role}</p>
        <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm mt-1" aria-label={`Discord username: ${discordUsername}`}>
          <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-[#738ADB]" aria-hidden="true" />
          <span>{discordUsername}</span>
        </div>
      </div>
    </article>
  );
};

export default OfficerCard;
