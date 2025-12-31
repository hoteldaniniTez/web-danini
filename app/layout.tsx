import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar, Sidebar, WhatsappButton } from "@/components";
import { primaryFont, secondaryFont } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Hotel Danini Teziutlán | Lujo y Confort en la Sierra",
  description: "Descubre Hotel Danini en Teziutlán, Puebla. Habitaciones de lujo, restaurante exclusivo y ambiente Pet Friendly. Vive una experiencia inolvidable en la Perla de la Sierra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`pt-[209px] md:pt-[286px] xl:pt-[386px] ${primaryFont.variable} ${secondaryFont.variable}`}
      >
        <Navbar />
        <Sidebar />

        <WhatsappButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
