/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import ProcessSection from './components/ProcessSection';
import CreationsSection from './components/CreationsSection';
import ServicesSection from './components/ServicesSection';
import InquirySection from './components/InquirySection';
import FooterSection from './components/FooterSection';
import Modals from './components/Modals';
import LandscapeLogo from './components/LandscapeLogo';
import Navbar, { LoginButton } from './components/Navbar';
import { LandscapeProject, LandscapeService } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<LandscapeProject | null>(null);
  const [selectedService, setSelectedService] = useState<LandscapeService | null>(null);

  // Scroll detection & Scroll-Spy for persistent header bubble with rAF throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          setIsScrolled(scrollPos > 30);

          // Section IDs and their corresponding tabs
          const sections = [
            { id: 'contact', tab: 'Contact' },
            { id: 'services', tab: 'Services' },
            { id: 'creations', tab: 'Creations' },
            { id: 'process', tab: 'Process' },
            { id: 'story', tab: 'Our Story' },
            { id: 'hero', tab: 'Home' },
          ];

          for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 200) {
                setActiveTab(section.tab);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    const tabToIdMap: Record<string, string> = {
      Home: 'hero',
      'Our Story': 'story',
      Process: 'process',
      Creations: 'creations',
      Services: 'services',
      Contact: 'contact',
    };

    const targetId = tabToIdMap[tab];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenProjectModal = (project: LandscapeProject) => {
    setSelectedProject(project);
    setActiveModal('project');
  };

  const handleOpenServiceModal = (service: LandscapeService) => {
    setSelectedService(service);
    setActiveModal('service');
  };

  return (
    <div
      id="main-scrolling-container"
      className="relative min-h-screen w-full bg-[#080d0a] text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden font-sans"
    >
      {/* GLOBAL HARMONIC AMBIENT MESH (Seamless color blending across all pages/sections) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-Right Warm Sunbeam */}
        <div className="absolute top-0 right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)] blur-3xl" />
        {/* Mid-Left Botanical Emerald Living Glow */}
        <div className="absolute top-[28%] left-[2%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(16,185,129,0.07)_0%,transparent_70%)] blur-3xl" />
        {/* Mid-Right Soft Wisteria Violet Light */}
        <div className="absolute top-[52%] right-[4%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] blur-3xl" />
        {/* Lower-Left Spring Jade Glow */}
        <div className="absolute top-[75%] left-[8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(52,211,153,0.06)_0%,transparent_70%)] blur-3xl" />
        {/* Deep Botanical Night Grounding Aura */}
        <div className="absolute bottom-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,95,70,0.05)_0%,transparent_75%)] blur-2xl" />
      </div>

      {/* ============================================================ */}
      {/* PERSISTENT TRANSLUCENT FLOATING HEADER BUBBLE               */}
      {/* Stays visible as you scroll across the entire website        */}
      {/* ============================================================ */}
      <header
        id="persistent-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
          isScrolled
            ? 'py-2 sm:py-3 bg-black/45 backdrop-blur-2xl border-none shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'py-3 sm:py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl lg:max-w-[94vw] xl:max-w-[96vw] 2xl:max-w-[97vw] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Left: Translucent Crest Logo Bubble & Glasslike LAGO wordmark */}
          <div className="pointer-events-auto shrink-0 flex items-center gap-2">
            <LandscapeLogo
              onClick={() => {
                setActiveTab('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <button
              type="button"
              onClick={() => {
                setActiveTab('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden lg:flex flex-col items-start text-left cursor-pointer focus:outline-none group select-none"
            >
              <span className="text-lg font-serif font-black tracking-widest uppercase glass-lago-subtle group-hover:scale-105 transition-transform leading-none">
                LAGO
              </span>
              <span className="text-[8px] font-mono tracking-widest text-emerald-300 uppercase font-semibold">
                Landscapes
              </span>
            </button>
          </div>

          {/* Center: Floating Translucent Pill Navbar Bubble */}
          <div className="pointer-events-auto flex justify-center flex-1 max-w-fit mx-auto">
            <Navbar
              activeTab={activeTab}
              onSelectTab={handleSelectTab}
              onOpenSearch={() => setActiveModal('search')}
              onOpenMenu={() => setActiveModal('market')}
            />
          </div>

          {/* Right: Translucent Client Portal Bubble */}
          <div className="pointer-events-auto flex shrink-0">
            <LoginButton onOpenLogin={() => setActiveModal('login')} />
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION with Parallax Video, Translucent Bubbles, and Color Grading */}
      <HeroSection
        onOpenReviews={() => setActiveModal('reviews')}
        onOpenProductionInfo={() => setActiveModal('production')}
        onOpenCustomers={() => setActiveModal('reviews')}
        onOpenQualityInfo={() => setActiveModal('quality')}
        onOpenLocation={() => setActiveModal('location')}
        onOpenPhone={() => setActiveModal('phone')}
        onOpenMarket={() => setActiveModal('market')}
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. OUR STORY SECTION */}
      <OurStorySection
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenStoryDetail={() => setActiveModal('production')}
      />

      {/* 3. PROCESS & CRAFTSMANSHIP SECTION */}
      <ProcessSection
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 4. SELECTED CREATIONS SECTION */}
      <CreationsSection onSelectProject={handleOpenProjectModal} />

      {/* 5. BESPOKE SERVICES SECTION */}
      <ServicesSection
        onSelectService={handleOpenServiceModal}
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. INQUIRY & 5-PHOTO ARCHITECTURAL GALLERY STRIP */}
      <InquirySection
        onOpenConsultationModal={() => {
          setActiveModal('market');
        }}
      />

      {/* 7. MONUMENTAL EDITORIAL LAGO FOOTER */}
      <FooterSection
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenLocation={() => setActiveModal('location')}
        onOpenPhone={() => setActiveModal('phone')}
      />

      {/* INTERACTIVE MODALS & DIALOGS */}
      <Modals
        activeModal={activeModal}
        selectedProject={selectedProject}
        selectedService={selectedService}
        onClose={() => {
          setActiveModal(null);
          setSelectedProject(null);
          setSelectedService(null);
        }}
        onOpenConsultation={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
