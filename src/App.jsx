import { lazy, Suspense, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import SEO from './components/SEO';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

const About = lazy(() => import('./components/About'));
const Courses = lazy(() => import('./components/Courses'));
const Process = lazy(() => import('./components/Process'));
const Placement = lazy(() => import('./components/Placement'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return <div className="min-h-[60vh]" aria-hidden="true" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <SEO />
      <Preloader show={loading} />
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-gold px-4 py-2 font-bold text-navy-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <TopBar />
      <Header />
      <main id="main">
        <Hero ready={!loading} />
        <FeatureStrip />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Courses />
          <Process />
          <Placement />
          <Testimonials />
          <FinalCTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
      <BackToTop />
    </MotionConfig>
  );
}
