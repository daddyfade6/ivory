interface ButcherLogoProps {
  onClick?: () => void;
  className?: string;
}

export default function ButcherLogo({ onClick, className = '' }: ButcherLogoProps) {
  return (
    <button
      id="butcher-shop-logo"
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      title="Heritage Butcher & Meat Market - Est. 1980"
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md shadow-black/60 overflow-hidden">
        {/* Scalloped / saw-tooth edge ring */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-black fill-current p-1"
          aria-label="Meat Market Logo"
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

          {/* Inner ring */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5,1.5" />

          {/* Steer / Bull Head Silhouette */}
          <g transform="translate(50, 42) scale(0.68)">
            {/* Horns */}
            <path
              d="M -24,-14 C -36,-19 -42,-8 -40,1 C -38,-5 -30,-12 -18,-8 Z"
              fill="currentColor"
            />
            <path
              d="M 24,-14 C 36,-19 42,-8 40,1 C 38,-5 30,-12 18,-8 Z"
              fill="currentColor"
            />

            {/* Skull / Face */}
            <path
              d="M -16,-10 L 16,-10 L 13,-2 L 9,8 L 5,16 L -5,16 L -9,8 L -13,-2 Z"
              fill="currentColor"
            />

            {/* Brow & Muzzle details */}
            <circle cx="-6" cy="-2" r="1.8" fill="white" />
            <circle cx="6" cy="-2" r="1.8" fill="white" />
            <ellipse cx="0" cy="11" rx="4" ry="2.5" fill="white" />
            <circle cx="-1.8" cy="11" r="0.8" fill="currentColor" />
            <circle cx="1.8" cy="11" r="0.8" fill="currentColor" />
          </g>

          {/* Crossed Cleavers */}
          <g transform="translate(50, 58) scale(0.6)">
            {/* Cleaver 1 (pointing up-right) */}
            <g transform="rotate(38)">
              {/* Blade */}
              <path d="M -4,-22 L 6,-22 L 7,-8 L -4,-8 Z" fill="currentColor" />
              {/* Hole in blade */}
              <circle cx="2" cy="-18" r="1" fill="white" />
              {/* Handle */}
              <rect x="-1" y="-8" width="2" height="12" rx="0.8" fill="currentColor" />
            </g>

            {/* Cleaver 2 (pointing up-left) */}
            <g transform="rotate(-38)">
              {/* Blade */}
              <path d="M -6,-22 L 4,-22 L 4,-8 L -7,-8 Z" fill="currentColor" />
              {/* Hole in blade */}
              <circle cx="-2" cy="-18" r="1" fill="white" />
              {/* Handle */}
              <rect x="-1" y="-8" width="2" height="12" rx="0.8" fill="currentColor" />
            </g>
          </g>

          {/* EST. 1980 curved text */}
          <path id="text-curve" d="M 24,76 A 34,34 0 0,0 76,76" fill="none" />
          <text fontSize="6.5" fontWeight="800" letterSpacing="1.2" fill="currentColor">
            <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
              EST. 1980
            </textPath>
          </text>
        </svg>
      </div>
    </button>
  );
}
