import { MapPin, Phone } from 'lucide-react';

interface ContactButtonsProps {
  onOpenLocation: () => void;
  onOpenPhone: () => void;
}

export default function ContactButtons({
  onOpenLocation,
  onOpenPhone,
}: ContactButtonsProps) {
  return (
    <div className="flex flex-col items-start select-none">
      {/* Label: Get in Touch: transparent bubble */}
      <div className="inline-flex items-center gap-2 px-0 py-1 mb-2 bg-transparent border-0 text-xs sm:text-sm text-white font-medium shadow-none select-none">
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping inline-block"></span>
        <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-medium tracking-wide">Get in Touch:</span>
      </div>

      {/* Two Translucent Ruby Red Glass Round Buttons with glowing hover */}
      <div className="flex items-center gap-3">
        {/* Location / Studio Button */}
        <button
          id="btn-contact-location"
          type="button"
          onClick={onOpenLocation}
          aria-label="View Botanical Design Studio & Nursery Location"
          title="Visit our design studio and specimen grounds"
          className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-500/50 hover:bg-rose-500/80 active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_24px_rgba(244,63,94,0.45)] hover:shadow-[0_0_32px_rgba(244,63,94,0.8)] border border-rose-300/50 backdrop-blur-xl hover:scale-110 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
        >
          <MapPin className="w-5 h-5 fill-white stroke-none transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
        </button>

        {/* Phone Button */}
        <button
          id="btn-contact-phone"
          type="button"
          onClick={onOpenPhone}
          aria-label="Call LAGO Landscape Architects"
          title="Speak directly with an architectural director"
          className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-500/50 hover:bg-rose-500/80 active:scale-95 text-white flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_24px_rgba(244,63,94,0.45)] hover:shadow-[0_0_32px_rgba(244,63,94,0.8)] border border-rose-300/50 backdrop-blur-xl hover:scale-110 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
        >
          <Phone className="w-5 h-5 fill-white stroke-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
        </button>
      </div>
    </div>
  );
}
