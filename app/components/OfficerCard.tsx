import React from "react";
import Image from "next/image";
import { DiscordIcon } from "../Icons";

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
    <div
      className="flex items-center md:items-start gap-4 p-4 rounded-xl shadow-sm border bg-[#FBF5E8] w-full max-w-md overflow-hidden"
    >
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start text-center md:text-left gap-1 mt-2 break-all">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-black hover:text-[#0A66C2] transition-colors"
        >
          <span className="hidden sm:inline">{name}</span>
          <span className="sm:hidden">
            {name.split(' ').length > 1
              ? `${name.split(' ')[0]} ${name.split(' ').pop()?.[0]}.`
              : name
            }
          </span>
        </a>
        <p className="text-xs sm:text-sm text-gray-900">{role}</p>
        <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm mt-1">
          <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-[#738ADB]" />
          <span>{discordUsername}</span>
        </div>
      </div>
    </div>
  );
};

export default OfficerCard;
