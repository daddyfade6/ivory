import { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import { LandscapeProject } from '../types';

interface CreationsSectionProps {
  onSelectProject: (project: LandscapeProject) => void;
}

export default function CreationsSection({ onSelectProject }: CreationsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Zen Sanctuary', 'Estate Grounds', 'Coastal Living', 'Modern Courtyard'];

  const filteredProjects = PROJECTS.filter((p) =>
    selectedFilter === 'All' ? true : p.category === selectedFilter
  );

  return (
    <section
      id="creations"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden content-visibility-auto"
      style={{
        background: 'linear-gradient(180deg, #0c1611 0%, #09120e 45%, #080e0b 100%)',
      }}
    >
      {/* Top & Bottom Soft Seam Blenders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0c1611] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080e0b] to-transparent z-0" />

      {/* Ambient gradient with rich emerald & lavender glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(16,185,129,0.14)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(168,85,247,0.12)_0%,transparent_60%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Selected Creations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-serif">
              Timeless Outdoor Sanctuaries, Crafted Exclusively for You
            </h2>
          </div>

          {/* Filter Pills - Translucent Bubbles with vibrant active highlights */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`text-xs px-4 py-2 rounded-full cursor-pointer transition-all duration-300 whitespace-nowrap backdrop-blur-2xl ring-1 ring-white/10 ${
                    isSelected
                      ? 'bg-white text-neutral-950 font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.3)] scale-105 border border-white'
                      : 'bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white border border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Hero Project Cards - Translucent Glass Bubbles with vibrant hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((proj) => {
            const categoryBadgeStyles: Record<string, string> = {
              'Zen Sanctuary': 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
              'Estate Grounds': 'bg-purple-500/30 text-purple-200 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
              'Coastal Living': 'bg-cyan-500/30 text-cyan-200 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
              'Modern Courtyard': 'bg-amber-500/30 text-amber-200 border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
            };
            const badgeClass = categoryBadgeStyles[proj.category] || 'bg-white/20 text-white border-white/30';

            return (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white/[0.08] hover:bg-white/[0.14] border border-white/25 hover:border-emerald-300/60 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_56px_rgba(16,185,129,0.2)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.015] flex flex-col"
              >
                {/* Image Container with Smooth Zoom Hover */}
                <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badge: Category with Colorful Translucent Glass */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full backdrop-blur-xl border ${badgeClass}`}>
                      {proj.category}
                    </span>
                  </div>

                  {/* Location & Year */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                    <div className="flex items-center gap-1.5 drop-shadow-sm font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 drop-shadow-sm font-medium">
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>{proj.year}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-emerald-300 transition-colors drop-shadow-sm">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-light">
                      {proj.subtitle}
                    </p>
                    <p className="text-xs text-neutral-200 mt-3 line-clamp-2 leading-relaxed font-light">
                      {proj.description}
                    </p>
                  </div>

                  {/* Floating Action Pill */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/15">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.features.slice(0, 2).map((f) => (
                        <span
                          key={f}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-200 border border-white/20"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-2 bg-white/90 hover:bg-white text-black text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-all duration-300 group-hover:scale-105 shadow-[0_4px_16px_rgba(255,255,255,0.25)] shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
                      <span>See Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
