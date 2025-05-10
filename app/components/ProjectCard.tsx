import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  date: string;
  imageSrc: string;
  slidesLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  imageSrc,
  slidesLink,
}) => {
  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden shadow-md bg-[#FBF5E8] border border-gray-200 transition">
      <div className="pt-2 px-2">
        <div className="relative w-full h-36 sm:h-44 md:h-48">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xs text-gray-500 font-medium mb-1">{date}</h3>
        <h2 className="text-base font-semibold text-black mb-3 leading-snug">
          {title}
        </h2>
        <a
          href={slidesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1.5 rounded-full bg-[#f8ecd4] hover:bg-[#edd7b4] text-xs text-black transition"
        >
          View Slides
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
