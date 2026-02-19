import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../utils/data';

const MobileMenu = ({ isOpen, setIsOpen, theme, setTheme, colors, isMobile }) => {
  const { glassyBg, textColor, cardBg } = colors;

  return (
    <>
      {isMobile && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
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
            fontSize: '1.8rem',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      )}

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '300px',
              background: glassyBg,
              backdropFilter: 'blur(20px)',
              zIndex: 1000,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🧠</span>
              <span>Menu</span>
            </div>

            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  color: textColor,
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.2rem',
                  padding: '1rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: cardBg
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                border: 'none',
                padding: '1rem',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.2rem',
                borderRadius: '10px',
                marginTop: '2rem',
                fontWeight: '600'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;