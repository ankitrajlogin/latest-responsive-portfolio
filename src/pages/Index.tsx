import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ExtraCurricularSection from '@/components/portfolio/ExtraCurricularSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ContactSection from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ExtraCurricularSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;