import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

/**
 * AdvisorCard component displays information about a faculty advisor including their name, role, department, and contact details.
 * @param name - The advisor's full name
 * @param role - The advisor's role (e.g., Professor)
 * @param department - Optional department name
 * @param imageSrc - Path to the advisor's profile image
 * @param email - Mt. SAC email username (without @mtsac.edu)
 * @param linkedinUrl - URL to the advisor's Mt. SAC profile or LinkedIn
 */
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
    <article
      role="listitem"
      className="
        flex flex-row
        items-start
        gap-4 p-4 rounded-xl shadow-sm border
        bg-[#FBF5E8]
        w-full
        min-w-0
        overflow-hidden
      "
      aria-labelledby={`advisor-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-16 sm:w-24 h-16 sm:h-24 relative flex-shrink-0" aria-hidden="true">
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
          className="text-lg font-semibold text-black hover:text-[#a01c2c] transition-colors" id={`advisor-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span className="hidden sm:inline">{name}</span>
          <span className="sm:hidden">
            {name.split(' ').length > 1
              ? `${name.split(' ')[0]} ${name.split(' ').pop()?.[0]}.`
              : name
            }
          </span>
        </a>
        <p className="text-xs sm:text-sm text-gray-900">
          {role}
          {department ? ` — ${department}` : ""}
        </p>
        <a
          href={`mailto:${email}@mtsac.edu`}
           className="flex items-center gap-2 text-gray-700 hover:underline text-xs sm:text-sm mt-1 break-all" aria-label={`Email ${name} at ${email}@mtsac.edu`}
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>{email}</span>
        </a>
      </div>
    </article>
  );
};

export default AdvisorCard;
