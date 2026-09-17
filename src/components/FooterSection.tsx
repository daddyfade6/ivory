import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import LandscapeLogo from './LandscapeLogo';

interface FooterSectionProps {
  onOpenConsultation: () => void;
  onOpenLocation: () => void;
  onOpenPhone: () => void;
}

export default function FooterSection({
  onOpenConsultation,
  onOpenLocation,
  onOpenPhone,
}: FooterSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="relative w-full pt-16 pb-12 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #060907 0%, #020403 100%)',
      }}
    >
      {/* Top Soft Seam Blender */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060907] to-transparent z-0" />

      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        {/* Navigation & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand, Inquiries & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <LandscapeLogo onClick={scrollToTop} />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block font-serif">
                  <span className="glass-lago-subtle font-black tracking-wider">LAGO</span> LANDSCAPES
                </span>
                <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase font-semibold">
                  Est. 1980 · Botanical Architecture
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 max-w-sm font-light leading-relaxed pt-2">
              Designing bespoke living gardens, architectural stone terraces, and bioclimatic outdoor sanctuaries for distinguished estates globally.
            </p>

            <div className="pt-2">
              <a
                href="mailto:hello@lagolandscapes.com"
                className="text-sm sm:text-base text-white underline underline-offset-8 hover:text-emerald-300 transition-colors font-mono"
              >
                hello@lagolandscapes.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-neutral-300">
              <button
                type="button"
                onClick={onOpenPhone}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+1 (310) 849-2100</span>
              </button>
              <button
                type="button"
                onClick={onOpenLocation}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Montecito & Malibu Studios</span>
              </button>
            </div>
          </div>

          {/* Col 3: Studio */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Studio
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <a href="#story" className="hover:text-emerald-300 transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-300 transition-colors">
                  Method & Craftsmanship
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLocation}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  40-Acre Nursery Reserve
                </button>
              </li>
              <li>
                <a href="#creations" className="hover:text-emerald-300 transition-colors">
                  Editorial Monograph
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  Architectural Hardscaping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  Centenarian Tree Procurement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  Biophilic Water Reflection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-300 transition-colors">
                  Estate Horticultural Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Consultation
            </div>
            <p className="text-xs text-neutral-300 mb-3 font-light leading-relaxed">
              Private commissions open for Spring & Autumn 2026.
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-emerald-300/70 text-white rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              Request Assessment
            </button>
          </div>
        </div>

        {/* Massive Editorial Headline "LAGO" spanning width in Glass Style */}
        <div className="py-8 sm:py-12 border-b border-white/15 text-center overflow-hidden">
          <span className="text-[21vw] font-serif font-black tracking-tighter glass-lago hover:scale-[1.01] transition-all duration-500 uppercase leading-none block select-none">
            LAGO
          </span>
        </div>

        {/* Bottom Bar with Back-to-Top button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} LAGO Landscapes & Outdoor Architecture Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Commission</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all cursor-pointer ml-2 shadow-sm"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
