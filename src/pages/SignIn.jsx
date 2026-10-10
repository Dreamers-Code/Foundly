import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, EyeOff, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import Logo from '../components/Logo';
import '../styles/auth.css';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    /* ── Demo shortcut: admin login ── */
    if (email === 'admin@foundly.campus' && password === 'admin123') {
      navigate('/admin');
      return;
    }

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    /* Simulate network call; hook up real auth here */
    setTimeout(() => {
      setLoading(false);
      navigate('/browse');
    }, 1200);
  };

  return (
    <div className="auth-shell">
      {/* Left panel — brand video/art */}
      <div className="auth-left-panel">
        <div className="auth-brand-card">
          <div className="auth-brand-inner">
            <div className="auth-floating-logo">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(-35 16 16)">
                  <rect x="5" y="10" width="13" height="13" rx="3.5" fill="white" />
                  <rect x="14" y="9" width="13" height="13" rx="3.5" fill="white" fillOpacity="0.75" />
                </g>
              </svg>
            </div>
            <h2 className="auth-panel-headline">Find what's lost.<br />Return what's found.</h2>
            <p className="auth-panel-sub">Campus-wide AI matching — reuniting students with their belongings across every building, library, and quad.</p>

            <div className="auth-stat-grid">
              <div className="auth-stat-item">
                <span className="auth-stat-num">2,400+</span>
                <span className="auth-stat-label">Items Reunited</span>
              </div>
              <div className="auth-stat-item">
                <span className="auth-stat-num">98.4%</span>
                <span className="auth-stat-label">Match Accuracy</span>
              </div>
              <div className="auth-stat-item">
                <span className="auth-stat-num">&lt;2 hrs</span>
                <span className="auth-stat-label">Avg. Return Time</span>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="auth-deco-circle auth-deco-1" />
          <div className="auth-deco-circle auth-deco-2" />
        </div>
      </div>

      {/* Right panel — sign-in form */}
      <div className="auth-right-panel">
        <motion.div
          className="auth-form-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="auth-form-header">
            <Link to="/" className="auth-back-link">
              <ArrowLeft size={15} />
              <span>Back</span>
            </Link>
            <Logo showTextOnMobile={true} />
          </div>

          <div className="auth-form-title">
            <span className="auth-badge">Student & Staff Portal</span>
            <h1>Sign In to Foundly</h1>
            <p>Track your reports, receive AI match alerts, and claim items securely.</p>
          </div>

          {/* Hint for demo */}
          <div className="auth-demo-hint">
            <ShieldCheck size={14} />
            <span>Admin demo: <strong>admin@foundly.campus</strong> / <strong>admin123</strong></span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form-body">
            {error && <div className="auth-error-box">{error}</div>}

            <div className="auth-field-group">
              <label htmlFor="signin-email">University Email</label>
              <input
                id="signin-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field-group">
              <div className="auth-label-row">
                <label htmlFor="signin-password">Password</label>
                <Link to="#" className="auth-forgot-link">Forgot password?</Link>
              </div>
              <div className="auth-password-wrapper">
                <input
                  id="signin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="auth-pw-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`auth-submit-btn ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="auth-spinner" aria-label="Signing in…" />
              ) : (
                <>
                  <Sparkles size={15} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="auth-divider"><span>or</span></div>

          <div className="auth-sso-group">
            <button type="button" className="auth-sso-btn" aria-label="Sign in with University SSO">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" fill="#000" />
                <rect x="18" y="2" width="12" height="12" rx="2" fill="#000" fillOpacity="0.5" />
                <rect x="2" y="18" width="12" height="12" rx="2" fill="#000" fillOpacity="0.5" />
                <rect x="18" y="18" width="12" height="12" rx="2" fill="#000" fillOpacity="0.25" />
              </svg>
              Continue with University SSO
            </button>
          </div>

          <p className="auth-signup-text">
            New to Foundly?{' '}
            <Link to="/report" className="auth-link">Report an item</Link> without signing in, or ask your campus admin for access.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
