import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { VisionTeaser } from "@/components/VisionTeaser";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { VisionPage } from "@/pages/VisionPage";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <ExperienceTimeline />
        <VisionTeaser />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </>
  );
}

export default App;
