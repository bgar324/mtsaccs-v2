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
}) => {
  const [day, ...monthArr] = date.split(" ");
  const month = monthArr.join(" ");

  return (
    <div className="w-1/3 bg-[#f8ecd4] rounded-lg overflow-hidden shadow-md m-2 flex flex-col">
      <div className={`relative w-full ${imageHeight || "h-48"}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ${imagePosition || "object-center"}`}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-800 mb-4">{description}</p>
        </div>
        <div className="flex items-center mb-4 justify-around">
          <div className="pr-4 text-center">
            <p className="text-sm uppercase">{month}</p>
            <p className="text-4xl font-medium">{day}</p>
          </div>
          <div className="flex flex-col justify-center text-sm text-gray-600 space-y-1">
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
        <div className="flex flex-row gap-4">
          <a
            href={rsvpUrl}
            className="block w-5/8 py-2 border border-gray-400 rounded text-sm font-medium text-center bg-[#f8ecd4] hover:bg-[#edd7b4] duration-400 ease-in-out transition"
          >
            RSVP
          </a>
          <a
            href={rsvpUrl}
            className="block w-3/8 py-2 border border-gray-400 rounded font-medium text-center bg-black/90 hover:bg-gray-100 duration-400 ease-in-out transition text-white hover:text-black text-sm"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
