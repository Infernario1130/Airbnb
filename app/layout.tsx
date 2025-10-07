
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import "leaflet/dist/leaflet.css";
import ClientOnly from "./components/ClientOnly";

const font =  Nunito ({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Explore rentals, connect, book now",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
      >
        <ToasterProvider/>
        <RentModal/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser as any}/>
        <ClientOnly>
           <div className="pb-20 pt-24">
            {children}
           </div>
        </ClientOnly>
      </body>
    </html>
  );
}
