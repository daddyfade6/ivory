import { useState, FormEvent } from 'react';
import { ArrowUpRight, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { GALLERY_STRIP } from '../data';

interface InquirySectionProps {
  onOpenConsultationModal: () => void;
}

export default function InquirySection({ onOpenConsultationModal }: InquirySectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    scope: 'Full Estate Master Plan',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 2xl:px-16 text-white overflow-hidden content-visibility-auto"
      style={{
        background: 'linear-gradient(180deg, #0d1712 0%, #0a110d 50%, #060907 100%)',
      }}
    >
      {/* Top & Bottom Soft Seam Blenders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d1712] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060907] to-transparent z-0" />

      {/* Harmonious Color Mesh Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(168,85,247,0.08)_0%,transparent_50%)]" />

      <div className="max-w-7xl lg:max-w-[92vw] xl:max-w-[94vw] 2xl:max-w-[95vw] mx-auto relative z-10">
        {/* Top Callout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 mb-3 bg-white/10 backdrop-blur-xl border border-emerald-400/40 px-3.5 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Begin Your Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-serif leading-tight">
            Begin your journey with Lago Bespoke and experience a personalized approach to landscape architecture and living outdoor spaces.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-4 font-light max-w-xl mx-auto leading-relaxed">
            Our architectural directors accept a strictly limited registry of estate commissions each season to maintain meticulous craft standards.
          </p>
        </div>

        {/* Interactive Consultation Form in Translucent Glass Bubble */}
        <div className="max-w-2xl mx-auto bg-white/[0.08] hover:bg-white/[0.11] backdrop-blur-2xl border border-white/25 p-6 sm:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10 mb-20 transition-all duration-300">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(16,185,129,0.4)]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-white font-serif">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || 'valued patron'}. Our senior landscape architect will review your property parameters and reach out within 24 hours to coordinate your confidential site assessment.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-emerald-300 hover:text-white underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Genevieve Cross"
                    className="w-full bg-white/[0.07] border border-white/20 focus:border-emerald-400 focus:bg-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@estate.com"
                    className="w-full bg-white/[0.07] border border-white/20 focus:border-emerald-400 focus:bg-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Estate Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Montecito / Aspen / Malibu"
                    className="w-full bg-white/[0.07] border border-white/20 focus:border-emerald-400 focus:bg-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Scope of Work
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 focus:border-emerald-400 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-all shadow-inner cursor-pointer"
                  >
                    <option value="Full Estate Master Plan" className="bg-neutral-900">Full Estate Master Plan</option>
                    <option value="Zen Courtyard & Reflection Pool" className="bg-neutral-900">Zen Courtyard & Reflection Pool</option>
                    <option value="Architectural Terraces & Hardscape" className="bg-neutral-900">Architectural Terraces & Hardscape</option>
                    <option value="Specimen Tree Procurement" className="bg-neutral-900">Specimen Tree Procurement</option>
                    <option value="Four-Season Horticultural Program" className="bg-neutral-900">Four-Season Horticultural Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Project Notes & Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details about terrain, privacy goals, favorite botanical textures, or upcoming construction timeline..."
                  className="w-full bg-white/[0.07] border border-white/20 focus:border-emerald-400 focus:bg-white/[0.12] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none transition-all resize-none shadow-inner"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strictly confidential 24-hr response</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 active:scale-95 text-neutral-950 text-xs font-semibold px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Book Private Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Animated Movement to the Left in Repetitive Order (Marquee Loop) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Living Sanctuaries Gallery</span>
            </span>
            <button
              type="button"
              onClick={onOpenConsultationModal}
              className="text-xs text-emerald-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>View Full Lookbook</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="relative w-full overflow-hidden py-2 -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12">
            {/* Edge fade masks for seamless carousel motion */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0a110d] via-[#0a110d]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0a110d] via-[#0a110d]/80 to-transparent z-10" />

            <div className="animate-marquee-gallery flex gap-4 select-none cursor-grab active:cursor-grabbing">
              {[...GALLERY_STRIP, ...GALLERY_STRIP].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={onOpenConsultationModal}
                  className="group relative w-56 sm:w-64 h-52 sm:h-64 shrink-0 rounded-2xl overflow-hidden border border-white/20 hover:border-emerald-300/70 bg-neutral-900 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.03] ring-1 ring-white/10 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-[10px] font-mono text-emerald-300 font-bold">
                      0{((idx) % GALLERY_STRIP.length) + 1}
                    </div>
                    <div className="text-xs font-medium text-white truncate drop-shadow-sm">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
