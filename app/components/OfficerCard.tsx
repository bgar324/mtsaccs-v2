// components/OfficerCard.tsx
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
    <div className="flex items-center gap-6 p-6 rounded-xl shadow-sm border bg-[#FBF5E8] w-full max-w-md">
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-black hover:text-[#0A66C2] transition-colors"
        >
          {name}
        </a>
        <p className="text-sm text-gray-900">{role}</p>
        <div className="flex items-center gap-2 text-gray-800 text-sm mt-2">
          <DiscordIcon
            width={16}
            height={16}
            className="w-5 h-5 fill-[#738ADB]"
          />
          <span>{discordUsername}</span>
        </div>
      </div>
    </div>
  );
};

export default OfficerCard;
