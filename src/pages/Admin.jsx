import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  LayoutDashboard, Package, CheckCircle, Clock, AlertCircle,
  Search, Sparkles, LogOut, ChevronRight, MapPin,
  TrendingUp, Users, ShieldCheck, Bell
} from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/admin.css';

const STATS = [
  { label: 'Total Reports', value: '1,284', icon: Package, delta: '+12 today' },
  { label: 'Reunited Items', value: '847',  icon: CheckCircle, delta: '+5 today' },
  { label: 'Pending Claims', value: '43',   icon: Clock, delta: '3 urgent' },
  { label: 'Active Users',   value: '6,310',icon: Users, delta: '+24 this week' },
];

const ITEMS = [
  { id: 'F-1032', title: 'AirPods Pro (White, MagSafe Case)', location: 'Library — Floor 3', status: 'found',    score: '98%', time: '8 min ago' },
  { id: 'L-2047', title: 'Black Hydro Flask 32oz',            location: 'Student Union',      status: 'lost',     score: '94%', time: '22 min ago' },
  { id: 'F-1031', title: 'Student ID Card — Engineering Dept',location: 'Science Quad',       status: 'claimed',  score: '99%', time: '1 hr ago' },
  { id: 'L-2044', title: 'Calculus IV Textbook + Notes',      location: 'Eng Hall Lab 102',   status: 'lost',     score: '89%', time: '3 hr ago' },
  { id: 'F-1028', title: 'North Face Jacket — Black L',       location: 'Gym Locker Room',    status: 'reunited', score: '100%',time: 'Yesterday' },
  { id: 'L-2039', title: 'MacBook Pro 14" Charger',           location: 'Main Cafeteria',     status: 'lost',     score: '91%', time: 'Yesterday' },
];

const STATUS_COLORS = {
  found: 'badge-found',
  lost: 'badge-lost',
  claimed: 'badge-claimed',
  reunited: 'badge-reunited',
};

export default function Admin() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('dashboard');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredItems = ITEMS.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                        item.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || item.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="admin-shell">
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo-area">
          <Logo showTextOnMobile={true} />
          <span className="admin-tag">Admin</span>
        </div>

        <nav className="sidebar-nav" aria-label="Admin Navigation">
          {[
            { id: 'dashboard', label: 'Dashboard',    icon: LayoutDashboard },
            { id: 'reports',   label: 'All Reports',  icon: Package },
            { id: 'claims',    label: 'Claims',       icon: ShieldCheck },
            { id: 'users',     label: 'Users',        icon: Users },
            { id: 'ai',        label: 'AI Matching',  icon: Sparkles },
            { id: 'alerts',    label: 'Alerts',       icon: Bell },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`sidebar-nav-item ${activeNav === id ? 'active' : ''}`}
              onClick={() => setActiveNav(id)}
            >
              <Icon size={17} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button
            type="button"
            className="sidebar-nav-item logout-btn"
            onClick={() => navigate('/signin')}
          >
            <LogOut size={17} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="admin-main">
        {/* Top bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <h1 className="admin-page-title">
              {activeNav === 'dashboard' ? 'Dashboard Overview' : 
               activeNav === 'reports'   ? 'All Reports' :
               activeNav === 'claims'    ? 'Pending Claims' :
               activeNav === 'users'     ? 'User Management' :
               activeNav === 'ai'        ? 'AI Match Engine' : 'Alerts'}
            </h1>
            <p className="admin-page-sub">Foundly Campus Platform — live data</p>
          </div>
          <div className="admin-topbar-right">
            <Link to="/" className="admin-nav-link">
              <span>View Site</span>
              <ChevronRight size={14} />
            </Link>
            <div className="admin-avatar" title="Admin User">A</div>
          </div>
        </header>

        {/* Stat cards */}
        <motion.div
          className="admin-stat-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS.map(({ label, value, icon: Icon, delta }) => (
            <div key={label} className="stat-card">
              <div className="stat-card-top">
                <span className="stat-label">{label}</span>
                <div className="stat-icon-box"><Icon size={16} /></div>
              </div>
              <div className="stat-value">{value}</div>
              <div className="stat-delta">
                <TrendingUp size={12} />
                {delta}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Controls bar */}
        <div className="admin-controls-bar">
          <div className="admin-search-box">
            <Search size={15} />
            <input
              type="text"
              placeholder="Search by title, location, ID…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="admin-filter-group">
            {['all', 'found', 'lost', 'claimed', 'reunited'].map((f) => (
              <button
                key={f}
                type="button"
                className={`admin-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Items table */}
        <motion.div
          className="admin-table-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Location</th>
                <th>Status</th>
                <th>AI Score</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="admin-table-row">
                  <td className="admin-id-cell">{item.id}</td>
                  <td className="admin-title-cell">{item.title}</td>
                  <td className="admin-loc-cell">
                    <MapPin size={12} />
                    {item.location}
                  </td>
                  <td>
                    <span className={`admin-status-badge ${STATUS_COLORS[item.status]}`}>
                      {item.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className="ai-score-cell">
                      <Sparkles size={11} />
                      {item.score}
                    </span>
                  </td>
                  <td className="admin-time-cell">{item.time}</td>
                  <td>
                    <button type="button" className="admin-action-btn">
                      Review <ChevronRight size={13} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan={7} className="admin-empty-row">
                    <AlertCircle size={16} />
                    No items match your search or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>

        {/* AI Activity feed */}
        <motion.div
          className="admin-activity-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="admin-section-title">
            <Sparkles size={16} /> Live AI Match Activity
          </h2>
          <ul className="activity-feed">
            {[
              { text: 'AirPods matched to student #U-2847 via visual embedding (98.4% confidence)', time: '2 min ago', tag: 'Match' },
              { text: 'Student ID F-1031 verified and claimed at Security Desk #4', time: '18 min ago', tag: 'Claimed' },
              { text: 'New lost report: MacBook charger, Cafeteria — scanning database…', time: '31 min ago', tag: 'Scanning' },
              { text: 'Hydro Flask spatial score updated — proximity to Student Union confirmed', time: '1 hr ago', tag: 'Update' },
              { text: 'North Face jacket reunited — AI match + ID verification complete', time: '2 hr ago', tag: 'Reunited' },
            ].map(({ text, time, tag }, i) => (
              <li key={i} className="activity-item">
                <span className={`activity-tag activity-tag-${tag.toLowerCase()}`}>{tag}</span>
                <span className="activity-text">{text}</span>
                <span className="activity-time">{time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
