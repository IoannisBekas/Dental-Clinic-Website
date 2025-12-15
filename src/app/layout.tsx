import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Premium Dental Clinic | State of the Art Dentistry",
  description: "Υπερσύγχρονη οδοντιατρική κλινική με εξειδικευμένους ιατρούς και premium υπηρεσίες.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
