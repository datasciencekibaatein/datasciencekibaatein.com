import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. FULL DATA WITH DETAILS ---
const paidCourses = [
  { 
    id: 1, 
    title: 'Python for Data Science', 
    desc: 'Zero to Hero: Master Python specifically for Data Analysis.', 
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=400&h=400',
    price: '₹499',
    learnPoints: ["Master Python Syntax", "Pandas & NumPy", "Matplotlib Visualization", "Web Scraping"],
    includes: ["25 Hours Video", "Certificate", "Lifetime Access"],
    chapters: [{ title: "Intro to Python", time: "2h" }, { title: "Data Structures", time: "3h" },{ title: "Data Structures", time: "3h" },{ title: "Data Structures", time: "3h" },{ title: "Data Structures", time: "3h" },{ title: "Data Structures", time: "3h" }]
  },
  { 
    id: 2, 
    title: 'SQL Bootcamp 2025', 
    desc: 'Complex queries, database design, and optimization techniques.', 
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=400',
    price: '₹499',
    learnPoints: ["Complex Joins", "Window Functions", "Database Schemas", "Performance Tuning"],
    includes: ["15 Hours Video", "50 SQL Challenges", "Certificate"],
    chapters: [{ title: "Select & From", time: "1h" }, { title: "Advanced Joins", time: "4h" }]
  },
  { 
    id: 3, 
    title: 'Machine Learning A-Z', 
    desc: 'Build real-world ML models using Scikit-Learn and TensorFlow.', 
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400&h=400',
    price: '₹499',
    learnPoints: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Model Deployment"],
    includes: ["40 Hours Video", "Python Code Templates", "Certificate"],
    chapters: [{ title: "Regression", time: "5h" }, { title: "Classification", time: "6h" }]
  },
  { 
    id: 4, 
    title: 'Tableau Mastery', 
    desc: 'Visualize data like a pro and tell compelling data stories.', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=400',
    price: '₹499',
    learnPoints: ["Dashboard Design", "Calculated Fields", "Storytelling", "Data Connecting"],
    includes: ["10 Hours Video", "5 Real Projects", "Certificate"],
    chapters: [{ title: "Connecting Data", time: "1h" }, { title: "Building Charts", time: "3h" }]
  },
  { 
    id: 5, 
    title: 'Generative AI Guide', 
    desc: 'Understand LLMs, Prompt Engineering, and AI ethics.', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=400',
    price: '₹499',
    learnPoints: ["LLM Architecture", "Prompt Engineering", "Fine-Tuning", "AI Ethics"],
    includes: ["8 Hours Video", "Prompt Cheatsheets", "Certificate"],
    chapters: [{ title: "How GPT Works", time: "2h" }, { title: "Advanced Prompting", time: "2h" }]
  }
];

