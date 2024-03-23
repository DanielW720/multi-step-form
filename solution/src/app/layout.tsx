import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import bgSidebarMobile from "../../public/images/bg-sidebar-mobile.svg";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Multi Step Form - Frontendmentor challange",
  description: "Frontendmentor.io challange Multi Step From.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} w-screen min-h-screen text-gray-900 flex flex-col items-center bg-background`}
      >
        <div className="absolute inset-0 h-44 -z-10">
          <Image
            src={bgSidebarMobile}
            alt="Background mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
