import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../../utils/data';

const Home = ({ isMobile, colors }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { secondaryText, cardBg, glassBorder } = colors;

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: isMobile ? '6rem 1.5rem 2rem' : '8rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ width: '100%' }}
      >
        <motion.div
          style={{
            display: 'inline-block',
            background: 'rgba(79, 70, 229, 0.1)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            marginBottom: '2rem',
            fontSize: isMobile ? '0.85rem' : '0.95rem'
          }}
          animate={{ boxShadow: ['0 0 20px rgba(79,70,229,0.3)', '0 0 40px rgba(79,70,229,0.5)', '0 0 20px rgba(79,70,229,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Unlock Your Data Science Potential
        </motion.div>

        <h1 style={{
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(3rem, 8vw, 5rem)',
          fontWeight: '900',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}>
          Master Data Science
          <br />
          Transform Your Career
        </h1>

        <p style={{
          fontSize: isMobile ? '1rem' : '1.3rem',
          color: secondaryText,
          marginBottom: '3rem',
          maxWidth: '700px',
          lineHeight: '1.8',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Learn cutting-edge tools, technologies, and techniques from industry experts.
          Build real-world projects and advance your career in AI and Data Science.
        </p>

        <motion.button
          style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: 'white',
            padding: isMobile ? '1rem 2rem' : '1.2rem 3rem',
            border: 'none',
            borderRadius: '50px',
            fontSize: isMobile ? '1rem' : '1.2rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Courses →
        </motion.button>
      </motion.div>

      <div style={{
        marginTop: '5rem',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '900px'
      }}>
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            style={{
              background: cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${glassBorder}`,
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.05, borderColor: '#4f46e5' }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>{stat.value}</h3>
            <p style={{ color: secondaryText }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;