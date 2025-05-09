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
            A student-powered hub for tech growth, learning, and community at Mt. SAC
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 px-6 lg:px-32 bg-[#edd7b4]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-garamond mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2019, our club creates a welcoming space where students grow through building.
            From beginner-friendly workshops to advanced projects, we make Computer Science hands-on,
            inclusive, and impactful—by students, for students.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 lg:px-32">
        <h2 className="text-4xl font-garamond text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Workshops", "Beginner-friendly tech sessions on real-world tools."],
            ["Projects", "Team-based dev work with mentorship and publishing."],
            ["Hackathons", "Local and national tech competitions with support."],
            ["Tutoring & Help", "We support each other—no one learns alone here."],
            ["Guest Speakers", "Insights from industry professionals and alumni."],
            ["Collaborations", "Cross-club teamwork that bridges disciplines."]
          ].map(([title, desc]) => (
            <div key={title} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Club Values Section */}
      <section className="py-24 px-6 lg:px-32 bg-[#edd7b4]">
        <h2 className="text-4xl font-garamond text-center mb-12">Club Values</h2>
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
          {[
            ["🧠", "Curiosity", "We encourage learning by doing and questioning everything."],
            ["🤝", "Community", "Supportive culture built on collaboration, not competition."],
            ["🔧", "Building", "We value execution. Code, test, ship, improve."],
            ["🌱", "Growth", "We grow technically and personally—every event is a step forward."],
            ["🎯", "Impact", "We want our work to help others and improve lives."]
          ].map(([emoji, title, desc]) => (
            <div key={title} className="text-center max-w-xs">
              <div className="text-5xl">{emoji}</div>
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className="text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section className="py-24 px-6 lg:px-32">
        <h2 className="text-4xl font-garamond text-center mb-12">Leadership Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["President", "Leads vision, coordination, and represents the club."],
            ["Vice President", "Supports leadership and operations."],
            ["Projects Lead", "Guides team projects and technical initiatives."],
            ["Events Lead", "Plans workshops, panels, and socials."],
            ["Outreach", "Builds partnerships and promotes the club."],
            ["Design", "Owns visuals, graphics, and branding."]
          ].map(([role, desc]) => (
            <div key={role} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-black mb-2">{role}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Advisors Section */}
      <section className="py-24 px-6 lg:px-32 bg-[#edd7b4]">
        <h2 className="text-4xl font-garamond text-center mb-12">Meet Our Advisors</h2>
        <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
          {[
            {
              name: "Ms. Alorro",
              title: "Faculty Advisor",
              desc: "Guides our growth with her experience in design and mentorship.",
              img: "/static/advisors/alorro.webp"
            },
            {
              name: "Mr. Smith",
              title: "Technical Advisor",
              desc: "Provides insights into systems, backend, and academic direction.",
              img: "/static/advisors/smith.webp"
            }
          ].map(({ name, title, desc, img }) => (
            <div key={name} className="text-center max-w-xs">
              <Image
                src={img}
                alt={name}
                width={128}
                height={128}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{name}</h3>
              <p className="text-sm italic text-gray-600">{title}</p>
              <p className="text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
