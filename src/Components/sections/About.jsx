import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = ({ isMobile, colors }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { secondaryText, textColor, bgColor, cardBg, glassBorder } = colors;

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const skills = ["Python 🐍", "SQL 🗄️", "Tableau 📊", "Power BI 📈", "Data Storytelling 🗣️", "Generative AI 🤖"];

  return (
    <section
      id="about"
      ref={ref}
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            fontSize: '0.9rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            color: '#4f46e5',
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Meet The Instructor
          </span>
          <h2 style={{
            fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1
          }}>
            Decoding Data Science, <br /> One Concept at a Time.
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', 
          gap: '3rem', 
          alignItems: 'center', 
          marginBottom: '4rem' 
        }}>
          
          {/* Left Column: Image */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'flex', 
              justifyContent: isMobile ? 'center' : 'flex-end',
              position: 'relative'
            }}
          >
             {/* Decorative blob behind image */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%)',
              transform: 'scale(1.2)',
              zIndex: -1
            }} />
            
            <motion.div
              style={{
                width: isMobile ? '220px' : '300px',
                height: isMobile ? '220px' : '300px',
                borderRadius: '30px', // More modern 'squircle' shape than basic circle
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                padding: '4px',
                boxShadow: '0 20px 60px rgba(79, 70, 229, 0.3)',
                transform: 'rotate(-3deg)'
              }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://i.pinimg.com/736x/a1/b4/1a/a1b41a86e92801de9b958b07cd3ebd8b.jpg"
                alt="Dhruv Verma"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '26px', 
                  border: `4px solid ${bgColor}`, 
                  objectFit: 'cover',
                  backgroundColor: bgColor 
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Bio & Skills */}
          <motion.div variants={itemVariants} style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: textColor }}>
              Hi, I'm Dhruv. 👋
            </h3>
            <p style={{ fontSize: '1.1rem', color: secondaryText, lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I believe that <strong style={{ color: textColor }}>Data Science shouldn't feel like rocket science.</strong> My mission is to bridge the gap between complex technical theory and real-world application.
            </p>
            <p style={{ fontSize: '1.1rem', color: secondaryText, lineHeight: '1.8', marginBottom: '2rem' }}>
              Through my live sessions and "DataScience ki Baatein", I strip away the jargon and focus on the "why" and "how." Whether we're wrangling messy datasets in <strong>Python</strong>, querying databases with <strong>SQL</strong>, or building visual narratives in <strong>Tableau</strong>, I teach you to think like a Data Scientist, not just write code.
            </p>

            {/* Tech Stack Chips */}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: textColor, marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                My Teaching Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    style={{
                      padding: '0.5rem 1rem',
                      background: cardBg,
                      border: `1px solid ${glassBorder}`,
                      borderRadius: '50px',
                      color: secondaryText,
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { 
              icon: '🎙️', 
              title: 'Live & Interactive', 
              desc: 'No boring monologues. My sessions are two-way conversations where questions are encouraged and doubts are cleared instantly.' 
            },
            { 
              icon: '🧩', 
              title: 'Simplified Complexity', 
              desc: 'I specialize in deconstructing heavy topics—like Neural Networks or Advanced SQL—into bite-sized, digestible logical blocks.' 
            },
            { 
              icon: '🛠️', 
              title: 'Practical Focus', 
              desc: 'Theory is good, but practice is better. We build real projects, analyze real datasets, and solve actual business problems.' 
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              style={{
                background: cardBg,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${glassBorder}`,
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, borderColor: '#4f46e5', boxShadow: '0 10px 30px rgba(79,70,229,0.15)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.8rem', color: textColor }}>{feature.title}</h3>
              <p style={{ color: secondaryText, lineHeight: '1.6', fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;