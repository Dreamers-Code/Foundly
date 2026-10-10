import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import Logo from './Logo';
import IconButton from './IconButton';
import Pill from './Pill';
import '../styles/navbar.css';

export default function Navbar({ onOpenMenu }) {
  return (
    <motion.header
      className="navbar-wrapper"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Left Navbar Group */}
        <div className="navbar-left-group">
          {/* Logo & Brand */}
          <div className="nav-interactive-item">
            <Logo />
          </div>

          {/* Menu Button (Black Pill with White Circle Plus Icon) */}
          <div className="nav-interactive-item">
            <Pill
              variant="black"
              interactive={true}
              onClick={onOpenMenu}
              aria-label="Open Menu"
            >
              <IconButton
                ariaLabel="Menu Plus"
                variant="white"
                tabIndex={-1}
                as="span"
              >
                <Plus size={12} strokeWidth={3} />
              </IconButton>
              <span className="pill-menu-text">Menu</span>
            </Pill>
          </div>

          {/* Tags Pill (AI Matching & Campus Network - Hidden on Mobile) */}
          <div className="nav-interactive-item desktop-only">
            <Pill variant="gray" interactive={false}>
              <div className="pill-tag-group">
                <span className="pill-tag-item">AI Matching</span>
                <span className="pill-tag-divider" aria-hidden="true" />
                <span className="pill-tag-item">Campus Network</span>
              </div>
            </Pill>
          </div>
        </div>

        {/* Right Navbar Group */}
        <div className="navbar-right-group desktop-only">
          {/* Live Reports Pill with 4-dot Grid Icon */}
          <Link to="/browse" className="nav-interactive-item live-reports-link">
            <Pill variant="gray" interactive={true}>
              <IconButton
                ariaLabel="Live Reports Feed"
                variant="black"
                tabIndex={-1}
                as="span"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="3" cy="3" r="1.5" />
                  <circle cx="9" cy="3" r="1.5" />
                  <circle cx="3" cy="9" r="1.5" />
                  <circle cx="9" cy="9" r="1.5" />
                </svg>
              </IconButton>
              <span className="pill-label-text">Live Reports</span>
            </Pill>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
