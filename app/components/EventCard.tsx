import React from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

interface EventCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string; // e.g. "28 September"
  location: string;
  time: string;
  rsvpUrl: string;
  imageHeight?: string;
  imagePosition?: string;
  isArchived?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  location,
  time,
  rsvpUrl,
  imageHeight,
  imagePosition,
  isArchived = false,
}) => {
  const [day, ...monthArr] = date.split(" ");
  const month = monthArr.join(" ");

  return (
    <div className="w-full bg-[#f8ecd4] rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className={`hidden md:block relative w-full ${imageHeight || "h-72"}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover object-[center_5%] ${imagePosition || ""}`}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="mb-2">
          <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
          <p className="text-xs md:text-sm text-gray-800 mb-4">{description}</p>
        </div>
        <div className="flex items-center mb-4 justify-around">
          <div className="pr-4 text-center">
            <p className="text-xs md:text-sm uppercase">{month}</p>
            <p className="text-2xl md:text-4xl font-medium">{day}</p>
          </div>
          <div className="flex flex-col justify-center text-sm text-gray-6=700 space-y-1">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{time}</span>
            </div>
          </div>
        </div>
          {isArchived ? (
            <div className="py-2 border border-gray-400 rounded text-sm font-medium text-center text-gray-500 bg-gray-100 cursor-not-allowed">
              Event Ended
            </div>
          ) : (
            <a
              href={rsvpUrl}
              className="py-2 border border-gray-400 rounded text-sm font-medium text-center bg-[#f8ecd4] hover:bg-[#edd7b4] duration-400 ease-in-out transition"
            >
              RSVP
            </a>
          )}
      </div>
    </div>
  );
};

export default EventCard;
