import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Sparkles, MapPin, Calendar, ShieldCheck, CheckCircle } from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/pages.css';

const MOCK_ITEMS = [
  {
    id: '1',
    title: 'Apple AirPods Pro Gen 2 (MagSafe Case)',
    category: 'Electronics',
    status: 'found',
    location: 'Main Library - 3rd Floor Quiet Zone',
    date: '10 mins ago',
    matchScore: '98%',
    description: 'Found near study desk 34. Case has a small anime sticker on the back.',
    imageBg: 'linear-gradient(135deg, #111 0%, #333 100%)',
    tag: 'Verified Match'
  },
  {
    id: '2',
    title: 'Black Leather Hydro Flask Water Bottle',
    category: 'Accessories',
    status: 'lost',
    location: 'Student Union Commons',
    date: '1 hour ago',
    matchScore: '94%',
    description: '32oz Hydro Flask with stickers: IEEE logo, NASA, and University Crest.',
    imageBg: 'linear-gradient(135deg, #2b3a42 0%, #3f5866 100%)',
    tag: 'High Priority'
  },
  {
    id: '3',
    title: 'University Student ID Card & Key Ring',
    category: 'IDs & Cards',
    status: 'found',
    location: 'Science Quad Fountain Bench',
    date: '3 hours ago',
    matchScore: '99%',
    description: 'Found on grass near fountain. ID belongs to Engineering student (Class of 2027).',
    imageBg: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    tag: 'Instant Handshake'
  },
  {
    id: '4',
    title: 'Calculus IV Hardcover Textbook & Notes',
    category: 'Books',
    status: 'lost',
    location: 'Engineering Hall Lab 102',
    date: 'Yesterday',
    matchScore: '89%',
    description: 'Contains handwritten lecture notes and blue highlighter tabs.',
    imageBg: 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
    tag: 'Potential Match'
  },
  {
    id: '5',
    title: 'North Face Zip Jacket (Black, Size L)',
    category: 'Apparel',
    status: 'reunited',
    location: 'Athletic Center Gym',
    date: '2 days ago',
    matchScore: '100%',
    description: 'Successfully claimed via Foundly AI ID match.',
    imageBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    tag: 'Reunited'
  }
];

export default function Browse() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [claimSuccess, setClaimSuccess] = useState(false);

  const filteredItems = MOCK_ITEMS.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.status === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
        <div className="browse-header-section">
          <div className="browse-title-group">
            <span className="page-badge">Live Feed</span>
            <h1>Campus Lost &amp; Found Database</h1>
            <p>Real-time AI matched items across all university departments and desks.</p>
          </div>

          <div className="browse-controls-bar">
            {/* Search Input */}
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search by keyword, building, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Status Filter Buttons */}
            <div className="filter-pill-group">
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Items
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'found' ? 'active' : ''}`}
                onClick={() => setActiveFilter('found')}
              >
                Found
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'lost' ? 'active' : ''}`}
                onClick={() => setActiveFilter('lost')}
              >
                Lost
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'reunited' ? 'active' : ''}`}
                onClick={() => setActiveFilter('reunited')}
              >
                Reunited
              </button>
            </div>
          </div>
        </div>

        {/* Item Cards Grid */}
        <motion.div
          className="items-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="item-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="item-card-image" style={{ background: item.imageBg }}>
                <span className={`status-badge status-${item.status}`}>
                  {item.status.toUpperCase()}
                </span>
                <span className="ai-score-badge">
                  <Sparkles size={11} /> {item.matchScore} AI Match
                </span>
              </div>

              <div className="item-card-body">
                <div className="item-category-row">
                  <span className="item-category-text">{item.category}</span>
                  <span className="item-time">{item.date}</span>
                </div>
                <h3 className="item-card-title">{item.title}</h3>
                <div className="item-location-row">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Item Detail / Claim Modal */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className={`status-badge status-${selectedItem.status}`}>
                  {selectedItem.status.toUpperCase()}
                </span>
                <h2 style={{ marginTop: 8 }}>{selectedItem.title}</h2>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => {
                  setSelectedItem(null);
                  setClaimSuccess(false);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-item-meta">
                <div className="meta-pill"><MapPin size={13} /> {selectedItem.location}</div>
                <div className="meta-pill"><Calendar size={13} /> {selectedItem.date}</div>
                <div className="meta-pill ai-highlight"><Sparkles size={13} /> {selectedItem.matchScore} AI Confidence</div>
              </div>

              <p className="modal-item-desc">{selectedItem.description}</p>

              {claimSuccess ? (
                <div className="claim-success-box">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Verification Match Request Sent</h4>
                    <p>University Security Desk #4 has received your pin. Check your student email for retrieval code.</p>
                  </div>
                </div>
              ) : (
                <div className="security-notice-box">
                  <ShieldCheck size={18} />
                  <span>To claim, you will answer 1 unique verification question generated by AI matching.</span>
                </div>
              )}
            </div>

            <div className="modal-footer" style={{ gap: 12 }}>
              <button
                type="button"
                className="btn-pill btn-variant-outline"
                onClick={() => {
                  setSelectedItem(null);
                  setClaimSuccess(false);
                }}
              >
                Close
              </button>

              {!claimSuccess && selectedItem.status !== 'reunited' && (
                <button
                  type="button"
                  className="btn-pill btn-variant-black"
                  onClick={() => setClaimSuccess(true)}
                >
                  Initiate Secure Claim
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
