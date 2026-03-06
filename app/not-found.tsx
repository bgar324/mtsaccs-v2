import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-[#f8ecd4]"
      aria-label="Page not found"
    >
      <Header />

      <section className="px-6 pb-12 pt-28 md:px-12 md:pt-32">
        <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-2xl bg-[#f8ecd4] p-6 md:grid-cols-2 md:items-center md:gap-10 md:p-10 animate-fade-in">
          <div className="order-2 flex flex-col gap-5 md:order-1">
            <h1 className="font-garamond text-4xl font-thin leading-tight text-black md:text-6xl">
              That page took a wrong turn.
            </h1>
            <p className="max-w-xl text-sm text-gray-800 md:text-base">
              The page you requested does not exist or may have moved. Use one
              of the links below to keep exploring the Mt. SAC CS Club site.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black bg-transparent px-5 py-2 text-sm font-medium text-black transition duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Browse Events
              </Link>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#f8ecd4] p-3">
              <Image
                src="/static/404.png"
                alt="404 illustration"
                width={900}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
