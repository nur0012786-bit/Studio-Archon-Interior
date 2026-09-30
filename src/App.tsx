import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceStrip } from './components/ServiceStrip';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FeaturedProject } from './components/FeaturedProject';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TeamSection } from './components/TeamSection';
import { ProcessSection } from './components/ProcessSection';
import { ImageBreak } from './components/ImageBreak';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatsSection } from './components/StatsSection';
import { JournalSection } from './components/JournalSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { ArticleModal } from './components/ArticleModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PROJECTS, Project, SERVICES, Service, JournalPost } from './data/studioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalPost | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Global keyboard shortcut to trigger search (Cmd+K / Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }
      // Pressing "/" when not focused on an input/textarea
      if (e.key === '/' && !isSearchOpen) {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          setIsSearchOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToPhilosophy = () => {
    const target = document.getElementById('philosophy');
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleServiceStripClick = (id: string) => {
    // Map service strip id to the comprehensive service modal
    const matchedService = SERVICES.find(
      (s) =>
        s.id === id ||
        s.title.toLowerCase().includes(id.replace('-', ' ').split(' ')[0])
    );
    if (matchedService) {
      setSelectedService(matchedService);
    } else {
      const target = document.getElementById('services');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleInquireFromModal = (contextTitle: string) => {
    scrollToContact();
    // Pre-fill message area if needed
    setTimeout(() => {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement | null;
      if (textarea && !textarea.value) {
        textarea.value = `I am interested in discussing a project inspired by ${contextTitle}.`;
        textarea.focus();
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#1E211C] flex flex-col font-sans selection:bg-[#59624D] selection:text-white">
      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation */}
      <Header
        onOpenConsultation={scrollToContact}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onBookConsultation={scrollToContact}
          onViewFeatured={() => setSelectedProject(PROJECTS[0])}
        />

        {/* Horizontal Service Strip */}
        <ScrollReveal delay={80} distance={20} duration={850}>
          <ServiceStrip onSelectServiceCategory={handleServiceStripClick} />
        </ScrollReveal>

        {/* Editorial About Section */}
        <ScrollReveal distance={28} duration={950}>
          <AboutSection onLearnMore={scrollToPhilosophy} />
        </ScrollReveal>

        {/* Selected Portfolio / Projects */}
        <ScrollReveal distance={28} duration={950}>
          <PortfolioSection
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenConsultation={scrollToContact}
          />
        </ScrollReveal>

        {/* Featured Project Immersive Section */}
        <ScrollReveal distance={28} duration={1000}>
          <FeaturedProject
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        </ScrollReveal>

        {/* Services & Disciplines Grid */}
        <ScrollReveal distance={28} duration={950}>
          <ServicesSection
            onSelectService={(serv) => setSelectedService(serv)}
          />
        </ScrollReveal>

        {/* Core Design Philosophy */}
        <ScrollReveal distance={28} duration={950}>
          <PhilosophySection />
        </ScrollReveal>

        {/* Studio Leadership & Core Team */}
        <ScrollReveal distance={28} duration={950}>
          <TeamSection onOpenConsultation={scrollToContact} />
        </ScrollReveal>

        {/* Process Timeline */}
        <ScrollReveal distance={28} duration={950}>
          <ProcessSection />
        </ScrollReveal>

        {/* Full-width Cinematic Image Break */}
        <ScrollReveal distance={20} duration={1100}>
          <ImageBreak />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal distance={28} duration={950}>
          <TestimonialsSection />
        </ScrollReveal>

        {/* Factual Studio Portfolio Metrics */}
        <ScrollReveal distance={24} duration={900}>
          <StatsSection />
        </ScrollReveal>

        {/* Editorial Journal Articles */}
        <ScrollReveal distance={28} duration={950}>
          <JournalSection
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        </ScrollReveal>

        {/* Masonry-Style Curated Instagram Feed */}
        <ScrollReveal distance={28} duration={950}>
          <InstagramFeed />
        </ScrollReveal>

        {/* Major Consultation CTA */}
        <ScrollReveal distance={28} duration={950}>
          <ConsultationCTA onOpenConsultation={scrollToContact} />
        </ScrollReveal>

        {/* Contact & Consultation Form */}
        <ScrollReveal distance={28} duration={950}>
          <ContactSection />
        </ScrollReveal>

        {/* FAQ Accordion */}
        <ScrollReveal distance={24} duration={900}>
          <FAQSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={scrollToContact} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromModal}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Global Studio Search Dialog */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onSelectService={(serv) => setSelectedService(serv)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
