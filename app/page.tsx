import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { EngineeringPhilosophy } from "@/components/homepage";
import { MetricsSection } from "@/components/metrics";
import { Navbar } from "@/components/navigation";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <EngineeringPhilosophy />
      </main>
      <Footer compact />
    </div>
  );
}
