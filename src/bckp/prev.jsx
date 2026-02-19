import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const bgColor = theme === 'dark' ? '#0a0e27' : '#f8fafc';
  const textColor = theme === 'dark' ? '#ffffff' : '#1e293b';
  const secondaryText = theme === 'dark' ? '#a0aec0' : '#64748b';
  const glassyBg = theme === 'dark' ? 'rgba(10, 14, 39, 0.7)' : 'rgba(255, 255, 255, 0.7)';
  const glassBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const cardBg = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)';

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const homeInView = useInView(homeRef, { once: false, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const coursesInView = useInView(coursesRef, { once: false, amount: 0.2 });
  const blogInView = useInView(blogRef, { once: false, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 });

  return (
    <div style={{ background: bgColor, minHeight: '100vh', color: textColor, position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background */}
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Desktop Navbar */}
        {!isMobile && (
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
              background: theme === 'dark' 
                ? 'rgba(15, 23, 42, 0.6)' 
                : 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '50px',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              boxShadow: theme === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              maxWidth: '1100px',
              width: 'calc(90% - 4rem)'
            }}
          >
            <div 
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginRight: '2rem'
              }}
            >
              <span style={{ filter: 'none' }}>🧠</span>
              <span>DataScience</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              {['Home', 'About', 'Courses', 'Blog', 'Contact'].map(item => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: textColor,
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    padding: '0.65rem 1.3rem',
                    cursor: 'pointer',
                    position: 'relative',
                    borderRadius: '25px',
                    background: 'transparent',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme === 'dark'
                      ? 'rgba(79, 70, 229, 0.15)'
                      : 'rgba(79, 70, 229, 0.1)';
                    e.currentTarget.style.backdropFilter = 'blur(10px)';
                    e.currentTarget.style.boxShadow = theme === 'dark'
                      ? '0 4px 20px rgba(79, 70, 229, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 4px 20px rgba(79, 70, 229, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.backdropFilter = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
              
            <motion.button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              style={{
                background: theme === 'dark'
                  ? 'rgba(79, 70, 229, 0.15)'
                  : 'rgba(79, 70, 229, 0.1)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                padding: '0.65rem',
                color: textColor,
                cursor: 'pointer',
                fontSize: '1.3rem',
                marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                boxShadow: theme === 'dark'
                  ? '0 4px 15px rgba(79, 70, 229, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 4px 15px rgba(79, 70, 229, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>
          </motion.nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
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

              {['Home', 'About', 'Courses', 'Blog', 'Contact'].map((item, index) => (
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
                    setMobileMenuOpen(false);
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

        {/* Scroll to Top */}
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

        {/* Home Section */}
        <section
          id="home"
          ref={homeRef}
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
            animate={homeInView ? { opacity: 1, y: 0 } : {}}
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

          {/* Stats */}
          <div style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '900px'
          }}>
            {[
              { icon: '👥', value: '1K+', label: 'Students Enrolled' },
              { icon: '🎓', value: '100+', label: 'Video Lectures' },
              { icon: '📈', value: '95%', label: 'Success Rate' }
            ].map((stat, i) => (
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
                animate={homeInView ? { opacity: 1, y: 0 } : {}}
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

        {/* About Section with Profile Image */}
        <section
          id="about"
          ref={aboutRef}
          style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
          <motion.h2
            style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          >
            About Me
          </motion.h2>
          <motion.p
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: secondaryText,
              marginBottom: '4rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={aboutInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Your Data Science Educator & Mentor
          </motion.p>

          {/* Profile Section */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '4rem',
              gap: '2rem'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              style={{
                width: isMobile ? '180px' : '220px',
                height: isMobile ? '180px' : '220px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(79, 70, 229, 0.4)'
              }}
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://i.pinimg.com/736x/a1/b4/1a/a1b41a86e92801de9b958b07cd3ebd8b.jpg"
                alt="Dhruv Verma"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: `5px solid ${bgColor}`,
                  objectFit: 'cover'
                }}
              />
            </motion.div>
            
            <div style={{ textAlign: 'center', maxWidth: '700px', padding: isMobile ? '0 1rem' : '0' }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: textColor
              }}>
                Hi, I'm Your Data Science Instructor!
              </h3>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                color: secondaryText,
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                With a passion for teaching and years of industry experience, I've helped thousands of students master Data Science, Machine Learning, and AI technologies.
              </p>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                color: secondaryText,
                lineHeight: '1.8'
              }}>
                Through "DataScience ki Baatein", I simplify complex concepts and provide practical, hands-on learning that prepares you for real-world challenges.
              </p>
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🧠', title: 'Expert-Led Learning', desc: 'Learn directly from an experienced Data Science professional with real-world industry insights.' },
              { icon: '💻', title: 'Hands-On Projects', desc: 'Build portfolio-worthy projects that demonstrate your skills to potential employers.' },
              { icon: '⚡', title: 'Career Acceleration', desc: 'Get job-ready with comprehensive curriculum designed to match industry requirements.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                style={{
                  background: cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${glassBorder}`,
                  borderRadius: '20px',
                  padding: isMobile ? '2rem' : '2.5rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                whileHover={{ scale: 1.03, borderColor: '#4f46e5', boxShadow: '0 20px 40px rgba(79,70,229,0.2)' }}
              >
                <motion.div
                  style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: secondaryText, lineHeight: '1.8', fontSize: isMobile ? '0.95rem' : '1rem' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section
          id="courses"
          ref={coursesRef}
          style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
          <motion.h2
            style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
          >
            Featured Courses
          </motion.h2>
          <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: secondaryText, marginBottom: '4rem' }}>
            Explore our comprehensive curriculum designed for your success
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '📊', title: 'Power BI Course', color: '#4f46e5',playlistLinkId:"PL1K1yhaDyRQDeDbZ-zr4jtS6111VKTCno",description:"Master Power BI from basics to advanced, learning data modeling, DAX, and interactive dashboard creation through practical, real-world projects." },
              { icon: '📶', title: 'Tableau Dashboard', color: '#7c3aed',playlistLinkId:"PL1K1yhaDyRQDDWcxapPeLm4SiZcnF02vT",description:"Create stunning Tableau dashboards, explore visual analytics, and learn storytelling with data through hands-on examples and business case studies."},
              { icon: '🐼', title: 'Pandas Tutorial', color: '#ec4899',playlistLinkId:"PL1K1yhaDyRQCGtC6V7qLi8fUhZoL9jTKA",description:"Learn Python’s Pandas library step-by-step for efficient data analysis, cleaning, transformation, and manipulation using powerful DataFrames and Series."},
              { icon: '🧮', title: 'Numpy Tutorial', color: '#f59e0b',playlistLinkId:"PL1K1yhaDyRQCvGXTrbul3YdK8pXkFAxgF",description:"Understand NumPy fundamentals including arrays, matrix operations, statistics, and numerical computations essential for data science and machine learning."},
              { icon: '💾', title: 'Excel Tutorial', color: '#10b981',playlistLinkId:"PL1K1yhaDyRQBzcMUnCcXRNhHxqWKPL6Dl",description:"Learn Excel from basics to advanced — formulas, pivot tables, charts, automation, and dashboards to boost your data analysis efficiency." },
              { icon: '♻️', title: 'Power BI Tips and Tricks', color: '#3b82f6',playlistLinkId:"PL1K1yhaDyRQAQlgDOfPNITR_nOmLLfkxu",description:"Boost productivity with expert Power BI tips, shortcuts, and DAX hacks to design faster, smarter, and more professional dashboards." }
            ].map((course, i) => (
              <motion.div
                key={i}
                style={{
                  background: cardBg,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${glassBorder}`,
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={coursesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: course.color,
                  boxShadow: `0 20px 60px ${course.color}40`
                }}
              >
                <motion.div
                  style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {course.icon}
                </motion.div>
                <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{course.title}</h3>
                <p style={{ color: secondaryText, lineHeight: '1.8', marginBottom: '1.5rem', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                  {course.description}
                </p>
                <motion.a
                 href={`https://www.youtube.com/playlist?list=${course.playlistLinkId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'transparent',
                    border: `2px solid ${course.color}`,
                    color: course.color,
                    padding: '0.7rem 1.5rem',
                    borderRadius: '10px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: isMobile ? '100%' : 'auto'
                  }}
                  whileHover={{ background: course.color, color: 'white', scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Playlist →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section
          id="blog"
          ref={blogRef}
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
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
          >
            Latest Insights
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'The Future of AI in 2025', date: 'Oct 1, 2025', time: '5 min' },
              { title: 'Getting Started with PyTorch', date: 'Sep 28, 2025', time: '8 min' },
              { title: 'Model Deployment Best Practices', date: 'Sep 25, 2025', time: '10 min' }
            ].map((blog, i) => (
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
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
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

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          style={{
            minHeight: '100vh',
            padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <motion.h2
            style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
          >
            Get In Touch
          </motion.h2>
          <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: secondaryText, marginBottom: '4rem', textAlign: 'center' }}>
            Have questions? I'd love to hear from you!
          </p>

          <motion.form
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              width: '100%',
              background: cardBg,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${glassBorder}`,
              borderRadius: '20px',
              padding: isMobile ? '2rem' : '3rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! I will get back to you soon.');
              e.target.reset();
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: isMobile ? '0.8rem' : '1rem',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  border: `2px solid ${glassBorder}`,
                  borderRadius: '10px',
                  color: textColor,
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: isMobile ? '0.8rem' : '1rem',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  border: `2px solid ${glassBorder}`,
                  borderRadius: '10px',
                  color: textColor,
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
              <textarea
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: isMobile ? '0.8rem' : '1rem',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  border: `2px solid ${glassBorder}`,
                  borderRadius: '10px',
                  color: textColor,
                  fontSize: '1rem',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>

            <motion.button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: 'white',
                padding: isMobile ? '0.9rem' : '1rem',
                border: 'none',
                borderRadius: '10px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)'
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 15px 40px rgba(79, 70, 229, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message 📧
            </motion.button>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default App;