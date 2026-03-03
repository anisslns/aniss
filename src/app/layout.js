'use client';

import "./globals.css";
import { Lexend } from "next/font/google";
import ImageArea from "./components/ImageArea";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  
const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={` overflow-hidden  max-lg:overflow-auto bg-white max-lg:flex-col flex flex-row justify-center items-start w-screen max-lg:h-auto min-h-screen ${lexend.className}`}
      >
        <section className="flex-1 p-8  w-full  max-lg:relative sticky top-0 h-screen self-start">
          <ImageArea />
        </section>

        <section className=" p-8 max-md:pt-0  flex-[1.2] overflow-y-auto overflow-x-hidden max-lg:overflow-hidden h-screen w-full">
          <Navbar />
          
          <div key={pathName} className="ml-[3px] mt-14 flex-wrap wrap-break-word">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
