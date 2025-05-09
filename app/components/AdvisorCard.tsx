// components/AdvisorCard.tsx
import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

interface AdvisorCardProps {
  name: string;
  role: string;
  imageSrc: string;
  email: string;
  linkedinUrl: string;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({
  name,
  role,
  imageSrc,
  email,
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
          className="text-lg font-semibold text-black hover:text-[#a01c2c] transition-colors"
        >
          {name}
        </a>
        <p className="text-sm text-gray-900">{role}</p>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-gray-800 hover:underline text-sm mt-2 cursor-pointer transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>{email}</span>
        </a>
      </div>
    </div>
  );
};

export default AdvisorCard;
