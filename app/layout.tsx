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
  metadataBase: new URL('https://mtsaccs.org'),
  title: {
    template: "%s | Mt. SAC Computer Science Club",
    default: "Mt. SAC Computer Science Club - Student-Led Tech Community"
  },
  description: "Join Mt. SAC Computer Science Club! We're a vibrant community of student programmers, developers, and tech enthusiasts. Learn coding, join projects, attend workshops, and grow your tech career with us.",
  keywords: [
    "Mt. SAC CS Club",
    "Computer Science Club",
    "Mt. San Antonio College",
    "Programming Club",
    "Coding Community",
    "Student Developers",
    "Tech Workshops",
    "Software Projects",
    "Learn Programming",
    "California Tech Education"
  ],
  authors: [{ name: "Mt. SAC Computer Science Club" }],
  creator: "Mt. SAC Computer Science Club",
  publisher: "Mt. SAC Computer Science Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: "/static/faviconseal.png",
    apple: "/static/faviconseal.png",
    shortcut: "/static/faviconseal.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mtsaccs.org",
    siteName: "Mt. SAC Computer Science Club",
    title: "Mt. SAC Computer Science Club - Student-Led Tech Community",
    description: "Join Mt. SAC Computer Science Club! We're a vibrant community of student programmers, developers, and tech enthusiasts. Learn coding, join projects, attend workshops, and grow your tech career with us.",
    images: [
      {
        url: "/static/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mt. SAC Computer Science Club - Building Tomorrow's Tech Leaders"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mt. SAC Computer Science Club - Student-Led Tech Community",
    description: "Join Mt. SAC Computer Science Club! We're a vibrant community of student programmers, developers, and tech enthusiasts.",
    images: ["/static/og-image.png"],
    creator: "@mtsaccsclub"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "Technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${garamond.variable}`} dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f8ecd4" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://mtsaccs.org" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/static/header.jpeg" />
        <link rel="preload" as="image" href="/static/faviconseal.png" />
        <link rel="preload" as="font" href="/fonts/poppins-regular.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/garamond-regular.woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href="/static/gallery/20250502_185939.jpg" />
        <link rel="preload" as="image" href="/static/gallery/IMG_5434.jpg" />
        <link rel="preload" as="image" href="/static/projects-page/IMG_4518.jpg" />
        <link rel="preload" as="image" href="/static/IMG_8061.jpg" />
        <link rel="preload" as="image" href="/static/team/team.jpg" />

        <link rel="icon" href="/static/faviconseal.png" type="image/png" />
      </head>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8ecd4]`}
      >

        {children}
      </body>
    </html>
  );
}
