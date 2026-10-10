import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, PlusCircle, Search, Shield, ArrowRight, LogIn, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';
import '../styles/modals.css';

export default function MenuDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="drawer-backdrop" onClick={onClose}>
        <motion.div
          className="drawer-panel"
          onClick={(e) => e.stopPropagation()}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="drawer-header">
            <Logo showTextOnMobile={true} />
            <button
              type="button"
              className="drawer-close-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="drawer-content">
            <nav className="drawer-nav-list">
              <Link to="/" onClick={onClose} className="drawer-nav-item">
                <span>Home</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/report" onClick={onClose} className="drawer-nav-item highlight">
                <div className="nav-item-left">
                  <PlusCircle size={18} />
                  <span>Report an Item</span>
                </div>
                <ArrowRight size={16} />
              </Link>
              <Link to="/browse" onClick={onClose} className="drawer-nav-item">
                <div className="nav-item-left">
                  <Search size={18} />
                  <span>Live Reports Feed</span>
                </div>
                <ArrowRight size={16} />
              </Link>
              <Link to="/signin" onClick={onClose} className="drawer-nav-item">
                <div className="nav-item-left">
                  <LogIn size={18} />
                  <span>Sign In</span>
                </div>
                <ArrowRight size={16} />
              </Link>
              <Link to="/admin" onClick={onClose} className="drawer-nav-item">
                <div className="nav-item-left">
                  <LayoutDashboard size={18} />
                  <span>Admin Panel</span>
                </div>
                <ArrowRight size={16} />
              </Link>
            </nav>

            <div className="drawer-info-card">
              <div className="info-card-header">
                <Shield size={16} />
                <h4>Campus Safety Verified</h4>
              </div>
              <p>
                Foundly integrates with your university student ID &amp; security desk network for safe item handoffs.
              </p>
            </div>
          </div>

          <div className="drawer-footer">
            <span className="drawer-footer-brand">Foundly Platform &copy; 2026</span>
            <span className="drawer-status-dot">Live Campus Network</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