const PaidCourses = ({ isMobile, colors }) => {
  const [selectedCourse, setSelectedCourse] = useState(null); // Controls Detail Modal
  const [showAllModal, setShowAllModal] = useState(false);    // Controls "View All" Grid Modal
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { textColor, secondaryText, cardBg, glassBorder, gradient, accent, glassyBg, bgColor } = colors;
  
  const visibleCards = isMobile ? 1 : 3;
  const cardWidthPercent = 100 / visibleCards;
  const totalSlides = paidCourses.length;

  // --- Auto-Scroll Logic ---
  useEffect(() => {
    // Only auto-scroll if no modal is open
    if (selectedCourse || showAllModal) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, selectedCourse, showAllModal]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (selectedCourse || showAllModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCourse, showAllModal]);

  return (
    <section 
      style={{ 
        padding: isMobile ? '3rem 1rem' : '4rem 2rem', 
        maxWidth: '1300px', margin: '0 auto', position: 'relative' 
      }}
    >
      
        <div style={{ 
        marginBottom: '2rem', 
        display: 'flex', 
        alignItems: 'center', // Centers the bar vertically with the text
        gap: '1rem' 
        }}>
        
        {/* The Vertical White Line */}
        <div style={{ 
            width: '3px',         // Thin line
            height: '45px',       // Height of the line
            backgroundColor: '#ffffff', // Pure white like the image
            borderRadius: '2px'
        }} />

        {/* The Text */}
        <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.8rem', 
            fontWeight: '800', 
            color: '#6b66ff',     // The specific "Industry-Ready" purple/violet color
            margin: 0,
            lineHeight: '1',      // Tighter line height for that blocky feel
            letterSpacing: '-0.5px'
        }}>
            Premium Masterclasses
        </h2>

        </div>
            
        <div style={{ 
        marginBottom: '3rem', 
        display: 'flex', 
        flexDirection: 'column', 
        borderLeft: `6px solid ${accent}`, 
        paddingLeft: '1.5rem' 
        }}>
        
        
        <div style={{ 
            marginTop: '0.5rem', 
            color: secondaryText, 
            fontSize: '1rem',
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px'
        }}>
            <span>Invest in yourself</span>
            <div style={{ width: '40px', height: '1px', background: secondaryText }} />
        </div>
        </div>

      {/* --- CAROUSEL FRAME --- */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', padding: '1rem 0' }}>
        <NavButton direction="left" onClick={handlePrev} colors={colors} isMobile={isMobile} />
        <NavButton direction="right" onClick={handleNext} colors={colors} isMobile={isMobile} />

        <motion.div
          animate={{ x: `-${currentIndex * cardWidthPercent}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ display: 'flex', width: `${(totalSlides / visibleCards) * 100}%` }}
        >
          {paidCourses.map((course) => (
            <div 
              key={course.id}
              style={{ width: `${100 / totalSlides}%`, padding: '0 10px', boxSizing: 'border-box' }}
            >
              {/* PASS ONCLICK HERE FOR CAROUSEL */}
              <CourseCard 
                course={course} 
                colors={colors} 
                onClick={() => setSelectedCourse(course)} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- View All Button --- */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <motion.button
          onClick={() => setShowAllModal(true)}
          style={{
            background: 'transparent', border: `1px solid ${secondaryText}`, color: textColor,
            padding: '0.8rem 2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600',
            cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase'
          }}
          whileHover={{ scale: 1.05, background: accent, borderColor: accent, color: '#fff' }}
          whileTap={{ scale: 0.95 }}
        >
          View All Courses
        </motion.button>
      </div>

      {/* --- MODAL 1: VIEW ALL GRID --- */}
      <AnimatePresence>
        {showAllModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              zIndex: 3000, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
              display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
              overflowY: 'auto', padding: '2rem'
            }}
            onClick={() => setShowAllModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '1000px', background: bgColor, 
                border: `1px solid ${glassBorder}`, borderRadius: '24px',
                padding: '2rem', marginTop: '2rem', position: 'relative'
              }}
            >
              <button 
                onClick={() => setShowAllModal(false)}
                style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  background: 'transparent', border: 'none', color: secondaryText, fontSize: '1.5rem', cursor: 'pointer'
                }}
              >✕</button>
              
              <h2 style={{ color: textColor, marginBottom: '2rem' }}>All Premium Courses</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {paidCourses.map(course => (
                   // PASS ONCLICK HERE FOR GRID VIEW
                  <div key={course.id} style={{ height: '100%' }}>
                     <CourseCard 
                        course={course} 
                        colors={colors} 
                        onClick={() => setSelectedCourse(course)} 
                     />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL 2: COURSE DETAIL POPUP --- */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailModal 
            course={selectedCourse} 
            colors={colors} 
            isMobile={isMobile} 
            onClose={() => setSelectedCourse(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

// --- 2. UPDATED COURSE CARD (ACCEPTS onClick) ---
const CourseCard = ({ course, colors, onClick }) => {
  return (
    <motion.div
      onClick={onClick} // CLICK EVENT ATTACHED HERE
      whileHover={{ 
        y: -5, scale: 1.02, zIndex: 10,
        boxShadow: `0 15px 30px -5px ${colors.accent}40`, borderColor: colors.accent 
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        background: colors.cardBg, border: `1px solid ${colors.glassBorder}`,
        borderRadius: '12px', overflow: 'hidden', height: '100%',
        display: 'flex', flexDirection: 'column', backdropFilter: 'blur(10px)',
        cursor: 'pointer', maxWidth: '320px', margin: '0 auto'
      }}
    >
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        <motion.img 
          src={course.image} alt={course.title} 
          whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ 
          position: 'absolute', top: '8px', right: '8px', 
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          color: '#fff', border: `1px solid ${colors.accent}`,
          padding: '3px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold'
        }}>
          {course.price}
        </div>
      </div>
      
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          fontSize: '1rem', fontWeight: '700', color: colors.textColor, 
          marginBottom: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' 
        }}>
          {course.title}
        </h3>
        <p style={{ 
          fontSize: '0.85rem', color: colors.secondaryText, lineHeight: '1.4', 
          marginBottom: '0.8rem', flex: 1, overflow: 'hidden',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'
        }}>
          {course.desc}
        </p>
        <motion.button 
          whileHover={{ scale: 1.02, gap: '8px' }} whileTap={{ scale: 0.98 }}
          style={{
            width: '100%', padding: '0.6rem', borderRadius: '8px', border: 'none',
            background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}dd)`,
            color: '#fff', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
          }}
        >
          Enroll <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// --- 3. COURSE DETAIL MODAL ---
 
const CourseDetailModal = ({ course, onClose, colors, isMobile }) => {
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 5000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', // Centered vertically
        padding: isMobile ? '1rem' : '2rem'
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '1100px', 
          // --- FIXED HEIGHT LOGIC ---
          height: isMobile ? '90vh' : '85vh', // Fixed height relative to screen
          background: colors.bgColor,
          border: `1px solid ${colors.glassBorder}`, borderRadius: '24px',
          position: 'relative', 
          overflow: 'hidden', // Prevents the modal wrapper itself from scrolling
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '15px', right: '15px', zIndex: 20,
            background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none',
            width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >✕</button>

        {/* ================= LEFT SIDE: SCROLLABLE CONTENT ================= */}
        <div 
          className="custom-scrollbar" // You can add CSS for this class if you want pretty scrollbars
          style={{ 
            flex: 2, 
            padding: '2.5rem', 
            borderRight: isMobile ? 'none' : `1px solid ${colors.glassBorder}`,
            // --- SCROLL LOGIC ---
            overflowY: 'auto', // Only this section scrolls
            height: '100%',    // Takes full height of parent
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h2 style={{ fontSize: '2rem', color: colors.textColor, marginBottom: '1rem' }}>{course.title}</h2>
          <p style={{ color: colors.secondaryText, lineHeight: '1.6', marginBottom: '2rem' }}>{course.desc}</p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: colors.textColor, marginBottom: '1rem', fontSize: '1.2rem' }}>What You'll Learn</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px' }}>
              {course.learnPoints?.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', color: colors.secondaryText, fontSize: '0.9rem' }}>
                  <span style={{ color: colors.accent }}>✓</span> {point}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: colors.textColor, marginBottom: '1rem', fontSize: '1.2rem' }}>This Course Includes</h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {course.includes?.map((item, i) => (
                <span key={i} style={{ 
                  background: colors.glassyBg, padding: '5px 12px', borderRadius: '20px', 
                  fontSize: '0.85rem', color: colors.textColor, border: `1px solid ${colors.glassBorder}`
                }}>
                  • {item}
                </span>
              ))}
            </div>
          </div>

          {/* Long Curriculum Section */}
          <div style={{ paddingBottom: '2rem' }}> 
            <h3 style={{ color: colors.textColor, marginBottom: '1rem', fontSize: '1.2rem' }}>Curriculum</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {course.chapters?.map((chap, i) => (
                <div key={i} style={{ 
                  display: 'flex', justifyContent: 'space-between', padding: '12px', 
                  background: colors.cardBg, borderRadius: '8px', border: `1px solid ${colors.glassBorder}`
                }}>
                  <span style={{ color: colors.textColor, fontWeight: '500' }}>{i + 1}. {chap.title}</span>
                  <span style={{ color: colors.secondaryText, fontSize: '0.9rem' }}>{chap.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: STATIONARY (STICKY FEEL) ================= */}
        <div style={{ 
          flex: 1, 
          background: isMobile ? 'transparent' : 'rgba(255,255,255,0.02)',
          padding: '2.5rem', 
          height: '100%', // Full height
          overflowY: isMobile ? 'visible' : 'hidden', // Doesn't scroll on desktop
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'flex-start' // Aligns content to top
        }}>
          {/* We don't need position:sticky anymore because the parent doesn't scroll! */}
          <div style={{ width: '100%' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', marginBottom: '1.5rem' }}>
              <img src={course.image} alt="Course" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
            </div>
            
            <p style={{ color: colors.secondaryText, fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
              "Join over 5,000 students mastering {course.title} today."
            </p>
            
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
               <span style={{ fontSize: '2.5rem', fontWeight: '800', color: colors.textColor }}>{course.price}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{
                width: '100%', padding: '1rem', borderRadius: '12px', border: 'none',
                background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}dd)`,
                color: '#fff', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer',
                boxShadow: `0 10px 20px -5px ${colors.accent}60`
              }}
            >
              Buy Now
            </motion.button>
            
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: colors.secondaryText, textAlign: 'center' }}>
              30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 4. NAV BUTTON ---
const NavButton = ({ direction, onClick, colors, isMobile }) => {
  const isLeft = direction === 'left';
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: colors.accent }} whileTap={{ scale: 0.9 }}
      style={{
        position: 'absolute', top: '50%', [isLeft ? 'left' : 'right']: '10px',
        transform: 'translateY(-50%)', zIndex: 10,
        width: isMobile ? '35px' : '45px', height: isMobile ? '35px' : '45px',
        borderRadius: '50%', border: `1px solid ${colors.glassBorder}`,
        background: colors.glassyBg, color: colors.textColor, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(5px)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}
    >
      {isLeft ? '←' : '→'}
    </motion.button>
  );
};

export default PaidCourses;