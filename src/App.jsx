import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hooks & Utils
import { useThemeColors } from './hooks/useThemeColors';

// Components
import Navbar from './components/layout/Navbar';
import MobileMenu from './components/layout/MobileMenu';
import AnimatedBackground from './components/layout/AnimatedBackground';
import Home from './components/sections/Home';
import PaidCourses from './components/sections/PaidCourses';
import About from './components/sections/About';
import Courses from './components/sections/Courses';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const colors = useThemeColors(theme);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ background: colors.bgColor, minHeight: '100vh', color: colors.textColor, position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Animation */}
      <AnimatedBackground isMobile={isMobile} />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {!isMobile && (
          <Navbar 
            theme={theme} 
            setTheme={setTheme} 
            textColor={colors.textColor} 
          />
        )}

        <MobileMenu 
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          theme={theme}
          setTheme={setTheme}
          colors={colors}
          isMobile={isMobile}
        />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {!isMobile && isScrolled && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)',
                zIndex: 999
              }}
              whileHover={{ scale: 1.1, rotate: 360 }}
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>

        {/* Sections */}
        <Home isMobile={isMobile} colors={colors} />
        <PaidCourses isMobile={isMobile} colors={colors} />
        <About isMobile={isMobile} colors={colors} />
        <Courses isMobile={isMobile} colors={colors} />
        <Blog isMobile={isMobile} colors={colors} />
        <Contact isMobile={isMobile} colors={colors} theme={theme} />

      </div>
    </div>
  );
};

export default App;