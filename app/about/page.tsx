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
        <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
          <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl font-thin mb-4 text-white">
            <span className="sm:hidden">About the CS Club</span>
            <span className="hidden sm:inline">
              About the Computer Science Club
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white">
            A student-powered hub for tech growth, learning, and community at
            Mt. SAC
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>

      {/* Section 1: Our Origins */}
      <section className="w-full py-6 md:py-12">
        <h1 className="font-garamond font-thin text-3xl md:text-5xl mb-8 px-4 sm:px-8 md:px-12">
          Mission and Origins
        </h1>
        <div className="w-full px-6 md:px-12 lg:px-14 xl:px-36">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
              <div className="flex-shrink-0 w-full sm:w-[500px] mx-auto lg:mx-0">
                <Image
                  src="/static/gallery/csclub-clubday.jpg"
                  width={500}
                  height={500}
                  alt="CS Club Club Day"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col mx-auto md:mx-0">
                <h2 className="text-xl md:text-2xl font-medium mb-4">
                  What is the Computer Science Club?
                </h2>
                <p className="text-sm md:text-base mb-4">
                  The Computer Science Club at Mt. San Antonio College is a
                  welcoming community that fosters growth and collaboration in
                  technology. Our mission is to make computer science fun and
                  accessible while helping students develop technical and
                  leadership skills.
                </p>
                <p className="text-sm md:text-base mb-4">
                  We host workshops, tutoring sessions, and hands-on activities
                  to complement coursework and encourage innovation. Members
                  also gain access to networking opportunities with peers and
                  industry professionals.
                </p>
                <p className="text-sm md:text-base mb-4">
                  Open to all Mt. SAC students, the club is inclusive and
                  fee-free, offering a supportive space to explore computer
                  science regardless of experience level.
                </p>
                <p className="text-sm md:text-base">
                  Above all, we strive to build a sense of community, inspiring
                  a love for learning and a culture of support and innovation
                  among our members.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r bg-neutral-500" />
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16">
              <div className="flex-1 flex flex-col mx-auto md:mx-0">
                <h2 className="text-xl md:text-2xl font-medium mb-4">
                  Who is the Computer Science Club?
                </h2>
                <p className="text-sm md:text-base mb-4">
                  Founded in 2019, the Computer Science Club at Mt. San Antonio
                  College was created to provide students with a fun,
                  accessible, and community-focused way to explore technology.
                  Open to all majors and experience levels, we aim to break down
                  barriers to entry in computer science through hands-on
                  learning and peer support.
                </p>
                <p className="text-sm md:text-base mb-4">
                  We host a wide range of events—from technical workshops and
                  tutoring sessions to hackathons, project showcases, and
                  interclub collaborations. Beyond skill-building, our focus is
                  on cultivating leadership, collaboration, and meaningful
                  connections that extend beyond the classroom.
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[500px] mx-auto lg:mx-0">
                <Image
                  src="/static/about-us/IMG_5431.jpg"
                  width={500}
                  height={500}
                  alt="CS Club Club Day"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Where To Next */}
      <section className="w-full p-4 sm:p-8 md:p-12 bg-[#edd7b4]">
        <h1 className="font-garamond font-thin text-3xl md:text-5xl mb-8">
          Where to Next?
        </h1>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-12 lg:px-14 xl:px-36">
            {[
              {
                title: "Meet the Team",
                description: "Our officers and advisors",
                href: "/team",
              },
              {
                title: "Already Convinced?",
                description: "Learn how to join us",
                href: "/join-us",
              },
              {
                title: "Ready to Get Involved?",
                description: "Explore events & workshops",
                href: "/events",
              },
              {
                title: "Just Browsing?",
                description: "View our past projects",
                href: "/projects",
              },
            ].map(({ title, description, href }) => (
              <a
                key={title}
                href={href}
                className="rounded-lg border border-gray-300 bg-[#FBF5E8] hover:bg-white transition p-6 text-center relative group w-full"
              >
                {/* Pulsing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#edd7b4] to-transparent rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-border-pulse" />

                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-medium mb-2">
                    {title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
