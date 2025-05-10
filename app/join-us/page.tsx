import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import EventCard from "../components/EventCard";
import { DiscordIcon } from "../Icons";
import {
  ArrowRight,
  Handshake,
  MessageCircleMore,
  Users,
  Rocket,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/static/gallery/IMG_8061.jpg"
          alt="Header"
          fill
          className="object-cover object-[center_60%] brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[black]/80 to-transparent" />
        <div className="absolute bottom-16 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10">
          <h1 className="font-garamond text-4xl md:text-6xl font-thin mb-4 text-white">
            You in? Come join us!
          </h1>
          <p className="text-base md:text-xl text-white">
            Whether you're coding your first line or leading a project, you
            belong here.
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 animate-fade-in">
          <ChevronDown size={32} className="animate-bounce" />
        </div>
      </div>
      <section className="px-6 py-6 md:py-20 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* How Do I Join? */}
          <div className="relative p-6 border rounded-xl shadow-sm bg-[#FBF5E8] transition group lg:col-span-1">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#edd7b4] rounded-full border-2 border-black transition-colors duration-300 ease-in-out group-hover:bg-[#98FB98]" />
            <h3 className="text-2xl font-semibold mb-2 font-garamond">
              How do I join?
            </h3>
            <p className="text-gray-700">
              Just hop into our Discord—no sign-up, no fees. Get access to
              events, announcements, and the community.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://discord.com/invite/sWpjfHVuuT"
                className="flex flex-row gap-2 px-4 py-2 rounded-full bg-[#738ADB] text-white transition-colors duration-300 ease-in-out text-center items-center text-sm font-medium group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon
                  width={16}
                  height={16}
                  className="fill-white transition-colors duration-300 ease-in-out"
                />
                Join Discord
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* What's In It For Me? */}
          <div className="relative p-6 border rounded-xl shadow-sm bg-[#FBF5E8] transition group lg:col-span-3">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#edd7b4] rounded-full border-2 border-black transition-colors duration-300 ease-in-out group-hover:bg-[#98FB98]" />
            <h3 className="text-2xl font-semibold mb-2 font-garamond">
              What's in it for me?
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-4 text-center gap-4">
              <div className="border rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <Handshake />
                <h4 className="font-semibold">Connect</h4>
                <p className="text-sm text-gray-600">
                  with like-minded students who share your passion for Computer
                  Science and Technology
                </p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <MessageCircleMore />
                <h4 className="font-semibold">Tutoring</h4>
                <p className="text-sm text-gray-600">
                  from our alumni and volunteers to help you succeed in your
                  coursework and projects
                </p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <Users />
                <h4 className="font-semibold">Collaborate</h4>
                <p className="text-sm text-gray-600">
                  with your peers in coding opportunities where you can work on
                  exciting projects with fellow members
                </p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center bg-white">
                <Rocket />
                <h4 className="font-semibold">Participate</h4>
                <p className="text-sm text-gray-600">
                  in workshops and events designed to sharpen your skills and
                  showcase new technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Opportunities */}
        <div className="relative mt-12 p-6 border rounded-xl shadow-sm bg-[#FBF5E8] transition max-w-6xl mx-auto group">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#edd7b4] rounded-full border-2 border-black transition-colors duration-300 ease-in-out group-hover:bg-[#98FB98]" />
          <h3 className="text-2xl font-semibold mb-4 font-garamond">
            Leadership Opportunities
          </h3>
          <p className="text-sm md:text-base text-gray-900 mb-4">
            Take ownership. Officers plan events, lead builds, and shape what
            happens next.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "President",
                "Leads meetings, oversees activities, and supports officers.",
              ],
              [
                "Vice President",
                "Assists the president and steps in when needed.",
              ],
              ["Secretary", "Manages records and club correspondence."],
              [
                "Treasurer",
                "Handles budgeting, tracking, and financial planning.",
              ],
              [
                "ICC Representative",
                "Coordinates ICC involvement and student relations.",
              ],
              [
                "Outreach Officer",
                "Promotes the club through marketing and social media.",
              ],
              [
                "Workshop Officer",
                "Plans, promotes, and coordinates educational workshops.",
              ],
            ].map(([role, desc]) => (
              <div key={role} className="border rounded-lg p-4 bg-gray-50">
                <h4 className="font-semibold">{role}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#edd7b4] p-6 md:p-12 flex flex-col">
        <h1 className="text-start font-garamond font-thin text-3xl md:text-5xl mb-3 md:mb-12">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto px-3 space-y-4"
        >
          <AccordionItem value="q1" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              Do I need programming experience to join?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              Not at all! We welcome individuals of all skill levels, whether
              you're just starting out or an experienced coder looking to share
              your expertise.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              What are the benefits of becoming a member?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              As a member, you'll gain access to exclusive events, hands-on
              workshops, personalized tutoring, networking opportunities, and
              the chance to collaborate on innovative projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              Is the club open to all majors?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              Absolutely! Our club is open to students from all majors, not just
              Computer Science. If you're passionate about technology or curious
              to learn, you're welcome here.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              Is there a membership fee?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              No fees are required! Becoming a member is as simple as joining
              our Discord community.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              When do leadership applications open?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              Applications for officer and leadership roles usually open a week
              or two before each semester begins. Stay updated by joining our
              Discord server and subscribing to our mailing list!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              Who are the club's partners and collaborators?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              Our club works closely with groups like SWE, SMACS, ENGR Club,
              GAIN, AGS, PTK, Webshare, and more. We also partner with
              organizations like STEM for Others, Break Through Tech, and MLH to
              expand opportunities for our members.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q7" className="border-b border-black">
            <AccordionTrigger className="text-base md:text-lg font-medium">
              What if I have more questions?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-900">
              Feel free to reach out! You can message us directly on Discord,
              contact an officer personally, or get in touch with our club
              advisors. Visit the Team page for their contact details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <Footer />
    </div>
  );
};

export default page;
