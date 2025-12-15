import Hero from "@/components/home/Hero";
import ClinicOverview from "@/components/home/ClinicOverview";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Technology from "@/components/home/Technology";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Hero />
      <ClinicOverview />
      <Services />
      <Team />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}
