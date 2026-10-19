import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackedCards from "@/components/StackedCards";
import FeatureGrid from "@/components/FeatureGrid";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <Navbar />
      <Hero />
      <StackedCards />
      <FeatureGrid />
      <Stats />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}
