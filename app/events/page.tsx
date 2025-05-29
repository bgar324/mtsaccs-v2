import React from "react";
import { ChevronDown } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Events & Workshops | Mt. SAC Computer Science Club",
  description:
    "Join Mt. SAC CS Club's workshops, tech talks, and community events. From circuit builds to speaker panels, we offer hands-on learning experiences for all skill levels.",
  keywords:
    "Mt. SAC CS Club events, computer science workshops, tech talks, student events, STEM activities, hackathons, coding workshops, Mt. San Antonio College",
  openGraph: {
    title: "Events & Workshops | Mt. SAC Computer Science Club",
    description:
      "Join our hands-on workshops, tech talks, and community events. No experience needed - just bring your curiosity!",
    images: [
      {
        url: "/static/gallery/IMG_5434.jpg",
        width: 1200,
        height: 630,
        alt: "Mt. SAC Computer Science Club event in action",
      },
    ],
  },
};

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
    id: "13",
    imageSrc: "/static/events/cs club matcha.png",
    title: "Art & Chill",
    description:
      "Join Art and Chill for a relaxing bracelet-making session designed to help you de-stress. Sip on matcha while vibing to chill music and connecting with others. Create, relax, and recharge before finals!",
    date: "29 May",
    time: "12:00 PM - 2:00 PM",
    location: "Building 61 Room 1420",
    rsvpUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSd67bKoCbkhTt1AU5ppIKiNFcQchVrWrJmKhWMVQfJ8LP9pWw/viewform",
  },
  {
    id: "5",
    imageSrc: "/static/events/cs club stem flyer.png",
    title: "STEMForOthers Project Opportunity",
    description:
      "Get involved in meaningful STEM projects that make a difference in our community.",
    date: "Spring Fall to",
    time: "-",
    location: "Remote",
    rsvpUrl: "https://forms.gle/UwmMgbQhD57Zou386",
  },
  {
    id: "11",
    title: "Electric Bluetooth Circuit Car Event - Day 2",
    description:
      "Get creative with 3D design as you craft and print your car's unique exterior shell. Turn your engineering vision into reality in this hands-on workshop!",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    rsvpUrl: "https://forms.gle/RRSre4LhTXs2kPH38",
    imageSrc: "/static/events/cs ebcc event.png",
  },
  {
    id: "12",
    title: "Electric Bluetooth Circuit Car Event - Day 3",
    description:
      "Race day is here! Put your custom-built car to the ultimate test in our grand finale event. Compete head-to-head, show off your engineering skills, and celebrate everyone's amazing creations!",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    rsvpUrl: "https://forms.gle/RRSre4LhTXs2kPH38",
    imageSrc: "/static/events/cs ebcc event.png",
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
    time: "4:00 PM - 7:00 PM",
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
    title: "UCLA + Break Through Tech AI Info Session",
    description: "Learn about UCLA's Break Through Tech AI Program.",
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
  {
    id: "10",
    imageSrc: "/static/events/cs ebcc event.png",
    title: "Electric Bluetooth Circuit Car Event - Day 1",
    description:
      "Construct your own Bluetooth car while learning about circuits and 3D design in this hands-on workshop!",
    date: "2 May",
    time: "3:00 PM - 7:00 PM",
    location: "Building 60, Rm. 1620 & 1628",
    rsvpUrl: "https://forms.gle/RRSre4LhTXs2kPH38",
  },
];

const page = () => {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden"
      aria-label="Events and Workshops"
    >
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/gallery/IMG_5434.jpg"
          alt="Mt. SAC Computer Science Club members collaborating at an event"
          priority
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
      <section
        className="w-full p-6 md:p-12 flex flex-col"
        aria-labelledby="upcoming-events"
      >
        <h2
          id="upcoming-events"
          className="text-start font-garamond font-thin text-3xl md:text-5xl mb-8"
        >
          Upcoming Events
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
          role="list"
          aria-label="Event list"
        >
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
              isTBA={event.date.includes("TBA")}
            />
          ))}
        </div>
      </section>

      <section
        className="w-full p-6 md:p-12 flex flex-col bg-[#edd7b4]"
        aria-labelledby="past-events"
      >
        <h2
          id="past-events"
          className="text-start font-garamond font-thin text-3xl md:text-5xl mb-8"
        >
          Past Events
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
          role="list"
          aria-label="Event list"
        >
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
    </main>
  );
};

export default page;
