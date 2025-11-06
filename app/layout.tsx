import type { Metadata } from "next";
import { Outfit, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import TopLoader from "@/ui/TopLoader";

const geistSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FMovies — Discover Popular Movies & TV Shows",
  description:
    "Explore trending movies and top-rated TV series from around the world. View detailed cast information, ratings, and watch trailers — all powered by TMDB.",
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: "Fakhri Muzakki" }],
  other: {
    preconnect: ["https://image.tmdb.org", "https://api.themoviedb.org"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto container">
          <Navbar />
          <main className="mb-16">{children}</main>
          <Footer />
          <TopLoader />
        </div>
      </body>
    </html>
  );
}
