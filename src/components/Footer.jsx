import React from 'react';
import { motion } from 'motion/react';
import Button from './Button';
import Pill from './Pill';
import '../styles/footer.css';

const EASE_CURVE = [0.16, 1, 0.3, 1];

export default function Footer({ onOpenHowItWorks }) {
  return (
    <motion.footer
      className="hero-footer-wrapper"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: EASE_CURVE }}
    >
      <div className="hero-footer-container">
        {/* Left Block */}
        <div className="footer-left-block">
          {/* Subtitle line */}
          <motion.div
            className="footer-subtitle-line"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE_CURVE }}
          >
            <span className="footer-black-dot" aria-hidden="true" />
            <span className="footer-subtitle-text">
              AI-powered lost &amp; found for your campus
            </span>
          </motion.div>

          {/* Heading on two lines */}
          <motion.h1
            className="footer-heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE_CURVE }}
          >
            <span className="heading-line">Lost Something?</span>
            <span className="heading-line">We'll Find It. Fast.</span>
          </motion.h1>

          {/* Buttons */}
          <motion.div
            className="footer-buttons-group"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE_CURVE }}
          >
            <Button to="/report" variant="black">
              Report an Item
            </Button>
            <Button
              variant="outline"
              onClick={onOpenHowItWorks}
            >
              How It Works
            </Button>
          </motion.div>
        </div>

        {/* Right Block */}
        <motion.div
          className="footer-right-block"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE_CURVE }}
        >
          <Pill variant="white-border">Smart Matching</Pill>
          <Pill variant="white-border">Instant Alerts</Pill>
          <Pill variant="white-border">Secure Claims</Pill>
        </motion.div>
      </div>
    </motion.footer>
  );
}
