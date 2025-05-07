import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import EventCard from "./components/EventCard";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="flex flex-col w-full">
        <div className="relative h-[88vh] w-full overflow-hidden">
          <Image
            src="/static/header.jpeg"
            alt="Header"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 z-10">
            <h1 className="font-garamond text-6xl font-thin mb-4 text-white">
              Mt. SAC Computer Science Club
            </h1>
            <p className="text-xl text-white">
              Coding an inclusive community of builders
            </p>
          </div>
        </div>
        <section className="w-full mb-6">
          <div className="h-[12vh] w-full px-12 py-6 flex items-center">
            <h1 className="font-garamond font-thin text-5xl">About Us</h1>
          </div>
          <div className="flex flex-row gap-12 px-16 mt-4">
            <div className="flex-shrink-0 w-[350px]">
              <Image
                src="/static/cs_seal.png"
                width={350}
                height={350}
                alt="CS Club Duck"
              />
              <div className="font-garamond flex flex-col gap-4">
                <p className="text-xl italic text-neutral-900 leading-relaxed tracking-normal max-w-md mx-auto">
                  "CS Club opened up so many doorways for me, both academically
                  and professionally."
                </p>
                <p className="text-sm text-gray-600 mt-2 text-right tracking-wide">
                  — Benjamin G., Club Outreach Officer
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h1 className="text-2xl font-medium mb-2">Who we are</h1>
              <p className="text-base mb-4">
                Founded in 2019, the Computer Science Club at Mt. San Antonio
                College is run for students, by students. We host events, lead
                workshops, and build projects that foster a strong sense of
                community and hands-on learning. Our mission is to make computer
                science approachable, collaborative, and impactful for all
                students.
              </p>
              <div className="flex flex-row gap-4 mt-4 h-[300px]">
                <div className="relative w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/static/IMG_2030.jpg"
                    alt="CS Club Event 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-1/2 overflow-hidden rounded-xl">
                  <Image
                    src="/static/IMG_8052.jpg"
                    alt="CS Club Event 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mb-6 bg-[#edd7b4] px-12 py-6 flex flex-col">
          <h1 className="text-start font-garamond font-thin text-5xl">
            Upcoming Events
          </h1>
          <div className="flex flex-row gap-3 my-8">
            <EventCard
              imageSrc="/static/events/cs ebcc event.png"
              title="Electric Bluetooth Circuit Car Event"
              description="Join us for a hands-on tech adventure — assemble and race your own Bluetooth car while diving into circuits, 3D design, and team challenges. It’s full speed ahead for fun, friends, and engineering flair!"
              date="30 Apr."
              location="Building 60, Rm. 1620 & 1628"
              time="3:00 PM - 7:00 PM"
              rsvpUrl="sda"
              imageHeight="h-64"
              imagePosition="object-top"
            />
            <EventCard
              imageSrc="/static/events/cs club stem flyer.png"
              title="Electric Bluetooth Circuit Car Event"
              description="Dive into hands-on coding with three dynamic groups—revamp the STEMplore site, design an intermediate Java course, or translate lessons into Python and C++. Choose your crew, build something real."
              date="Spring Fall to"
              location="Remote"
              time="N/A"
              rsvpUrl="sda"
              imageHeight="h-64"
              imagePosition="object-top"
            />
          </div>
          <button className = "uppercase border-[1px] border-black w-fit text-center items-center mx-auto rounded-full text-sm py-1 px-3 flex flex-row gap-2 font-medium cursor-pointer bg-transparent text-black hover:bg-black hover:text-white duration-300 ease-in-out transition">
            see full event archive <ArrowRight className="w-4 h-4"/>
          </button>
        </section>
      </div>
    </div>
  );
};

export default page;
