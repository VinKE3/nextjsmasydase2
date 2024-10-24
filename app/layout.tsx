import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
// Custom Style
import "glightbox/dist/css/glightbox.min.css";
// Swiper
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/HeaderMobile";

export const metadata: Metadata = {
  title: "MasyDase",
  description: "Transformamos ideas en soluciones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
