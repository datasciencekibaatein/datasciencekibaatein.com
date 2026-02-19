import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { coursesData } from '../../utils/data';

const extraCourses = [
  { icon: '🤖', title: 'Machine Learning A-Z', color: '#ef4444', description: 'Complete guide to ML algorithms, regression, and classification.', playlistLinkId: "" },
  { icon: '☁️', title: 'AWS for Data Science', color: '#f97316', description: 'Deploy models on the cloud using SageMaker and EC2.', playlistLinkId: "" },
  { icon: '🕸️', title: 'Web Scraping', color: '#8b5cf6', description: 'Extract data from modern websites using BeautifulSoup and Selenium.', playlistLinkId: "" },
  { icon: '📐', title: 'Statistics 101', color: '#14b8a6', description: 'The math behind the models: Probability, Distributions, and Hypothesis Testing.', playlistLinkId: "" },
  { icon: '🗣️', title: 'NLP Mastery', color: '#ec4899', description: 'Text processing, sentiment analysis, and building chatbots.', playlistLinkId: "" },
  { icon: '👁️', title: 'Computer Vision', color: '#3b82f6', description: 'Image processing, object detection, and face recognition with OpenCV.', playlistLinkId: "" },
];

const allCoursesList = [...coursesData, ...extraCourses];

const Courses = ({ isMobile, colors }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const { secondaryText, cardBg, glassBorder, textColor, gradient, glassyBg, bgColor, accent } = colors;
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar { width: 10px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); margin: 10px; border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: ${secondaryText}; border-radius: 10px; border: 3px solid transparent; background-clip: content-box; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: ${accent || '#4f46e5'}; }
    .custom-scrollbar { scrollbar-width: thin; scrollbar-color: ${secondaryText} transparent; }
  `;

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } };
  const modalVariants = { hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }, exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } } };

  return (
    <section
      id="courses"
      ref={ref}
      style={{ 
        // 1. Reduced top padding to fix the "too much space" issue
        minHeight: '100vh', 
        padding: isMobile ? '4rem 1.5rem' : '5rem 2rem', 
        maxWidth: '1300px', 
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <style>{scrollbarStyles}</style>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}> {/* Reduced margin from 4rem */}
        
        
        {/* Main Heading */}
        <motion.h2
          style={{
            fontSize: isMobile ? '2.5rem' : '4rem', 
            fontWeight: '900', 
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem', 
            color: textColor,
            lineHeight: 1.1,
            position: 'relative',
            display: 'inline-block'
          }}
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Industry-Ready Curriculum
          
          {/* 3. Decorative Underline */}
          <motion.div 
            style={{ 
              height: '6px', 
              width: '40%', 
              background: gradient, 
              position: 'absolute', 
              bottom: '10px', 
              right: '-20px', 
              borderRadius: '10px',
              opacity: 0.6,
              zIndex: -1
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: '40%' } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>
      </div>

      {/* Featured Courses Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem', 
          marginBottom: '4rem'
        }}
      >
        {coursesData.map((course, i) => (
          <CourseCard key={i} course={course} variants={cardVariants} colors={colors} />
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div 
        style={{ display: 'flex', justifyContent: 'center' }}
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => setShowModal(true)}
          style={{
            background: 'transparent',
            border: `2px solid ${secondaryText}`,
            color: textColor,
            padding: '1rem 3rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
          whileHover={{ scale: 1.05, borderColor: accent || '#4f46e5', color: accent || '#4f46e5' }}
          whileTap={{ scale: 0.95 }}
        >
          View All Courses 📚
        </motion.button>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)', zIndex: 2000,
              display: 'flex', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '1rem' : '2rem'
            }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden" animate="visible" exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '1000px', height: '85vh',
                background: bgColor, border: `1px solid ${glassBorder}`, borderRadius: '24px',
                display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', overflow: 'hidden'
              }}
            >
              <div style={{ padding: '1.5rem 2rem', borderBottom: `1px solid ${glassBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: glassyBg }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: textColor, margin: 0 }}>Complete Course Catalog</h3>
                <motion.button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', color: secondaryText, cursor: 'pointer', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }} whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', rotate: 90 }}>✕</motion.button>
              </div>

              <div className="custom-scrollbar" style={{ padding: '2rem', overflowY: 'auto', height: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {allCoursesList.map((course, i) => (
                    <div key={i} style={{ background: cardBg, border: `1px solid ${glassBorder}`, borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '2rem' }}>{course.icon}</span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: 0, color: textColor }}>{course.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: secondaryText, margin: 0 }}>{course.description}</p>
                      
                      {course.playlistLinkId ? (
                        <a href={`https://www.youtube.com/playlist?list=${course.playlistLinkId}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: course.color, fontWeight: '600', textDecoration: 'none', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          Watch Now <span>→</span>
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: secondaryText, marginTop: 'auto', fontStyle: 'italic' }}>Coming Soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CourseCard = ({ course, variants, colors }) => {
  const { secondaryText, glassBorder, textColor, glassyBg } = colors;
  return (
    <motion.div variants={variants} style={{ background: glassyBg, backdropFilter: 'blur(20px)', border: `1px solid ${glassBorder}`, borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'all 0.4s' }} whileHover={{ y: -10, boxShadow: `0 25px 50px -12px ${course.color}30` }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: course.color, opacity: 0.8 }} />
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '20px', background: `${course.color}15`, border: `1px solid ${course.color}30`, boxShadow: `0 0 30px ${course.color}20`, fontSize: '3rem' }}>{course.icon}</div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem', color: textColor, letterSpacing: '-0.01em' }}>{course.title}</h3>
        <p style={{ color: secondaryText, lineHeight: '1.7', marginBottom: '2rem', fontSize: '1.05rem' }}>{course.description}</p>
      </div>
      <motion.a href={`https://www.youtube.com/playlist?list=${course.playlistLinkId}`} target="_blank" rel="noopener noreferrer" style={{ background: course.color, color: '#ffffff', padding: '1rem 1.5rem', borderRadius: '14px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: `0 4px 15px ${course.color}40`, border: 'none' }} whileHover={{ scale: 1.02, boxShadow: `0 8px 25px ${course.color}60` }} whileTap={{ scale: 0.98 }}>
        Start Learning Now →
      </motion.a>
    </motion.div>
  );
};

export default Courses;