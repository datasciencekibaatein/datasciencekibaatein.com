import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ isMobile }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      {[...Array(isMobile ? 15 : 30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * (isMobile ? 150 : 200) + 50,
            height: Math.random() * (isMobile ? 150 : 200) + 50,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(79, 70, 229, ${Math.random() * 0.15}) 0%, transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            scale: [1, Math.random() * 0.5 + 0.7, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;