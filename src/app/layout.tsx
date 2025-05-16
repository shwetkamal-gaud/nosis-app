import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import ReduxProvider from "@/store/ReduxProvider";
import { DM_Sans } from 'next/font/google';
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nosis",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  antialiased`}
      >
        <ReduxProvider>
          <div className="flex w-full min-h-screen flex-col ">
            <Navbar />
            <Sidebar />
            <main className=" pt-16 flex-1 sm:pl-[230px]">{children}
            </main>
            
          </div>
        </ReduxProvider>

      </body>
    </html>
  );
}
