import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Upload, Sparkles, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/pages.css';

export default function Report() {
  const navigate = useNavigate();
  const [reportType, setReportType] = useState('lost');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('electronics');
  const [location, setLocation] = useState('library');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="page-header-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <Logo showTextOnMobile={true} />
        </div>
      </header>

      <main className="page-main-content">
        <motion.div
          className="report-card-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {isSubmitted ? (
            <div className="success-state">
              <div className="success-icon-badge">
                <CheckCircle2 size={36} />
              </div>
              <h2>Report Registered!</h2>
              <p>
                Foundly AI is now scanning campus databases and user uploads for matches.
              </p>
              <div className="ai-match-running">
                <Sparkles size={16} className="sparkle-anim" />
                <span>AI Neural Scanner Active &mdash; 98.4% Confidence Matrix</span>
              </div>
              <div className="success-action-group">
                <button
                  type="button"
                  className="btn-pill btn-variant-black"
                  onClick={() => navigate('/browse')}
                >
                  View Live Campus Feed
                </button>
                <button
                  type="button"
                  className="btn-pill btn-variant-outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setTitle('');
                    setDescription('');
                    setPreviewImage(null);
                  }}
                >
                  Submit Another Report
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="report-form">
              <div className="form-title-block">
                <span className="page-badge">Report Form</span>
                <h1>Report a Lost or Found Item</h1>
                <p>Provide details to activate instant AI spatial and visual matching.</p>
              </div>

              {/* Toggle Lost vs Found */}
              <div className="report-type-toggle">
                <button
                  type="button"
                  className={`type-toggle-btn ${reportType === 'lost' ? 'active' : ''}`}
                  onClick={() => setReportType('lost')}
                >
                  I Lost Something
                </button>
                <button
                  type="button"
                  className={`type-toggle-btn ${reportType === 'found' ? 'active' : ''}`}
                  onClick={() => setReportType('found')}
                >
                  I Found Something
                </button>
              </div>

              {/* Title & Category */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="item-title">Item Name</label>
                  <input
                    id="item-title"
                    type="text"
                    required
                    placeholder="e.g. Matte Black Sony WH-1000XM4 Headphones"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="item-category">Category</label>
                  <select
                    id="item-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="electronics">Electronics &amp; Audio</option>
                    <option value="accessories">Wallets &amp; Accessories</option>
                    <option value="ids">Student ID &amp; Cards</option>
                    <option value="apparel">Apparel &amp; Jackets</option>
                    <option value="keys">Keys &amp; Keychains</option>
                    <option value="books">Books &amp; Backpacks</option>
                  </select>
                </div>
              </div>

              {/* Location & Image Dropzone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="item-location">Campus Location</label>
                  <select
                    id="item-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="library">Main University Library (2nd Floor)</option>
                    <option value="union">Student Union Commons</option>
                    <option value="quad">Science Quad Bench</option>
                    <option value="engineering">Engineering Building Hall</option>
                    <option value="gym">Athletic &amp; Fitness Center</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Photo Upload (Optional for AI Match)</label>
                <label className="upload-dropzone">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input-hidden"
                  />
                  {previewImage ? (
                    <div className="preview-image-box">
                      <img src={previewImage} alt="Uploaded item preview" />
                      <span className="change-img-text">Click to change photo</span>
                    </div>
                  ) : (
                    <div className="dropzone-prompt">
                      <Upload size={24} />
                      <p>Drag &amp; drop or click to upload photo</p>
                      <span className="dropzone-sub">AI scans image embeddings for visual matches</span>
                    </div>
                  )}
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="item-desc">Description &amp; Key Identifiers</label>
                <textarea
                  id="item-desc"
                  rows={3}
                  placeholder="Include scratches, stickers, serial numbers, or distinct markings..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-pill btn-variant-black submit-btn">
                  <Sparkles size={16} />
                  <span>Submit &amp; Run AI Match</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </main>
    </div>
  );
}
