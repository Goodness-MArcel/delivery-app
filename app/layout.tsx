import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Initialize Poppins Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BikeDash - Fast Bike Courier Delivery",
  description: "Lightning fast package, document & parcel delivery on bikes in Lagos",
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
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}