import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/projects-page/IMG_4518.jpg"
          alt="Header"
          fill
          className="object-cover object-[center_50%] brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
        <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
          <h1 className="font-garamond text-4xl md:text-6xl font-thin mb-4 text-white tracking-tight md:tracking-normal">
            Projects & Presentations
          </h1>
          <p className="text-base md:text-xl text-white">
            Ideas worth sharing. Explore what our club has built, taught, and presented.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>

      <section className="w-full p-6 md:p-12 flex flex-col">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">Intro Workshops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 place-items-center md:px-12 lg:px-14 xl:px-36">
          <ProjectCard
            title="Intro to Arduino"
            date="11/20/19"
            imageSrc="/static/project/Intro to arduino_ projects.png"
            slidesLink="https://docs.google.com/presentation/d/1ibq6mKTArqkUY7aMJD_wPrBJIE6gd7xQx00o1-9ZVcc/edit?usp=sharing"
          />
          <ProjectCard
            title="Intro to Computer Science"
            date="9/8/2023"
            imageSrc="/static/project/Introduction to Computer Science.png"
            slidesLink="https://docs.google.com/presentation/d/1qVwx4yZ5tW8dbVJDzh1pRuDjeKLZZMLt0PGaoFUd-n0/edit#slide=id.g20f7af2584a_0_14"
          />
          <ProjectCard
            title="Intro to Java"
            date="unknown"
            imageSrc="/static/project/Intro to Java.png"
            slidesLink="https://docs.google.com/presentation/d/1mkV-e8Umj3ohlOdyqsSIXpQAvhg5J3osSbl5Z_efK3c/edit#slide=id.p"
          />
          <ProjectCard
            title="Intro to Git and Github"
            date="10/2/2019"
            imageSrc="/static/project/Intro to arduino_ projects.png"
            slidesLink="https://docs.google.com/presentation/d/1xuTi38wjr2_dkuBIDsY_mwUNmLzFm_gIkvDvZDcVCEQ/edit#slide=id.g647bcbd391_0_19"
          />
          <ProjectCard
            title="Intro to Web Dev"
            date="10/20/2023"
            imageSrc="/static/project/Introduction to WebDev.png"
            slidesLink="https://docs.google.com/presentation/d/1JWuLIgnXQyr_Ez8E3F6-4owPj42K8vZ3UtO_nMp2J3A/edit#slide=id.g20f7af2584a_0_14"
          />
        </div>
      </section>

      <section className="w-full p-6 md:p-12 flex flex-col bg-[#edd7b4]">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">Hackathons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center md:px-12 lg:px-14 xl:px-36">
          <ProjectCard
            title="Citrus Hack 2019"
            date="Fall 2019"
            imageSrc="/static/project/Citrus Hack 2019 Opening Ceremony.png"
            slidesLink="https://docs.google.com/presentation/d/1kvQQ9zwFHZ3iwAoByCs4mibPTC9Upagi8DU0oIBx3RY/edit#slide=id.p"
          />
          <ProjectCard
            title="Mt. Hacks 2019"
            date="5/8/2019"
            imageSrc="/static/project/Mt. Hacks Opening Ceremony.png"
            slidesLink="https://docs.google.com/presentation/d/16CZ6Xkcd68mVwhtWgw9XtgK--Ar2U6PZ1aphV6WcviA/edit#slide=id.p"
          />
        </div>
      </section>

      <section className="w-full p-6 md:p-12 flex flex-col">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl">Informational Meetings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 place-items-center md:px-12 lg:px-14 xl:px-36">
          <ProjectCard
            title="Resume Workshop"
            date="5/1/2019"
            imageSrc="/static/project/Resume Workshop Slideshow.png"
            slidesLink="https://docs.google.com/presentation/d/1K-zcJryfaTtuF6QDq6YsgikRWzYZ_2L1UAnH8GG_WBc/edit#slide=id.g35f391192_00"
          />
          <ProjectCard
            title="Break Through Tech AI"
            date="Dec 3, 2024"
            imageSrc="/static/project/BTTAI Mt. SAC Presentation (1).png"
            slidesLink="https://docs.google.com/presentation/d/1huwZMZEsSb_MaeA6tdM_hiQ1xJOcwuMYapVl8bkoUfA/edit?usp=sharing"
          />
          <ProjectCard
            title="AI Briefing"
            date="11/30/2023"
            imageSrc="/static/project/AI.png"
            slidesLink="https://docs.google.com/presentation/d/19D-eFgYFcaV79_DuUVP9HVPauB9pX6LQ6jmz-KFvQpE/edit#slide=id.g2629d10e862_0_79"
          />
          <ProjectCard
            title="App Building with Mendix"
            date="11/27/2018"
            imageSrc="/static/project/MLH Localhost - No-Code App Building with Mendix - Workshop Slides With Video (v0.0.1).png"
            slidesLink="https://docs.google.com/presentation/d/1TDU9_XIL-FdNbVrhpzmsge8rzIhpQ-2KUVmxTZprgBQ/edit#slide=id.g3f0b50a039_0_0"
          />
          <ProjectCard
            title="Web Development"
            date="5/1/2019"
            imageSrc="/static/project/Web Development Presentation.png"
            slidesLink="https://docs.google.com/presentation/d/1n_b8fKJWwiZZnUXX9GhMSezJvULtRHDlOmDYwAMhOrw/edit#slide=id.g6514918931_0_22"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
