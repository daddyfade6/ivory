import { useState } from 'react';
import { ArrowRight, Compass, Leaf, Mountain, Sparkles } from 'lucide-react';

interface OurStorySectionProps {
  onOpenConsultation: () => void;
  onOpenStoryDetail: () => void;
}

export default function OurStorySection({
  onOpenConsultation,
  onOpenStoryDetail,
}: OurStorySectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      icon: Leaf,
      title: 'Botanical Equilibrium',
      desc: 'Sourcing centenarian olive trees and micro-climate native flora that flourish with minimal water intervention.',
    },
    {
      icon: Mountain,
      title: 'Monolithic Stonecraft',
      desc: 'Hand-chiseled Roman travertine and weathered volcanic basalt cut with architectural millimeter tolerance.',
    },
    {
      icon: Compass,
      title: 'Four-Season Living',
      desc: 'Designing outdoor rooms with thermal mass fire basins and concealed canopy heaters for year-round sanctuary.',
    },
  ];

  return (
    <section
      id="story"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden content-visibility-auto"
      style={{
        background: 'linear-gradient(180deg, #080d0a 0%, #0b140f 45%, #0d1813 100%)',
      }}
    >
      {/* Top & Bottom Soft Seam Blenders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080d0a] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d1813] to-transparent z-0" />

      {/* Harmonious Color Blend Mesh Overlay with rich Emerald & Violet ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(168,85,247,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_75%,rgba(16,185,129,0.14)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
          <span className="text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase font-semibold">
            Our Story & Design Philosophy
          </span>
        </div>

        {/* Large Editorial Headline & Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Bold Headline & Story Intro */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.18] font-serif">
              <span className="glass-lago-subtle font-black tracking-wider uppercase">LAGO</span> Landscapes creates refined outdoor living and bespoke sanctuaries through a considered balance of <span className="italic text-emerald-200">native ecology</span>, craftsmanship, and timeless design.
            </h2>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Founded on the belief that outdoor spaces should evoke profound tranquility, our multi-disciplinary studio unites landscape architects, master stone masons, and arborists. Every project is conceived as an architectural dialogue between the residence, the sky, and the living earth.
            </p>

            {/* Discover Story Button (Translucent Pill matching screenshot) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenStoryDetail}
                className="group flex items-center gap-2.5 bg-white/15 hover:bg-white/25 active:scale-95 border border-white/30 hover:border-emerald-300/70 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:scale-105 ring-1 ring-white/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-emerald-300" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="text-xs sm:text-sm text-neutral-300 hover:text-emerald-300 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Schedule Private Site Assessment
              </button>
            </div>

            {/* Interactive 3 Pillars with rich colors and translucent bubbles */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                const isSelected = activeTab === idx;
                const colors = [
                  { iconColor: 'text-emerald-400', borderActive: 'border-emerald-400/70', bgActive: 'bg-emerald-500/15', shadow: 'shadow-[0_0_24px_rgba(16,185,129,0.25)]' },
                  { iconColor: 'text-amber-400', borderActive: 'border-amber-400/70', bgActive: 'bg-amber-500/15', shadow: 'shadow-[0_0_24px_rgba(245,158,11,0.25)]' },
                  { iconColor: 'text-purple-400', borderActive: 'border-purple-400/70', bgActive: 'bg-purple-500/15', shadow: 'shadow-[0_0_24px_rgba(168,85,247,0.25)]' },
                ][idx];

                return (
                  <div
                    key={p.title}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-2xl ring-1 ring-white/5 ${
                      isSelected
                        ? `${colors.bgActive} ${colors.borderActive} ${colors.shadow} scale-[1.02]`
                        : 'bg-white/[0.07] border-white/20 hover:border-white/40 hover:bg-white/[0.14]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${colors.iconColor} mb-2.5 drop-shadow-[0_0_8px_currentColor]`} />
                    <h3 className="text-xs font-semibold text-white tracking-wide">{p.title}</h3>
                    <p className="text-[11px] text-neutral-300 mt-1 line-clamp-3 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Photography Visual with Translucent Bubble Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/25 bg-neutral-900 shadow-[0_16px_48px_rgba(0,0,0,0.6)] group">
              <img
                src="/images/sanctuary-1.webp"
                alt="Bespoke outdoor stone architecture and olive tree"
                loading="lazy"
                decoding="async"
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Inset Translucent Floating Note Card Bubble */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-2xl border border-white/30 text-xs sm:text-sm text-neutral-100 shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-white/10 flex items-center justify-between transition-all duration-300">
                <div>
                  <div className="text-[10px] text-emerald-300 font-mono uppercase tracking-wider font-semibold">
                    Sanctuary Case 04
                  </div>
                  <div className="font-semibold text-white text-sm mt-0.5 drop-shadow-sm">
                    Private Villa Estate, Montecito
                  </div>
                  <div className="text-[11px] text-neutral-300">
                    Hand-chiseled limestone steps & 180-year-old olive tree canopy
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-emerald-400 group-hover:text-black group-hover:border-emerald-300 transition-all shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
