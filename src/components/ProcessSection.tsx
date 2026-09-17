import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  const [activeStepId, setActiveStepId] = useState<string>(PROCESS_STEPS[1].id);

  const activeStep = PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden content-visibility-auto"
      style={{
        background: 'linear-gradient(180deg, #0d1813 0%, #0f1a15 45%, #0c1611 100%)',
      }}
    >
      {/* Top & Bottom Soft Seam Blenders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d1813] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c1611] to-transparent z-0" />

      {/* Radial Glow Highlight with Emerald & Lavender Accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(16,185,129,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_65%,rgba(168,85,247,0.1)_0%,transparent_60%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        {/* Header Label */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-emerald-300 uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Process & Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mt-1.5 font-serif">
              Our Architectural Method
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md font-light leading-relaxed">
            From initial topographical forensics through decades of horticultural stewardship, our process ensures enduring vitality and effortless elegance.
          </p>
        </div>

        {/* Process Steps Accordion & Dynamic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Steps List */}
          <div className="lg:col-span-7 space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepId === step.id;
              const stepColors = [
                { text: 'text-emerald-400', border: 'border-emerald-400/60', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40', shadow: 'shadow-[0_0_28px_rgba(16,185,129,0.2)]' },
                { text: 'text-purple-400', border: 'border-purple-400/60', badge: 'bg-purple-500/20 text-purple-300 border-purple-400/40', shadow: 'shadow-[0_0_28px_rgba(168,85,247,0.2)]' },
                { text: 'text-amber-400', border: 'border-amber-400/60', badge: 'bg-amber-500/20 text-amber-300 border-amber-400/40', shadow: 'shadow-[0_0_28px_rgba(245,158,11,0.2)]' },
                { text: 'text-cyan-400', border: 'border-cyan-400/60', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40', shadow: 'shadow-[0_0_28px_rgba(6,182,212,0.2)]' },
              ][idx % 4];

              return (
                <div
                  key={step.id}
                  id={`process-step-${step.id}`}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-2xl ring-1 ring-white/10 ${
                    isActive
                      ? `bg-white/[0.14] ${stepColors.border} ${stepColors.shadow} scale-[1.01]`
                      : 'bg-white/[0.06] hover:bg-white/[0.12] border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold ${stepColors.text}`}>
                        {step.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full transition-colors border ${
                        isActive
                          ? `${stepColors.badge} font-semibold shadow-sm`
                          : 'bg-white/10 text-neutral-300 border-white/15'
                      }`}
                    >
                      Phase {step.num}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-200 mt-3 font-light leading-relaxed">
                    {step.summary}
                  </p>

                  {/* Expanded details when active */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-white/15 text-xs text-neutral-200 leading-relaxed animate-in fade-in duration-300 space-y-3">
                      <p>{step.details}</p>
                      <div className={`flex items-center gap-2 ${stepColors.text} text-xs font-medium`}>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Proprietary in-house execution with zero subcontracting</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-emerald-300/70 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:scale-105 ring-1 ring-white/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Commission Your Site Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </button>
            </div>
          </div>

          {/* Active Step Photography Preview */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-white/25 bg-neutral-900 shadow-[0_16px_48px_rgba(0,0,0,0.6)] group">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Inset Translucent Step Badge Bubble */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-2xl border border-white/30 text-white shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-widest font-semibold">
                    Phase {activeStep.num} Preview
                  </span>
                  <span className="text-xs font-semibold text-white drop-shadow-sm">{activeStep.title}</span>
                </div>
                <div className="text-xs text-neutral-200 mt-1 line-clamp-2">
                  {activeStep.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
