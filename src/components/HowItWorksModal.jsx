import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ShieldCheck, MapPin, Search } from 'lucide-react';
import '../styles/modals.css';

export default function HowItWorksModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="modal-header">
            <div className="modal-title-group">
              <span className="modal-badge">
                <Sparkles size={14} /> AI Intelligence
              </span>
              <h2>How Foundly Works</h2>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            <p className="modal-intro">
              Foundly connects lost campus items with their rightful owners using spatial tags and computer vision AI.
            </p>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-icon"><Search size={20} /></div>
                <h3>Snap &amp; Report</h3>
                <p>Upload a photo or quick description. Our AI extracts key visual signatures like color, brand, and wear patterns.</p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-icon"><MapPin size={20} /></div>
                <h3>Spatial Matching</h3>
                <p>Location vectors map where the item was lost or found across campus buildings, libraries, and quad areas.</p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-icon"><ShieldCheck size={20} /></div>
                <h3>Instant Claim</h3>
                <p>Match score alerts both parties instantly. Verify ownership via custom verification questions or serial match.</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="modal-primary-btn" onClick={onClose}>
              Got It
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
