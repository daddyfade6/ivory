interface LandscapeLogoProps {
  onClick?: () => void;
  className?: string;
}

export default function LandscapeLogo({ onClick, className = '' }: LandscapeLogoProps) {
  return (
    <button
      id="brand-logo-seal"
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      title="LAGO Landscapes & Outdoor Architecture - Click to scroll to top"
    >
      {/* Translucent frosted glass bubble with crisp crest */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-white/35 hover:border-emerald-300/70 hover:shadow-[0_0_28px_rgba(16,185,129,0.35)] transition-all duration-300 overflow-hidden ring-1 ring-white/10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white fill-current p-1 transition-transform duration-500 group-hover:rotate-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          aria-label="LAGO Landscapes Logo"
        >
          {/* Decorative notched outer circle */}
          <path
            d="M 50,2 
               L 52,5 L 56,3 L 57,7 L 61,5 L 62,9 L 66,8 L 66,12 L 71,11 L 70,16 L 75,15 L 74,20 L 79,20 L 77,25 L 82,26 L 79,30 L 84,32 L 81,36 L 86,39 L 82,42 L 87,46 L 82,49 L 87,53 L 82,56 L 86,60 L 81,63 L 84,67 L 79,69 L 82,73 L 77,75 L 79,79 L 74,80 L 75,84 L 70,84 L 71,88 L 66,88 L 66,91 L 61,91 L 61,94 L 56,93 L 55,96 L 50,95 
               L 45,96 L 44,93 L 39,94 L 39,91 L 34,91 L 34,88 L 29,88 L 30,84 L 25,84 L 26,80 L 21,79 L 23,75 L 18,73 L 21,69 L 16,67 L 19,63 L 14,60 L 18,56 L 13,53 L 18,49 L 13,46 L 18,42 L 14,39 L 19,36 L 16,32 L 21,30 L 18,26 L 23,25 L 21,20 L 26,20 L 25,15 L 30,16 L 29,11 L 34,12 L 34,8 L 39,9 L 41,5 L 45,7 L 48,3 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Inner rings */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="39.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5,1.5" />

          {/* Stylized Olive / Cypress Tree & Architectural Compass symbol */}
          <g transform="translate(50, 43) scale(0.65)">
            {/* Crown of tree leaves */}
            <path
              d="M 0,-24 C -12,-24 -22,-14 -20,-2 C -26,4 -22,18 -12,20 C -6,22 6,22 12,20 C 22,18 26,4 20,-2 C 22,-14 12,-24 0,-24 Z"
              fill="currentColor"
            />
            {/* Trunk */}
            <path d="M -3,14 L 3,14 L 5,26 L -5,26 Z" fill="currentColor" />
            {/* Leaf veins highlight */}
            <path d="M 0,-18 L 0,14 M -8,-8 L 0,0 M 8,-8 L 0,0 M -10,6 L 0,10 M 10,6 L 0,10" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>

          {/* Crossed Master Trowels / Compasses */}
          <g transform="translate(50, 60) scale(0.55)">
            <g transform="rotate(35)">
              <path d="M -3,-18 L 3,-18 L 4,-6 L 0,2 L -4,-6 Z" fill="currentColor" />
              <rect x="-1" y="2" width="2" height="10" rx="0.8" fill="currentColor" />
            </g>
            <g transform="rotate(-35)">
              <path d="M -3,-18 L 3,-18 L 4,-6 L 0,2 L -4,-6 Z" fill="currentColor" />
              <rect x="-1" y="2" width="2" height="10" rx="0.8" fill="currentColor" />
            </g>
          </g>

          {/* EST. 1980 curved text */}
          <path id="tree-text-curve" d="M 22,77 A 35,35 0 0,0 78,77" fill="none" />
          <text fontSize="6.2" fontWeight="800" letterSpacing="1.2" fill="currentColor">
            <textPath href="#tree-text-curve" startOffset="50%" textAnchor="middle">
              EST. 1980
            </textPath>
          </text>
        </svg>
      </div>
    </button>
  );
}
