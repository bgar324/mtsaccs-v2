"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Event = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  rsvpUrl: string;
};

const upcomingEvents: Event[] = [
  {
    id: "9",
    imageSrc: "/static/events/cs ebcc event.png",
    title: "EBCC-1 Event",
    description:
      "Join us for an exciting hands-on workshop building electrical bluetooth controlled cars!",
    date: "Apr. 25",
    time: "3:00 PM - 7:00 PM",
    location: "Building 60, Room 1620 & 1628",
    rsvpUrl: "https://forms.gle/RRSre4LhTXs2kPH38",
  },
  {
    id: "5",
    imageSrc: "/static/events/cs club stem flyer.png",
    title: "STEMForOthers Project Opportunity",
    description:
      "Get involved in meaningful STEM projects that make a difference in our community.",
    date: "Spring Fall to",
    time: "-",
    location: "Various Locations",
    rsvpUrl: "https://forms.gle/UwmMgbQhD57Zou386",
  },
];

const pastEvents = [
  {
    id: "6",
    imageSrc: "/static/events/smacs.png",
    title: "Hackathon Prep (SMACS)",
    description:
      "Learn essential skills and strategies to excel in hackathons.",
    date: "23 October",
    time: "-",
    location: "Building 60, Room 1506",
    rsvpUrl: "https://smacs.vercel.app/",
  },
  {
    id: "3",
    imageSrc: "/static/events/Women_of_Color_in_STEM.png",
    title: "Women of Color in STEM",
    description:
      "Celebrating diversity and empowering women of color in STEM fields.",
    date: "29 October",
    time: "2:30 PM - 5:00 PM",
    location: "The Summit",
    rsvpUrl: "https://example.com/register/hackathon",
  },
  {
    id: "2",
    imageSrc: "/static/events/cscclubgameflyerv2.png",
    title: "Game Night",
    description:
      "Join us for a fun night of gaming and networking with fellow CS enthusiasts!",
    date: "30 October",
    time: "4:00 - 7:00 PM",
    location: "Founders Hall",
    rsvpUrl: "https://example.com/register/hackathon",
  },
  {
    id: "4",
    imageSrc: "/static/events/Nov_2024_MESA_Guest_Speaker_Jim_Herold.jpg",
    title: "Jim Herold Guest Speaker",
    description:
      "Insightful talk from industry expert Jim Herold about careers in tech.",
    date: "1 November",
    time: "10 AM",
    location: "Building 61, Room 2316",
    rsvpUrl:
      "https://forms.office.com/pages/responsepage.aspx?id=8ktNzJ4KQEKu3qfR1oj5NfaMcBznXHtFpUoFBwrvxcZURDZDNkdOSFlWSzRSVFVJQTFNTzY3TEJaSy4u&origin=QRCode&route=shorturl",
  },
  {
    id: "1",
    imageSrc: "/static/events/cs_food_bank_flyer.png",
    title: "Food Bank",
    description:
      "Give back to the community by volunteering at the local food bank.",
    date: "2 November",
    time: "9:00 AM - 1:00 PM",
    location: "LA Regional Food Bank",
    rsvpUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform",
  },
  {
    id: "7",
    imageSrc: "/static/events/mtysacuclav932.png",
    title: "UCLA + Break Through Tech AI Program Info Session",
    description:
      "Learn about exciting opportunities with UCLA and Break Through Tech AI Program.",
    date: "3 December",
    time: "4:30 PM - 6:00 PM",
    location: "Founders Hall",
    rsvpUrl: "https://smacs.vercel.app/",
  },
  {
    id: "8",
    imageSrc: "/static/events/cs mentorship.png",
    title: "Virtual Mentorship Mixer",
    description:
      "Connect with experienced mentors in a virtual setting to get guidance on your academic and career journey.",
    date: "13 March",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual",
    rsvpUrl: "https://lu.ma/vfidevu9",
  },
];

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/gallery/IMG_5434.jpg"
          alt="Header"
          fill
          className="object-cover object-[center_40%] brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
        <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
          <h1 className="font-garamond text-4xl md:text-5xl lg:text-6x font-thin mb-4 text-white">
            Events & Workshops
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white">
            From circuit builds to speaker panels, every event is a chance to
            learn, connect, and create. No experience needed.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>
      <section className="w-full p-6 md:p-12 flex flex-col">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl mb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 xl:px-36">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              imageSrc={event.imageSrc}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              rsvpUrl={event.rsvpUrl}
            />
          ))}
        </div>
      </section>

      <section className="w-full p-6 md:p-12 flex flex-col bg-[#edd7b4]">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl mb-8">
          Past Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 xl:px-36">
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              imageSrc={event.imageSrc}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              rsvpUrl={event.rsvpUrl}
              isArchived={true}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
