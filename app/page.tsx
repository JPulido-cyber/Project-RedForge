import { Footer } from "@/components/footer";
import { EngineeringActivityFeed } from "@/components/documentation";
import { Hero } from "@/components/hero";
import { MetricsSection } from "@/components/metrics";
import { Navbar } from "@/components/navigation";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <EngineeringActivityFeed />
      </main>
      <Footer />
    </div>
  );
}
