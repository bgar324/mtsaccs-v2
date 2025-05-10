import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import OfficerCard from "../components/OfficerCard";
import AdvisorCard from "../components/AdvisorCard";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/team/team-header.jpg"
          alt="Header"
          fill
          className="object-cover object-[center_50%] brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
        <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
          <h1 className="font-garamond text-4xl md:text-6xl font-thin mb-4 text-white">
            Meet the Team
          </h1>
          <p className="text-base md:text-xl text-white">
            A group of dedicated individuals who lead, support, and guide our
            community forward—on campus and beyond.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>
      <section className="w-full p-6 md:p-12 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">
            Our Advisors
          </h1>
          <p className="text-start text-gray-900 mb-10 max-w-2xl">
            Faculty mentors we’re lucky to have—always supporting, guiding, and
            cheering us on behind the scenes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 xl:px-36 mx-auto">
          <AdvisorCard
            name="Dominick Atanasio"
            role="Professor"
            department="Computer Science"
            imageSrc="/static/advisors/AtanasioDominick.jpg"
            email="datanasio"
            linkedinUrl="https://www.mtsac.edu/profiles/datanasio.html"
          />
          <AdvisorCard
            name="Jonathan Johannsen"
            role="Professor"
            department="Computer Science"
            imageSrc="/static/advisors/jonathan-johannsen-1567033401-square.jpg"
            email="jjohannsen1"
            linkedinUrl="https://www.mtsac.edu/profiles/jjohannsen1.html"
          />
          <AdvisorCard
            name="Chun Wong"
            role="Professor"
            department="Computer Science"
            imageSrc="/static/advisors/WongChun.png"
            email="cwong176"
            linkedinUrl="https://www.mtsac.edu/profiles/cwong176.html"
          />
        </div>
      </section>
      <section className="w-full p-6 md:p-12 flex flex-col bg-[#edd7b4]">
        <div className="flex flex-col gap-4">
          <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">
            Our Officers
          </h1>
          <p className="text-start text-gray-900 mb-10 max-w-2xl">
            Say hi to the folks running the show! From events to projects, they
            keep things moving—and they’re just a message away on Discord or
            LinkedIn.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 xl:px-36 mx-auto">
            <OfficerCard
              name="Bowen Wu"
              role="President"
              imageSrc="/static/people/bowen.png"
              discordUsername="Endless"
              linkedinUrl="https://www.linkedin.com/in/bowen-wu-8054b82b9/"
            />
            <OfficerCard
              name="Siwoo Chung"
              role="Vice President"
              imageSrc="/static/people/siwoo.png"
              discordUsername="seaweed"
              linkedinUrl="https://www.linkedin.com/in/siwoochung/"
            />
            <OfficerCard
              name="Jessica Chen"
              role="Secretary"
              imageSrc="/static/people/jessica.png"
              discordUsername="jessica"
              linkedinUrl="https://www.linkedin.com/in/jessica-c-47b77332b/"
            />
            <OfficerCard
              name="Van Lai Sy"
              role="Treasurer"
              imageSrc="/static/people/van.png"
              discordUsername="OnlyVans"
              linkedinUrl="https://www.linkedin.com/in/van-la%C3%AF-sy-654b99286/"
            />
            <OfficerCard
              name="Joshua-Jaye Chan"
              role="ICC Representative"
              imageSrc="/static/people/josh.png"
              discordUsername="Josh"
              linkedinUrl="https://www.linkedin.com/in/joshuajayechan/"
            />
            <OfficerCard
              name="Benjamin Garcia"
              role="Outreach Officer"
              imageSrc="/static/people/ben.png"
              discordUsername="ben"
              linkedinUrl="https://www.linkedin.com/in/btgarcia05/"
            />
            <OfficerCard
              name="Natalie Guillen"
              role="Workshop Officer"
              imageSrc="/static/people/natalie.png"
              discordUsername="natalie"
              linkedinUrl="/team"
            />
            <OfficerCard
              name="Amanda Chang"
              role="Workshop Officer"
              imageSrc="/static/people/amanda.png"
              discordUsername="amanda"
              linkedinUrl="https://www.linkedin.com/in/amanda-changg/"
            />
            <OfficerCard
              name="Chris Theung"
              role="Workshop Officer"
              imageSrc="/static/people/chris.png"
              discordUsername="Chris"
              linkedinUrl="https://www.linkedin.com/in/christheung/"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
