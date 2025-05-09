import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import EventCard from "./components/EventCard";
import { ArrowRight, ChevronDown } from "lucide-react";
import Marquee from "react-fast-marquee";
import Form from "./components/Form";
import Footer from "./components/Footer";

const page = () => {
  const images = [
    "/static/gallery/11.2 Mt.Sac CS x AGS Club.jpg",
    "/static/gallery/20241203_170013.jpg",
    "/static/gallery/20250502_185939.jpg",
    "/static/gallery/71763995403__FBEFE8F6-4B79-4F6C-A583-3C28F72D087C.jpg",
    "/static/gallery/IMG_4719.jpg",
    "/static/gallery/IMG_5434.jpg",
    "/static/gallery/IMG_5435.jpg",
    "/static/gallery/IMG_8061.jpg",
    "/static/gallery/csclub-clubday.jpg",
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="flex flex-col mx-auto">
        {/* this div */}
        <div className="relative h-[90vh] md:h-[98vh] w-full overflow-hidden">
          <Image
            src="/static/header.jpeg"
            alt="Hero"
            priority
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
          <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
            <h1 className="font-garamond text-4xl md:text-6xl font-thin mb-4 text-white">
              <span className="block md:inline">Mt. SAC</span> Computer Science
              Club
            </h1>
            <p className="text-base md:text-xl text-white">
              Coding an inclusive community of builders
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
            <ChevronDown size={32} className="animate-bounce" />
          </div>
        </div>
        <section className="mx-auto p-6 md:p-12">
          <div className="w-full flex items-center">
            <h1 className="font-garamond font-thin text-3xl md:text-5xl">About Us</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 my-4">
            <div className="flex-shrink-0 w-[250px] mx-auto md:mx-0 md:w-[350px]">
              <Image
                src="/static/cs_seal.png"
                width={350}
                height={350}
                alt="CS Club Duck"
              />
              <div className="font-garamond flex-col gap-4 hidden md:flex">
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
              <h1 className="text-xl md:text-2xl font-medium mb-2">Who we are</h1>
              <p className="text-sm md:text-base mb-4">
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

        <section className="w-full bg-[#edd7b4] p-6 md:p-12 flex flex-col">
          <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">
            Upcoming Events
          </h1>
          <div className="flex flex-col md:flex-row gap-3 my-8">
            <EventCard
              imageSrc="/static/events/cs ebcc event.png"
              title="Electric Bluetooth Circuit Car Event"
              description="Join us for a hands-on tech adventure — assemble and race your own Bluetooth car while diving into circuits, 3D design, and team challenges. It’s full speed ahead for fun, friends, and engineering flair!"
              date="30 Apr."
              location="Building 60, Rm. 1620 & 1628"
              time="3:00 PM - 7:00 PM"
              rsvpUrl="https://forms.gle/RRSre4LhTXs2kPH38"
            />
            <EventCard
              imageSrc="/static/events/cs club stem flyer.png"
              title="STEMForOthers Project Event"
              description="Dive into hands-on coding with three dynamic groups—revamp the STEMplore site, design an intermediate Java course, or translate lessons into Python and C++. Choose your crew, build something real."
              date="Spring Fall to"
              location="Remote"
              time="-"
              rsvpUrl="https://forms.gle/UwmMgbQhD57Zou386"
            />
          </div>
          <a
            className="uppercase border-[1px] border-black w-fit text-center items-center mx-auto rounded-full text-xs md:text-sm py-1 px-3 flex flex-row gap-2 font-medium cursor-pointer bg-transparent text-black hover:bg-black hover:text-white duration-300 ease-in-out transition"
            href="/events"
          >
            see full event archive <ArrowRight className="w-4 h-4" />
          </a>
        </section>
        <section className="w-full py-6 md:py-12 overflow-hidden flex flex-col gap-6">
          <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl px-6 md:px-12">
            Gallery
          </h1>
          <div className="flex flex-col my-4 gap-2 w-full max-w-full">
            <Marquee
              speed={40}
              autoFill={true}
              loop={0}
              className="gap-4"
              pauseOnHover={true}
            >
              {images
                .filter((_, i) => i % 2 === 0)
                .map((src, i) => (
                  <div key={i} className="mx-2">
                    <Image
                      src={src}
                      alt={`Gallery image row 1 - ${i + 1}`}
                      className="rounded-lg shadow-sm object-cover h-[100px] md:h-[200px] w-[200px] md:w-[300px]"
                      width={300}
                      height={200}
                    />
                  </div>
                ))}
            </Marquee>
            <Marquee
              speed={40}
              loop={0}
              autoFill={true}
              className="md:h-[200px] gap-4"
              pauseOnHover={true}
            >
              {images
                .filter((_, i) => i % 2 === 1)
                .map((src, i) => (
                  <div key={i} className="mx-2">
                    <Image
                      src={src}
                      alt={`Gallery image row 2 - ${i + 1}`}
                      className="rounded-lg shadow-sm object-cover h-[100px] md:h-[200px] w-[200px] md:w-[300px]"
                      width={300}
                      height={200}
                    />
                  </div>
                ))}
            </Marquee>
          </div>
          <div className="flex flex-col items-center text-center justify-center gap-2">
            <p className="text-lg font-medium text-gray-900">
              These moments were captured at our workshops and events.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Curious what we built? Explore the full project archive below.
            </p>
            <a
              className="uppercase border-[1px] border-black w-fit text-center items-center mx-auto rounded-full text-sm py-1 px-3 flex flex-row gap-2 font-medium cursor-pointer bg-transparent text-black hover:bg-black hover:text-white duration-300 ease-in-out transition"
              href="/projects"
            >
              see full project archive <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 overflow-hidden flex flex-col gap-6 bg-[#edd7b4]">
          <div className="px-6 md:px-12 flex flex-col gap-4">
            <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">
              Partners & Collaborators
            </h1>
            <p className="text-start text-gray-700 mb-5 md:mb-10 max-w-2xl">
              We've teamed up with incredible clubs and organizations to create
              interdisciplinary projects, host joint events, and empower more
              students through collaboration.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-md w-fit">
            <Marquee speed={40} pauseOnHover={true} autoFill={true}>
              {[
                { src: "/static/partners/mlh.png", url: "https://mlh.io/" },
                {
                  src: "/static/partners/stemforothers.png",
                  url: "https://www.stemforothers.org/",
                },
                {
                  src: "/static/partners/btk.png",
                  url: "https://www.breakthroughtech.org/",
                },
                {
                  src: "/static/partners/ags.png",
                  url: "https://www.instagram.com/mtsacags/",
                },
                {
                  src: "/static/partners/caduceus.png",
                  url: "https://www.instagram.com/mtsac.caduceusclub/",
                },
                {
                  src: "/static/partners/engr-club.png",
                  url: "https://www.instagram.com/mtsac.engrclub.official/",
                },
                {
                  src: "/static/partners/gain.png",
                  url: "https://www.instagram.com/mtsac_gain",
                },
                {
                  src: "/static/partners/ptk.png",
                  url: "https://www.instagram.com/ptkaoa",
                },
                {
                  src: "/static/partners/smacs.png",
                  url: "https://smacs.vercel.app/",
                },
                {
                  src: "/static/partners/swe-mtsac.png",
                  url: "https://www.instagram.com/swe.mtsac/",
                },
                {
                  src: "/static/partners/webshare.png",
                  url: "https://www.instagram.com/webshare.official",
                },
              ].map((partner, i) => (
                <a
                  key={i}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 md:mx-6 my-[.5px] flex items-center justify-center rounded-lg cursor-pointer group"
                >
                  <Image
                    src={partner.src}
                    alt={`Partner logo ${i + 1}`}
                    className="rounded-3xl shadow-sm object-contain bg-[#f8ecd4] hover:bg-[#edd7b4] p-4 h-[100px] md:h-[120px] w-[150px] md:w-[200px] duration-300 ease-in-out transition"
                    width={200}
                    height={120}
                  />
                </a>
              ))}
            </Marquee>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 overflow-hidden flex flex-col gap-6">
          <div className="px-6 md:px-12 flex flex-col gap-4">
            <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">
              Get Involved
            </h1>
            <div className="w-full flex flex-col md:flex-row gap-4 px-1 md:px-4 my-4">
              <div className="md:w-1/2 flex flex-col bg-[#FBF5E8] rounded-md p-4">
                <h3 className="font-garamond text-3xl font-strong mb-4">
                  Important Forms
                </h3>
                <p className="text-start text-gray-900 mb-6">
                  Interested in becoming an officer or giving feedback? Submit a
                  form below to help shape our club.
                </p>
                <div className="flex flex-col gap-4">
                  <Form title="Club Officer Interest Form" href="/some-link" />
                  <Form
                    title="Website Feedback Form"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeacERWRiAnTlXoFRgdWw6ObGU5aqV79HIT5Od5um5mQwm1vg/viewform"
                  />
                  <Form title="General Inquiries Form" href="/some-link" />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col bg-[#FBF5E8] rounded-md p-4 h-min">
                <h3 className="font-garamond text-3xl font-strong mb-4">
                  Join the Mailing List
                </h3>
                <p className="text-start text-gray-900 mb-6">
                  Get updates about upcoming events, workshops, and
                  opportunities. We'll only send what matters.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxLfb-J6ADbh93Nr3JSLsZD2LtCp9Y7zVORY5YkhY4QY6fgA/viewform"
                  className="w-full text-center items-center py-2 rounded-md block bg-[#edd7b4] hover:bg-[#f8ecd4] text-black hover:text-black/90 duration-400 hover:border-white ease-in-out transition"
                >
                  Join via Google Form
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default page;
