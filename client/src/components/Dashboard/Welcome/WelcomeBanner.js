import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="relative bg-red-100 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div
        className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      >
        <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
            <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
            <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
              <stop stopColor="#E57373" offset="0%" />
              <stop stopColor="#EF5350" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="50%"
              y1="24.537%"
              x2="50%"
              y2="100%"
              id="welcome-c"
            >
              <stop stopColor="#EF5350" offset="0%" />
              <stop stopColor="#E53935" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="rotate(64 36.592 105.604)">
              <mask id="welcome-d" fill="#fff">
                <use xlinkHref="#welcome-a" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-d)"
                d="M64-24h80v152H64z"
              />
            </g>
            <g transform="rotate(-51 91.324 -105.372)">
              <mask id="welcome-f" fill="#fff">
                <use xlinkHref="#welcome-e" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-f)"
                d="M40.333-15.147h50v95h-50z"
              />
            </g>
            <g transform="rotate(44 61.546 392.623)">
              <mask id="welcome-h" fill="#fff">
                <use xlinkHref="#welcome-g" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
              <path
                fill="url(#welcome-c)"
                mask="url(#welcome-h)"
                d="M40.333-15.147h50v95h-50z"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="font-display text-2xl md:text-3xl text-red-700 font-bold mb-1">
          Hello, Hero Alom 👋
        </h1>
        <p className="font-body text-gray-800">
          We provide quality and cost effective Photography and Cinematography
          services.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
