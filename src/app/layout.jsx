import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins=Poppins(
  {
    weight:["100","200","400","500","600","800"],
  }
)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.XYZ",
  description: "Baby Sitting & Elderly Care Service Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-orange-100`}
      >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar/>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-auto">
          {children}
        </main>
        <footer className="py-2 md:w-11/12 mx-auto">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
