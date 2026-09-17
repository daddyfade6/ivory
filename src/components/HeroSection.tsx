import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import RatingBlock from './RatingBlock';
import CustomersBlock from './CustomersBlock';
import ContactButtons from './ContactButtons';
import ShopCta from './ShopCta';

interface HeroSectionProps {
  onOpenReviews: () => void;
  onOpenProductionInfo: () => void;
  onOpenCustomers: () => void;
  onOpenQualityInfo: () => void;
  onOpenLocation: () => void;
  onOpenPhone: () => void;
  onOpenMarket: () => void;
  onOpenConsultation: () => void;
}

export default function HeroSection({
  onOpenReviews,
  onOpenProductionInfo,
  onOpenCustomers,
  onOpenQualityInfo,
  onOpenLocation,
  onOpenPhone,
  onOpenMarket,
  onOpenConsultation,
}: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-between overflow-hidden select-none font-sans h-[100dvh] min-h-[580px] max-h-[100dvh] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-22 md:pt-24 lg:pt-20 xl:pt-22 pb-3 sm:pb-4 md:pb-5 lg:pb-4 xl:pb-5"
      style={{
        background: 'radial-gradient(ellipse at 50% 25%, #0d1712 0%, #09100c 50%, #080d0a 100%)',
      }}
    >
      {/* ============================================================ */}
      {/* 1. HERO LIVING IMAGE CANVAS (Full-Bleed Across All Screens)   */}
      {/* High-priority WebP background image                           */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <img
          src="/images/hero-architectural-sanctuary.webp"
          alt="LAGO Botanical Architecture and Bespoke Outdoor Living Sanctuary"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 scale-105 ${
            imageLoaded ? 'opacity-90 xl:opacity-85' : 'opacity-70 blur-sm'
          }`}
        />

        {/* ATMOSPHERIC COLOR LAYERS (Optimized single hardware-accelerated layer) */}
        <div 
          className="pointer-events-none absolute inset-0 gpu-layer"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 75% 25%, rgba(168, 85, 247, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 25% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 55%),
              radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.10) 0%, transparent 45%),
              radial-gradient(circle at center, transparent 0%, rgba(5, 8, 6, 0.45) 85%)
            `,
          }}
        />

        {/* SMOOTH BLEND GRADIENT: Soft feathered transition at bottom into the next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44 md:h-52 bg-gradient-to-t from-[#080d0a] via-[#080d0a]/75 to-transparent z-10 pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* 2. HERO CONTENT FLOW                                         */}
      {/* - Top: Live grounds badge & sleek "Start Your Project" card  */}
      {/* - Center: Open scenic living canvas view                     */}
      {/* - Lower: Rating & Customers Bar                              */}
      {/* - Directly Below Rating: The monumental LAGO wordmark        */}
      {/* - Bottom: Contact & Explore Actions                          */}
      {/* ============================================================ */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-between max-w-7xl lg:max-w-[94vw] xl:max-w-[96vw] 2xl:max-w-[97vw] mx-auto h-full">
        
        {/* UPPER ROW: Left Live Badge + Right Project Card */}
        <div className="w-full flex items-start justify-between gap-3 pt-1">
          
          {/* Left: Live Sanctuary Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/20 text-white text-[11px] font-medium shadow-md select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">Live Sanctuary & Living Grounds</span>
          </div>

          {/* Right Column: Translucent Start Project Glass Card */}
          <div className="flex flex-col items-end gap-2 max-w-xs sm:max-w-sm md:max-w-md w-full ml-auto">
            {/* Sleek Translucent Glass Card */}
            <div
              className="w-full bg-black/35 hover:bg-black/45 backdrop-blur-xl border border-white/20 hover:border-emerald-400/40 rounded-2xl p-3 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-300 animate-pulse shrink-0" />
                  <span>Living Architecture</span>
                </div>
                <span className="text-[10px] text-neutral-300 font-mono">Bespoke Design</span>
              </div>

              <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                Begin your journey with <span className="glass-lago-subtle font-black">Lago</span> Bespoke outdoor living.
              </h2>
              <p className="text-[11px] text-white/80 mt-1 leading-relaxed font-light drop-shadow-sm hidden sm:block">
                Combining architectural vision with botanical craft into timeless sanctuaries.
              </p>

              <div className="mt-2.5 flex items-center justify-between gap-2 pt-1.5 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="flex items-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 active:scale-95 text-neutral-950 text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 inline-block animate-ping" />
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
                <span className="text-[10px] text-emerald-300/80 font-mono tracking-wider">Sanctuaries</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER AREA: Generous Open Living Video Viewport */}
        <div className="flex-1 min-h-2 sm:min-h-4" />

        {/* LOWER AREA: Rating Metrics, LAGO (Just Below Rating), and Actions */}
        <div className="w-full flex flex-col gap-1 sm:gap-1.5 md:gap-2">
          
          {/* Trust Metrics Bar: RatingBlock & CustomersBlock */}
          <div className="relative z-10 w-full flex items-end justify-between gap-4 px-1 py-0.5 bg-transparent border-0 shadow-none">
            <div className="w-auto">
              <RatingBlock
                onOpenReviews={onOpenReviews}
                onOpenProductionInfo={onOpenProductionInfo}
              />
            </div>

            <div className="w-auto flex justify-end">
              <CustomersBlock
                onOpenCustomers={onOpenCustomers}
                onOpenQualityInfo={onOpenQualityInfo}
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* LAGO WORDMARK - POSITIONED DIRECTLY BELOW THE RATING          */}
          {/* ============================================================ */}
          <div
            id="hero-lago-title"
            className="relative z-10 w-full my-0.5 sm:my-1 select-none"
          >
            <div className="flex flex-col items-start leading-none">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.2rem] 2xl:text-[8.5rem] font-black tracking-tighter uppercase font-serif glass-lago select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] leading-[0.82]">
                LAGO
              </h1>
              <div className="flex items-center gap-2 mt-1 sm:mt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-mono tracking-[0.22em] lg:tracking-[0.26em] text-emerald-300 uppercase font-semibold">
                  Botanical Architecture & Living Grounds
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM ACTIONS: Get in Touch & Explore CTA */}
          <footer
            id="hero-footer"
            className="relative z-20 w-full flex flex-row items-center justify-between gap-4 pt-1 sm:pt-1.5"
          >
            <div>
              <ContactButtons
                onOpenLocation={onOpenLocation}
                onOpenPhone={onOpenPhone}
              />
            </div>

            <div>
              <ShopCta onClick={onOpenMarket} />
            </div>
          </footer>
        </div>
      </div>

      {/* Seamless Seam Transition Feather into Our Story */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-b from-transparent to-[#080d0a] z-10" />
    </section>
  );
}
