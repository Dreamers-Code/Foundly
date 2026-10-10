import React, { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/hero-video.css';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4';

export default function HeroVideo() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="hero-video-viewport" aria-hidden="true">
      <motion.div
        className="hero-video-wrapper"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── SVG Hand Art Fallback (always visible beneath video) ── */}
        <div className={`hand-theme-backdrop ${videoReady ? 'video-active' : ''}`}>
          <div className="radial-light-bg" />

          {/* Dot grid */}
          <svg className="dot-grid-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dots" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <circle cx="24" cy="24" r="1.2" fill="rgba(0,0,0,0.13)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>

          {/* Hand & Connection illustration */}
          <svg
            className="hand-illustration-svg"
            viewBox="0 0 1200 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="larm-grad" x1="0" y1="600" x2="600" y2="300" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="rarm-grad" x1="1200" y1="80" x2="600" y2="360" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
              </linearGradient>
              <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Left arm */}
            <path d="M -80 700 C 80 650, 200 590, 320 530 C 390 495, 440 465, 490 438 C 510 426, 525 416, 540 408 L 548 402 C 544 412, 535 425, 520 440 C 500 458, 475 472, 445 488 C 395 515, 335 546, 255 582 C 160 624, 60 658, -80 700 Z" fill="url(#larm-grad)" />
            <path d="M -80 620 C 60 575, 200 510, 330 450 C 395 420, 445 398, 485 376 C 508 363, 525 352, 548 340" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 548 340 C 560 318, 572 300, 576 282 C 578 270, 572 260, 562 262 C 552 264, 546 278, 544 295 C 540 315, 542 330, 548 340 Z" fill="#111111" opacity="0.88" />
            <path d="M 548 340 C 556 310, 564 285, 566 265 C 567 252, 560 242, 550 245 C 540 248, 534 264, 532 285 C 530 308, 536 326, 548 340 Z" fill="#1a1a1a" opacity="0.82" />
            <path d="M 548 340 C 542 312, 538 288, 538 268 C 538 255, 544 248, 552 250 C 558 252, 562 264, 562 282" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M 524 365 C 510 360, 498 348, 498 332 C 498 318, 508 308, 520 312 C 532 316, 538 330, 536 346 C 534 358, 530 366, 524 365 Z" fill="#111111" opacity="0.75" />

            {/* Right arm */}
            <path d="M 1280 -20 C 1120 30, 1000 90, 880 150 C 810 185, 760 215, 710 242 C 688 254, 673 264, 658 272 L 650 278 C 654 268, 663 255, 678 240 C 698 222, 723 208, 753 192 C 803 165, 863 134, 943 98 C 1038 56, 1138 22, 1280 -20 Z" fill="url(#rarm-grad)" />
            <path d="M 1280 60 C 1140 105, 1000 170, 870 230 C 805 260, 755 282, 715 304 C 692 317, 675 328, 652 340" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 652 340 C 640 362, 628 380, 624 398 C 622 410, 628 420, 638 418 C 648 416, 654 402, 656 385 C 660 365, 658 350, 652 340 Z" fill="#111111" opacity="0.88" />
            <path d="M 652 340 C 644 370, 636 395, 634 415 C 633 428, 640 438, 650 435 C 660 432, 666 416, 668 395 C 670 372, 664 354, 652 340 Z" fill="#1a1a1a" opacity="0.82" />
            <path d="M 652 340 C 658 368, 662 392, 662 412 C 662 425, 656 432, 648 430 C 642 428, 638 416, 638 398" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M 676 315 C 690 320, 702 332, 702 348 C 702 362, 692 372, 680 368 C 668 364, 662 350, 664 334 C 666 322, 670 314, 676 315 Z" fill="#111111" opacity="0.75" />

            {/* Center Found node */}
            <circle cx="600" cy="340" r="72" stroke="#000" strokeWidth="1" strokeOpacity="0.12" className="pulse-ring-outer" />
            <circle cx="600" cy="340" r="52" stroke="#000" strokeWidth="1.5" strokeOpacity="0.22" className="pulse-ring-mid" />
            <circle cx="600" cy="340" r="36" stroke="#000" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="600" cy="340" r="28" fill="#0a0a0a" filter="url(#node-glow)" />
            <g transform="translate(600 340) rotate(-35)">
              <rect x="-13" y="-13" width="13" height="13" rx="3" fill="white" />
              <rect x="-5" y="-14" width="13" height="13" rx="3" fill="white" fillOpacity="0.75" />
            </g>
            <circle cx="566" cy="308" r="3" fill="#000" opacity="0.45" />
            <circle cx="634" cy="372" r="3" fill="#000" opacity="0.45" />
            <circle cx="600" cy="295" r="2.5" fill="#000" opacity="0.3" />
            <circle cx="600" cy="385" r="2.5" fill="#000" opacity="0.3" />
          </svg>
        </div>

        {/* ── Primary Background Video (CloudFront) ── */}
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          loop
          onCanPlay={() => setVideoReady(true)}
          className={`hero-video-element ${videoReady ? 'is-ready' : ''}`}
        />
      </motion.div>
    </div>
  );
}
