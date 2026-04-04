import { Hero } from "@/components/Hero";
import { TeamSection } from "@/components/TeamSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GitHubSection } from "@/components/GitHubSection";
import { GoalsSection } from "@/components/GoalsSection";
import { UsageSection } from "@/components/UsageSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-ocean-light/5 via-ocean-mid/10 to-ocean-deep/20">
      <Hero />
      <TeamSection />
      <ProjectsSection />
      <GitHubSection />
      <GoalsSection />
      <UsageSection />
      <Footer />
    </div>
  );
};

export default Index;
