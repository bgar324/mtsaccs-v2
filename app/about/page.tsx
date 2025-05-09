import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-col mx-auto max-w-7xl">
        {/* Section 1: Intro */}
        <section className="flex flex-row gap-6 px-12 w-full my-24 overflow-hidden">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col mt-6 max-w-2xl">
              <p className="text-sm italic font-garamond text-gray-500 leading-relaxed">
                Student-led. Welcoming.
              </p>
              <h1 className="font-garamond text-6xl font-thin mb-4 text-black">
                Curious about who we are?
              </h1>
              <p className="text-xl text-black">
                We’re a student-led community at Mt. SAC dedicated to making
                Computer Science approachable, hands-on, and welcoming for
                everyone—no experience needed.
              </p>
            </div>
            <Image
              src="/static/about-us/duck-questioning.png"
              width={250}
              height={250}
              alt="Duck Questioning"
              className = "ml-16"
            />
          </div>
        </section>
        <section className="w-full py-12 overflow-hidden flex flex-row gap-6 px-12 bg-[#edd7b4]">
          <div className="flex flex-col gap-4">
            <h1 className="text-start font-garamond font-thin text-5xl">
              Our Mission
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-start text-gray-700 max-w-2xl">
                The Computer Science Club at Mt. San Antonio College is a
                welcoming community that fosters growth and collaboration in
                technology. Our mission is to make computer science fun and
                accessible while helping students develop technical and
                leadership skills.
              </p>
              <p className="text-start text-gray-700 max-w-2xl">
                We host workshops, tutoring sessions, and hands-on activities to
                complement coursework and encourage innovation. Members also
                gain access to networking opportunities with peers and industry
                professionals.
              </p>
              <p className="text-start text-gray-700 max-w-2xl">
                Open to all Mt. SAC students, the club is inclusive and
                fee-free, offering a supportive space to explore computer
                science regardless of experience level.
              </p>
              <p className="text-start text-gray-700 max-w-2xl">
                Above all, we strive to build a sense of community, inspiring a
                love for learning and a culture of support and innovation among
                our members.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Image
              src="/static/about-us/overhead-shot.jpg"
              width={500}
              height={300}
              alt="Overhead Shot"
              className="rounded-xl"
            />
            <Image
              src="/static/gallery/csclub-clubday.jpg"
              width={500}
              height={350}
              alt="Club mission in action"
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Section 3: Meet Our Advisors */}
        <div className="w-full bg-[#f8ecd4] py-24 px-32">
          <h2 className="font-garamond text-4xl font-thin mb-12 text-black">
            Meet Our Advisors
          </h2>
          <div className="flex flex-wrap gap-12">
            {[
              {
                name: "Prof. Lynn Moore",
                url: "https://mtsac.edu/csci/moore",
              },
              {
                name: "Prof. Michael Perez",
                url: "https://mtsac.edu/csci/perez",
              },
            ].map((advisor, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gray-300" />
                <p className="text-lg font-medium text-black">{advisor.name}</p>
                <a
                  href={advisor.url}
                  target="_blank"
                  className="px-4 py-1 border border-black rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: CTA */}
        <div className="w-full bg-[#edd7b4] py-16 flex justify-center">
          <a
            href="/team"
            className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300"
          >
            Meet the Team →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
