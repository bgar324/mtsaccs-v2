import React from "react";
import Image from "next/image";

/**
 * ProjectCard component displays a project or presentation with its title, date, image, and link to slides.
 * @param title - The title of the project or presentation
 * @param date - The date when the project was presented
 * @param imageSrc - Path to the project's cover image
 * @param slidesLink - URL to the presentation slides
 */
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
    <article role="listitem" className="w-full mx-auto rounded-xl overflow-hidden shadow-md bg-[#FBF5E8] border border-gray-200 transition" aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
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
        <time dateTime={date} className="text-xs text-gray-500 font-medium mb-1">{date}</time>
        <h2 id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-semibold text-black mb-3 leading-snug">
          {title}
        </h2>
        <a
          href={slidesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1.5 rounded-full bg-[#f8ecd4] hover:bg-[#edd7b4] text-xs text-black transition" aria-label={`View slides for ${title}`}
        >
          View Slides
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
