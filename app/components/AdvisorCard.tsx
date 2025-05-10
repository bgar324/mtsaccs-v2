import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

interface AdvisorCardProps {
  name: string;
  role: string;
  department?: string;
  imageSrc: string;
  email: string;
  linkedinUrl: string;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({
  name,
  role,
  department,
  imageSrc,
  email,
  linkedinUrl,
}) => {
  return (
    <div
      className="
        flex flex-row
        items-start
        gap-4 p-4 rounded-xl shadow-sm border
        bg-[#FBF5E8]
        w-full
        min-w-0
        overflow-hidden
      "
    >
      <div className="w-16 sm:w-24 h-16 sm:h-24 relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div
        className="
          flex-1
          min-w-0
          flex flex-col
          items-start
          text-left
          gap-1
        "
      >
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-black hover:text-[#a01c2c] transition-colors"
        >
          {name}
        </a>
        <p className="text-sm text-gray-900">
          {role}
          {department ? ` — ${department}` : ""}
        </p>
        <a
          href={`mailto:${email}`}
           className="flex items-center gap-2 text-gray-800 hover:underline text-sm mt-1 break-all"
        >
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </a>
      </div>
    </div>
  );
};

export default AdvisorCard;
