import { Star } from 'lucide-react';

interface RatingBlockProps {
  onOpenReviews: () => void;
  onOpenProductionInfo?: () => void;
}

export default function RatingBlock({
  onOpenReviews,
}: RatingBlockProps) {
  return (
    <div className="flex flex-col items-start select-none">
      {/* 4.9 Score & Stars in Transparent Bubble */}
      <div
        id="rating-card"
        onClick={onOpenReviews}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenReviews()}
        className="group cursor-pointer focus:outline-none p-1 sm:p-1.5 bg-transparent border-0 shadow-none ring-0 transition-all duration-300 hover:scale-105"
        title="Click to view verified 4.9/5 estate owner ratings"
      >
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] group-hover:text-amber-300 transition-colors">
            4.9
          </span>
          <span className="text-xs text-white/90 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">/ 5.0</span>
        </div>

        {/* 5 Amber/Gold Stars with subtle bloom */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 35}ms` }}
            />
          ))}
        </div>

        {/* Label */}
        <div className="text-xs sm:text-sm text-white/95 mt-2 font-normal tracking-wide group-hover:text-white transition-colors flex items-center gap-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          <span>Customer Rating</span>
        </div>
      </div>
    </div>
  );
}

