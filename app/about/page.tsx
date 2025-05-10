import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/gallery/20250502_185939.jpg"
          alt="Header"
          fill
          className="object-cover object-[center_70%] brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 z-10">
          <h1 className="font-garamond text-6xl font-thin mb-4 text-white">
            About the Computer Science Club
          </h1>
          <p className="text-xl text-white">
            A student-powered hub for tech growth, learning, and community at
            Mt. SAC
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>

      {/* Section 1: Our Origins */}
      <section className="mx-auto p-6 md:p-12">
        <div className="w-full flex items-center">
          <h1 className="font-garamond font-thin text-3xl md:text-5xl">
            Our Origins
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-12 my-4">
          <div className="flex-shrink-0 w-[250px] mx-auto md:mx-0 md:w-[350px]">
            <Image
              src="/static/rubber duck.png"
              width={350}
              height={350}
              alt="CS Club Duck"
            />
            <div className="font-garamond flex-col gap-4 hidden md:flex rounded-md bg-">
              <p className="text-xl text-neutral-900 leading-relaxed tracking-normal max-w-md mx-auto bg-[#edd7b4]/50 p-4 rounded-lg">
                Our club mascot. Since 2019.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-xl md:text-2xl font-medium mb-2">Who we are</h1>
            <p className="text-sm md:text-base mb-4">
              Founded in 2019 as a student organization at Mt. San Antonio
              College, the Computer Science Club is run for students, by
              students. We bring our passion for technology and education to
              create engaging and meaningful experiences for our peers. We
              believe that every student should have the opportunity to explore,
              learn, and excel in computer science, regardless of their
              background or experience.
            </p>
            <div className="flex flex-row gap-4 mt-4 h-[300px]">
              <div className="relative w-1/2 overflow-hidden rounded-xl">
                <Image
                  src="/static/gallery/csclub-clubday.jpg"
                  alt="CS Club Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-1/2 overflow-hidden rounded-xl">
                <Image
                  src="/static/about-us/aight.jpg"
                  alt="CS Club Event 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="bg-[#edd7b4] w-full py-12 px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="relative w-full md:w-[500px] h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/static/IMG_2030.jpg"
              alt="Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-garamond text-5xl font-thin mb-6">
              Our Mission
            </h2>
            <p className="text-base text-gray-900 leading-relaxed">
              The Computer Science Club at Mt. San Antonio College is a
              welcoming community that fosters growth and collaboration in
              technology. Our mission is to make computer science fun and
              accessible while helping students develop technical and leadership
              skills. We host workshops, tutoring sessions, and hands-on
              activities to complement coursework and encourage innovation.
              Members also gain access to networking opportunities with peers
              and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Where To Next */}
      <section className="mx-auto p-6 md:p-12">
        <div className="w-full flex items-center">
          <h1 className="font-garamond font-thin text-3xl md:text-5xl">
            Where to Next?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black mt-6">
          {[
            {
              href: "/team",
              title: "Meet the Team",
              description: "Our officers and advisors"
            },
            {
              href: "/join-us",
              title: "Already Convinced?",
              description: "Learn how to join us"
            },
            {
              href: "/events",
              title: "Ready to Get Involved?",
              description: "Explore events & workshops"
            },
            {
              href: "/projects",
              title: "Just Browsing?",
              description: "View our past projects"
            }
          ].map(({ href, title, description }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg border border-gray-300 bg-[#FBF5E8] hover:bg-[#edd7b4]/50 transition p-6 text-center relative group"
            >
              {/* Pulsing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#edd7b4] to-transparent rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-border-pulse" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
