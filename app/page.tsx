import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MetricsSection } from "@/components/metrics";
import { Navbar } from "@/components/navigation";
import { OperationsSection } from "@/components/operations";
import { OperatorSection } from "@/components/operator";
import { FeaturedProjects, ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <FeaturedProjects />
        <OperationsSection />
        <ProjectsSection />
        <OperatorSection />
      </main>
      <Footer />
    </div>
  );
}
