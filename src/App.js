// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import FeaturedSection from "./components/FeaturedSection";
import TrustBanner from "./components/TrustBanner";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import locomotiveScroll from 'locomotive-scroll';
import { MultiStepLoader as Loader } from "./components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import './App.css';
import Privacy from './pages/Privacy';
import CancellationPolicy from './pages/CancellationPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  const containerRef = useRef(null);
  const [preloader, setPreloader] = useState(true);

  const loadingStates = [
    { text: "Trendel: Where Convenience Meets Speed" },
    { text: "40-Minute Delivery Guaranteed" },
    { text: "Swift Shopping, Swift Delivery" },
    { text: "Shop Smart, Shop Trendel" },
    { text: "Fast Track to Shopping Success" },
  ];

  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setPreloader(false);
    }
  }, [timer]);

  if (typeof window === 'undefined' || !window.document) {
    return null;
  }

  return (
    <Router>
      <>
        {preloader ? (
          <div className="w-full h-[60vh] relative bg-grid-small-black/[0.2] flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Loader loadingStates={loadingStates} loading={preloader} duration={800} />
          </div>
        ) : (
          <div className="bg-stone-50">
            <div className="header sticky top-2 z-[9999] left-0 bg-stone-50 border border-fuchsia-800 rounded-full m-2">
              <Header />
            </div>
            <div data-scroll-container id="main-container" className="flex flex-col items-center bg-stone-50">
              <Routes>
              <Route path="/" element={
                  <>
                    <MainContent />
                    <FeaturedSection />
                    <TrustBanner />
                    <CTA />
                    
                  </>
                } />
                <Route path="/policies/privacy-and-policy" element={<Privacy />}  />
                <Route path="/policies/cancellation-policy" element={<CancellationPolicy />}  />
                <Route path="/policies/terms-and-conditions" element={<TermsAndConditions />}  />
                <Route path="/policies/refund-policy" element={<RefundPolicy />}  />
              </Routes>
              <Contact />
              <Footer />
            </div>
          </div>
        )}
      </>
    </Router>
  );
}

export default App;
