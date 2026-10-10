import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logo.css';

export default function Logo({ showTextOnMobile = false }) {
  return (
    <Link to="/" className="brand-logo" aria-label="Foundly Homepage">
      <div className="logo-svg-wrapper">
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform="rotate(-35 16 16)">
            {/* First rotated rounded rectangle */}
            <rect x="5" y="10" width="13" height="13" rx="3.5" fill="#000000" />
            {/* Second overlapping rotated rounded rectangle */}
            <rect x="14" y="9" width="13" height="13" rx="3.5" fill="#000000" fillOpacity="0.85" />
          </g>
        </svg>
      </div>
      <span className={`brand-text ${showTextOnMobile ? 'visible-mobile' : ''}`}>
        Foundly
      </span>
    </Link>
  );
}
