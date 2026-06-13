import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".//globals.css";
import InfoBar from "./_components/layout/InfoBar";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DholakPur Public School | Premier CBSE School",
  description:
    "DholakPur Public School — a premier CBSE institution dedicated to academic excellence, holistic development, and nurturing future leaders.",
  openGraph: {
    title: "DholakPur Public School",
    description:
      "Premier CBSE school committed to academic excellence and holistic development.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DholakPur Public School",
    description:
      "Premier CBSE school committed to academic excellence and holistic development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <InfoBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
