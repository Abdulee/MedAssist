
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 280 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Med Assist Logo"
    >
      <defs>
        <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2DD4BF' }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6' }} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="28"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="url(#ecg-gradient)"
      >
        Med
      </text>
      <path
        d="M65 20 H80 L85 28 L95 12 L105 32 L115 18 L125 25 L135 15 L145 20 H160"
        stroke="url(#ecg-gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="165"
        y="28"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="url(#ecg-gradient)"
      >
        Assist
      </text>
    </svg>
  );
};

export default Logo;
