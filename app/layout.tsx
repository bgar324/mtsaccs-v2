import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mt. SAC Computer Science Club",
    default: "Mt. SAC Computer Science Club",
  },
  description: "Mt. SAC Computer Science Club - Building a community of passionate programmers and tech enthusiasts.",
  icons: {
    icon: "/static/faviconseal.png",
    apple: "/static/faviconseal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${garamond.variable}`}>
      <head>
        {/* Preload hero images */}
        <link rel="preload" as="image" href="/static/header.jpeg" />
        <link rel="preload" as="image" href="/static/gallery/20250502_185939.jpg" />
        <link rel="preload" as="image" href="/static/gallery/IMG_5434.jpg" />
        <link rel="preload" as="image" href="/static/projects-page/IMG_4518.jpg" />
        <link rel="preload" as="image" href="/static/IMG_8061.jpg" />
        <link rel="preload" as="image" href="/static/team/team-header.jpg" />
      </head>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8ecd4]`}
      >
        {children}
      </body>
    </html>
  );
}
