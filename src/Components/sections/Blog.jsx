import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogData } from '../../utils/data';

const Blog = ({ isMobile, colors }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { secondaryText, cardBg, glassBorder, textColor } = colors;

  return (
    <section
      id="blog"
      ref={ref}
      style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <motion.h2
        style={{
          fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        Latest Insights
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {blogData.map((blog, i) => (
          <motion.article
            key={i}
            style={{
              background: cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${glassBorder}`,
              borderRadius: '20px',
              padding: '2rem',
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03, borderColor: '#4f46e5', boxShadow: '0 20px 40px rgba(79,70,229,0.2)' }}
          >
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: secondaryText, fontSize: '0.9rem' }}>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.time} read</span>
            </div>
            <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 'bold', marginBottom: '1rem' }}>{blog.title}</h3>
            <p style={{ color: secondaryText, lineHeight: '1.8', marginBottom: '1.5rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>
              Discover the latest trends, insights, and practical techniques in data science and machine learning.
            </p>
            <motion.button
              style={{
                background: 'transparent',
                border: `2px solid ${glassBorder}`,
                color: textColor,
                padding: '0.7rem 1.5rem',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}
              whileHover={{ borderColor: '#4f46e5', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More →
            </motion.button>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;