import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import MobileLayout from './pages/MobileLayout';
import DesktopLayout from './pages/DesktopLayout';
import FirstNews from './pages/FirstNews';
import SecondNews from './pages/SecondNews';
import ThirdNews from './pages/ThirdNews';
import UiDesignTrust from './pages/UiDesignTrust';
import WebsiteConversion from './pages/WebsiteConversion';
import UxStrategyFirst from './pages/UxStrategyFirst';
import NotFound from './pages/NotFound';
import NotFoundDesktop from './pages/NotFoundDesktop';
import FirstNewsDesktop from './pages/FirstNewsDesktop';
import SecondNewsDesktop from './pages/SecondNewsDesktop';
import ThirdNewsDesktop from './pages/ThirdNewsDesktop';
import UiDesignTrustDesktop from './pages/UiDesignTrustDesktop';
import WebsiteConversionDesktop from './pages/WebsiteConversionDesktop';
import UxStrategyFirstDesktop from './pages/UxStrategyFirstDesktop';
import ProjectPageDesktop from './pages/ProjectPageDesktop';
import ProjectPage from './pages/ProjectPage';
import PrivacyDesktop from './pages/PrivacyDesktop';
import TermsDesktop from './pages/TermsDesktop';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Privacy from './pages/Privacy';

import CookiesDesktop from './pages/CookiesDesktop';

const scrollToFormSection = () => {
  const scroll = () => {
    const element = document.getElementById('form-section');
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };
  let attempts = 0;
  const interval = setInterval(() => {
    if (document.getElementById('form-section') || attempts > 20) {
      scroll();
      clearInterval(interval);
    }
    attempts++;
  }, 100);
};

function App() {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      sessionStorage.removeItem('scrollTo');
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(scrollTo);
        if (element || attempts > 20) {
          scrollToFormSection();
          clearInterval(interval);
        }
        attempts++;
      }, 100);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isMobile ? <MobileLayout /> : <DesktopLayout />}
        />
        <Route path="/news/inclusive-design" element={<FirstNews />} />
        <Route path="/news/ux-trends-2025" element={<SecondNews />} />
        <Route path="/news/design-system-need" element={<ThirdNews />} />
        <Route path="/news/ui-design-trust" element={<UiDesignTrust />} />
        <Route
          path="/news/website-design-conversion"
          element={<WebsiteConversion />}
        />
        <Route path="/news/ux-strategy-first" element={<UxStrategyFirst />} />
        <Route
          path="/news/desktop/inclusive-design"
          element={<FirstNewsDesktop />}
        />
        <Route
          path="/news/desktop/ux-trends-2025"
          element={<SecondNewsDesktop />}
        />
        <Route
          path="/news/desktop/design-system-need"
          element={<ThirdNewsDesktop />}
        />
        <Route
          path="/news/desktop/ui-design-trust"
          element={<UiDesignTrustDesktop />}
        />
        <Route
          path="/news/desktop/website-design-conversion"
          element={<WebsiteConversionDesktop />}
        />
        <Route
          path="/news/desktop/ux-strategy-first"
          element={<UxStrategyFirstDesktop />}
        />
        <Route
          path="/projects/:id"
          element={isMobile ? <ProjectPage /> : <ProjectPageDesktop />}
        />
        <Route
          path="/privacy-policy"
          element={isMobile ? <Privacy /> : <PrivacyDesktop />}
        />
        <Route
          path="/terms-and-conditions"
          element={isMobile ? <Terms /> : <TermsDesktop />}
        />
        <Route
          path="/cookie-policy"
          element={isMobile ? <Cookies /> : <CookiesDesktop />}
        />
        <Route
          path="/*"
          element={isMobile ? <NotFound /> : <NotFoundDesktop />}
        />
      </Routes>
      <SpeedInsights />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export { scrollToFormSection };
