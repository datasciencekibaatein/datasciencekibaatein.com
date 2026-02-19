import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../../utils/data';

const Navbar = ({ theme, setTheme, textColor }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '0',
        right: '0',
        margin: '0 auto',
        zIndex: 1000,
        padding: '1rem 2rem',
        background: theme === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: theme === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
        maxWidth: '1100px',
        width: 'calc(90% - 4rem)'
      }}
    >
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginRight: '2rem'
      }}>
        <span style={{ filter: 'none' }}>🧠</span>
        <span>DataScience</span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {navItems.map(item => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: textColor,
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '0.95rem',
              padding: '0.65rem 1.3rem',
              borderRadius: '25px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            whileHover={{ scale: 1.05, background: theme === 'dark' ? 'rgba(79, 70, 229, 0.15)' : 'rgba(79, 70, 229, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      <motion.button
        onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        style={{
          background: theme === 'dark' ? 'rgba(79, 70, 229, 0.15)' : 'rgba(79, 70, 229, 0.1)',
          border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          padding: '0.65rem',
          color: textColor,
          cursor: 'pointer',
          fontSize: '1.3rem',
          marginLeft: '1rem',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        whileHover={{ scale: 1.15, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;