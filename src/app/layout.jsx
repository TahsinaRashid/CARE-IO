import { Geist, Geist_Mono, Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layouts/Navbar";

import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";




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

  title: {

    default: "CARE-IO ",

    template: "%s | CARE-IO",

  },

  description: "Get premium professional services with up to 15% discount. We care for you, your home, and your loved ones.",

  metadataBase: new URL('https://careio-nine.vercel.app'), // তোমার ভেরসেল লিঙ্কটি এখানে দাও

  openGraph: {

    title: "CARE-IO",

    description: "Explore our wide range of services including Baby Care, Elderly Care, and more.",

    url: "https://careio-nine.vercel.app",

    siteName: "CARE-IO",

    images: [

      {

        url: "https://i.postimg.cc/sxhyvkrC/Screenshot-2026-02-13-212337.png", // হোমপেজ প্রিভিউ লিঙ্ক

        width: 1200,

        height: 630,

        alt: "CARE-IO Homepage Preview",

      },

    ],

    locale: "en_US",

    type: "website",

  },

  twitter: {

    card: "summary_large_image",

    title: "CARE-IO | Professional Services",

    description: "Book your service today and enjoy a 15% discount!",

    images: ["https://i.postimg.cc/sxhyvkrC/Screenshot-2026-02-13-212337.png"],

  },

};



export default function RootLayout({ children }) {

  return (

    <NextAuthProvider>
      <html lang="en" suppressHydrationWarning>

      <body

        className={`${poppins.className} antialiased bg-orange-100`}

      >



         <header className="sticky top-0 z-50 py-2 md:w-11/12 mx-auto">

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
    </NextAuthProvider>

  );

}