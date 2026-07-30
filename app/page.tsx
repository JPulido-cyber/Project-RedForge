import { Footer } from "@/components/footer";
import { EngineeringActivityFeed } from "@/components/documentation";
import { Hero } from "@/components/hero";
import { EngineeringPhilosophy, PlatformPathways } from "@/components/homepage";
import { MetricsSection } from "@/components/metrics";
import { Navbar } from "@/components/navigation";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <EngineeringPhilosophy />
        <MetricsSection />
        <EngineeringActivityFeed />
        <PlatformPathways />
      </main>
      <Footer />
    </div>
  );
}
