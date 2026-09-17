import { Search, User } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
}

export function LoginButton({ onOpenLogin }: { onOpenLogin: () => void }) {
  return (
    <button
      id="header-login-button"
      type="button"
      onClick={onOpenLogin}
      className="group flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/30 hover:border-emerald-300/50 text-white text-xs sm:text-sm font-medium px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 shrink-0"
      title="Client Portal Access"
    >
      <span className="tracking-wide hidden sm:inline md:hidden xl:inline">Client Portal</span>
      <span className="tracking-wide hidden md:inline xl:hidden">Portal</span>
      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 group-hover:text-emerald-200 transition-colors shrink-0" />
    </button>
  );
}

export default function Navbar({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenMenu,
}: NavbarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', target: '#hero' },
    { name: 'Our Story', target: '#story' },
    { name: 'Process', target: '#process' },
    { name: 'Creations', target: '#creations' },
    { name: 'Services', target: '#services' },
    { name: 'Contact', target: '#contact' },
  ];

  const handleNavClick = (linkName: string, targetId: string) => {
    onSelectTab(linkName);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="floating-navbar"
      aria-label="Main Navigation"
      className="flex items-center gap-1 sm:gap-1 md:gap-1.5 lg:gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-2xl border border-white/30 hover:border-white/50 rounded-full p-1 sm:px-1.5 md:px-2 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-all duration-300 max-w-[96vw] sm:max-w-none shrink-0"
    >
      {/* 4-Dots Launcher / Menu Button */}
      <button
        id="nav-launcher-button"
        type="button"
        onClick={onOpenMenu}
        aria-label="Toggle Landscape Menu"
        title="Landscape Collections & Specimen Nursery"
        className="w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-white/25 hover:bg-white/40 active:scale-95 border border-white/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 shadow-sm"
      >
        <div className="grid grid-cols-2 gap-0.5 sm:gap-0.5 md:gap-1 w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 p-0.5">
          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full block shadow-sm"></span>
          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-emerald-300 rounded-full block shadow-sm"></span>
          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-300 rounded-full block shadow-sm"></span>
          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-amber-300 rounded-full block shadow-sm"></span>
        </div>
      </button>

      {/* Nav Links: 
          On Mobile (< sm): Fit cleanly with core navigation tabs.
          On Tablet & Desktop (sm+): Display all 6 categories with complete typography and zero clipping.
      */}
      <div className="flex items-center space-x-0.5 sm:space-x-0.5 md:space-x-1 px-0.5 sm:px-1">
        {navLinks.map((link) => {
          const isActive = activeTab === link.name;
          const isHovered = hoveredTab === link.name;
          const isSecondaryOnMobile = ['Our Story', 'Process', 'Contact'].includes(link.name);

          return (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => handleNavClick(link.name, link.target)}
              onMouseEnter={() => setHoveredTab(link.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium px-2 sm:px-2 md:px-2.5 lg:px-3.5 py-1 sm:py-1 md:py-1.5 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none shrink-0 ${
                isSecondaryOnMobile ? 'hidden sm:inline-block' : 'inline-block'
              } ${
                isActive
                  ? 'text-white font-semibold bg-white/25 border border-white/30 shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                  : isHovered
                  ? 'text-white bg-white/15'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          );
        })}
      </div>

      {/* Circular Search Button - Translucent */}
      <button
        id="nav-search-button"
        type="button"
        onClick={onOpenSearch}
        aria-label="Search landscape projects and nursery"
        title="Search projects & plant varieties"
        className="w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 hover:border-white/50 flex items-center justify-center text-white cursor-pointer transition-all duration-300 active:scale-95 hover:scale-105 shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
      >
        <Search className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 stroke-[2.2] text-white" />
      </button>
    </nav>
  );
}
