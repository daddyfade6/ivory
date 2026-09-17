import { Award } from 'lucide-react';

interface CustomersBlockProps {
  onOpenCustomers: () => void;
  onOpenQualityInfo?: () => void;
}

export default function CustomersBlock({
  onOpenCustomers,
}: CustomersBlockProps) {
  const avatars = [
    {
      name: 'Eleanor Vance',
      src: '/images/avatar-1.webp',
      fallback: 'EV',
    },
    {
      name: 'Clara Delacroix',
      src: '/images/avatar-3.webp',
      fallback: 'CD',
    },
    {
      name: 'James Mercer',
      src: '/images/avatar-2.webp',
      fallback: 'JM',
    },
  ];

  return (
    <div className="flex flex-col items-end text-right select-none">
      {/* 5K+ & Overlapping Avatars in Transparent Bubble */}
      <div
        id="customers-card"
        onClick={onOpenCustomers}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenCustomers()}
        className="group cursor-pointer focus:outline-none flex flex-col items-end p-1 sm:p-1.5 bg-transparent border-0 shadow-none ring-0 transition-all duration-300 hover:scale-105"
        title="Over 5,000+ satisfied private residences & estate owners"
      >
        <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] group-hover:text-purple-300 transition-colors">
          5K+
        </div>

        {/* 3 Overlapping Avatar Images with clean ring */}
        <div className="flex items-center -space-x-2 mt-2">
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/80 overflow-hidden bg-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-purple-300"
              style={{ zIndex: 10 - idx, transitionDelay: `${idx * 40}ms` }}
            >
              <img
                src={avatar.src}
                alt={avatar.name}
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'text-[10px]', 'text-white', 'font-medium');
                    target.parentElement.innerText = avatar.fallback;
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Label */}
        <div className="text-xs sm:text-sm text-white/95 mt-2 font-normal tracking-wide group-hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          Satisfied Customers
        </div>
      </div>
    </div>
  );
}

