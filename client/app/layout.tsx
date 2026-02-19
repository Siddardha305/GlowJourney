"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import React, { FC, useEffect } from "react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import socketIO from "socket.io-client";
// import Head from "next/head"; // Removed for App Router compatibility
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Glow Journey - Professional Makeup Artistry Platform</title>
        <meta name="description" content="Learn professional makeup artistry with Glow Journey. Master bridal, editorial, and daily makeup techniques." />
        <link rel="icon" href="/home/Logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/home/Logo.jpg" />
        <meta property="og:title" content="Glow Journey - Professional Makeup Courses" />
        <meta property="og:description" content="Learn professional makeup artistry with expert instructors" />
        <meta property="og:image" content="https://glowjourney.in/home/Logo.jpg" />
        <meta property="og:url" content="https://glowjourney.in" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glow Journey - Professional Makeup Courses" />
        <meta name="twitter:description" content="Learn professional makeup artistry with expert instructors" />
        <meta name="twitter:image" content="https://glowjourney.in/home/Logo.jpg" />
      </head>
      <body
        className={`${poppins.variable} ${josefin.variable} bg-gradient-to-b from-gray-900 to-black bg-no-repeat duration-300`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
              <Custom>
                <div>{children}</div>
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    socketId.on("connection", () => { });
  }, []);

  if (!mounted) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <>{isLoading ? <Loader /> : <div suppressHydrationWarning>{children}</div>}</>;
};
