import { Roboto, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Salt Nation",
  description: "Shaping Lives, Building Futures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
