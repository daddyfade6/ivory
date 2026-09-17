import { Trees } from 'lucide-react';

interface ShopCtaProps {
  onClick: () => void;
}

export default function ShopCta({ onClick }: ShopCtaProps) {
  return (
    <button
      id="btn-shop-meat-market"
      type="button"
      onClick={onClick}
      className="group flex items-center justify-center gap-2 sm:gap-2.5 bg-white/20 hover:bg-white/35 active:scale-95 text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-2xl border border-white/40 hover:border-emerald-300/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] ring-1 ring-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 whitespace-nowrap"
      title="Explore bespoke outdoor sanctuaries, specimen trees, and living architecture"
    >
      <span className="tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] whitespace-nowrap">Explore Living Spaces</span>
      <Trees className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0" />
    </button>
  );
}
