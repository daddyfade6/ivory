import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { LandscapeService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: LandscapeService) => void;
  onOpenConsultation: () => void;
}

export default function ServicesSection({
  onSelectService,
  onOpenConsultation,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden content-visibility-auto"
      style={{
        background: 'linear-gradient(180deg, #080e0b 0%, #0a140f 45%, #0d1712 100%)',
      }}
    >
      {/* Top & Bottom Soft Seam Blenders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080e0b] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d1712] to-transparent z-0" />

      {/* Background ambient lighting with Emerald & Gold radials */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_35%,rgba(16,185,129,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(245,158,11,0.08)_0%,transparent_60%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Bespoke Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-serif">
              Comprehensive Landscape Craft
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md font-light leading-relaxed">
            Integrating ancient Japanese gardening philosophies, Mediterranean drought ecology, and modern structural engineering.
          </p>
        </div>

        {/* Animated Movement to the Left in Repetitive Order (Marquee Loop) */}
        <div className="relative w-full overflow-hidden py-4 -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12">
          {/* Edge fade gradients for seamless entry/exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0a140f] via-[#0a140f]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0a140f] via-[#0a140f]/80 to-transparent z-10" />

          <div className="animate-marquee-services flex gap-6 select-none cursor-grab active:cursor-grabbing">
            {[...SERVICES, ...SERVICES].map((srv, idx) => {
              const cardThemes = [
                { borderHover: 'hover:border-emerald-300/70', shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]', tagColor: 'text-emerald-300' },
                { borderHover: 'hover:border-purple-300/70', shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]', tagColor: 'text-purple-300' },
                { borderHover: 'hover:border-cyan-300/70', shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]', tagColor: 'text-cyan-300' },
                { borderHover: 'hover:border-amber-300/70', shadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]', tagColor: 'text-amber-300' },
              ][idx % 4];

              return (
                <div
                  key={`${srv.id}-${idx}`}
                  onClick={() => onSelectService(srv)}
                  className={`group w-[300px] sm:w-[350px] shrink-0 cursor-pointer rounded-2xl overflow-hidden bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 ${cardThemes.borderHover} ${cardThemes.shadow} backdrop-blur-2xl ring-1 ring-white/10 p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-[0_12px_36px_rgba(0,0,0,0.5)]`}
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="h-44 rounded-xl overflow-hidden mb-4 bg-neutral-900 border border-white/15 relative">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                    </div>

                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors drop-shadow-sm">
                      {srv.title}
                    </h3>
                    <div className={`text-xs ${cardThemes.tagColor} font-mono mt-0.5 font-semibold`}>
                      {srv.subtitle}
                    </div>
                    <p className="text-xs text-neutral-200 mt-2 line-clamp-3 leading-relaxed font-light">
                      {srv.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-4 pt-3 border-t border-white/15 space-y-1.5">
                      {srv.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="flex items-center gap-2 text-[11px] text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 flex items-center justify-between text-xs text-white group-hover:text-emerald-300 font-medium">
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-emerald-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nursery & Production Banner - Rich Translucent Glass Bubble */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-purple-950/30 to-black/50 border border-emerald-400/30 backdrop-blur-2xl ring-1 ring-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Private Specimen Reserve</span>
            </div>
            <div className="text-lg sm:text-xl font-medium text-white mt-1">
              Visit Our 40-Acre Acclimatization Grounds
            </div>
            <p className="text-xs text-neutral-200 max-w-xl mt-1 font-light leading-relaxed">
              Every mature tree, cloud-pruned specimen, and architectural shrub is cultivated and temperature-conditioned under our direct horticultural care.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-semibold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,255,255,0.3)] shrink-0"
          >
            Reserve Specimen Viewing
          </button>
        </div>
      </div>
    </section>
  );
}
