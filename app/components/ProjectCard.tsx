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
    <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-md bg-[#FBF5E8] border border-gray-200 transition">
      <div className="pt-2 px-2">
        <div className="relative h-48 w-full ">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-sm text-gray-500 font-medium mb-1">{date}</h3>
        <h2 className="text-lg font-semibold text-black mb-4 leading-snug">
          {title}
        </h2>
        <a
          href={slidesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-full bg-[#f8ecd4] hover:bg-[#edd7b4] text-sm text-black transition"
        >
          View Slides
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
