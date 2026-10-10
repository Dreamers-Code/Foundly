# Foundly — Campus Lost & Found AI Platform

Foundly is a production-ready, ultra-minimalist black-and-white React web application designed for campus lost and found operations powered by AI computer vision and spatial matching.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 19 + Vite
- **Styling**: Plain CSS only (CSS custom variables, modular component stylesheets, no Tailwind or CSS-in-JS)
- **Animations**: `motion` package (Framer Motion successor, imported from `motion/react`)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom`
- **Typography**: Inter (Weights 300, 400, 500, 600) via Google Fonts

---

## 📂 Project Structure

```
Foundly/
├── public/
│   └── hero-video.mp4          # Background hero video asset
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable black & outlined pill buttons
│   │   ├── Footer.jsx          # Hero bottom gradient pinned footer
│   │   ├── HeroVideo.jsx       # Hero video background with canvas fallback
│   │   ├── HowItWorksModal.jsx # Interactive 3-step AI explanation modal
│   │   ├── IconButton.jsx      # Accessible circle icon button (28px / 32px)
│   │   ├── Logo.jsx            # Custom SVG rotated double rounded rect logo
│   │   ├── MenuDrawer.jsx      # Navigation drawer overlay
│   │   ├── Navbar.jsx          # Fixed top header with tag pills & buttons
│   │   └── Pill.jsx            # Multi-variant rounded pill container
│   ├── pages/
│   │   ├── Landing.jsx         # Full-screen minimalist landing hero page
│   │   ├── Report.jsx          # Report lost/found item form with photo preview
│   │   └── Browse.jsx          # Live campus database feed with AI confidence scores
│   ├── styles/
│   │   ├── global.css          # Color tokens, spacing, easing curve, reduced-motion
│   │   ├── button.css
│   │   ├── footer.css
│   │   ├── hero-video.css
│   │   ├── icon-button.css
│   │   ├── landing.css
│   │   ├── logo.css
│   │   ├── modals.css
│   │   ├── navbar.css
│   │   ├── pages.css
│   │   └── pill.css
│   ├── App.jsx                 # Router routes setup
│   └── main.jsx                # Application root mount
├── .env.example                # Backend API & AI endpoint placeholders
├── index.html                  # HTML entry with Inter font
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📹 Swapping the Background Video

The hero background video is served from `public/hero-video.mp4`.
To replace it with your own high-resolution video:
1. Place your MP4 video file in the `public/` folder.
2. Rename it to `hero-video.mp4` (or update the `src` attribute in `src/components/HeroVideo.jsx`).
3. Ensure the video is encoded as H.264 MP4 with `muted` audio track for seamless browser autoplay across desktop & mobile.

---

## 🔌 Connecting to a Backend API

Foundly is designed for plug-and-play integration with university backend services and AI vision pipelines:

### 1. AI Image & Description Matching
- **Hook Location**: `src/pages/Report.jsx` inside `handleSubmit`.
- **Payload**: Send image file FormData + description text to `VITE_AI_MATCHING_ENDPOINT`.
- **Expected Return**: Array of matched item IDs, confidence vector score (0–100%), and location coordinates.

### 2. Live Item Feed & Status Sync
- **Hook Location**: `src/pages/Browse.jsx` inside `useEffect` or React Query / SWR.
- **Endpoint**: `GET /v1/items?status=lost|found|reunited`.

### 3. Student SSO & Campus Verification
- **Hook Location**: `src/components/MenuDrawer.jsx` and claim modal in `Browse.jsx`.
- Integrates with OAuth2 / SAML single sign-on via `VITE_CAMPUS_ID_AUTH_URL`.

---

## ♿ Accessibility & Motion

- Interactive controls use native `<button>` and `<Link>` elements with keyboard focus states.
- Icon buttons include descriptive `aria-label` attributes.
- Full support for `prefers-reduced-motion` media queries across all CSS transitions and motion effects.
