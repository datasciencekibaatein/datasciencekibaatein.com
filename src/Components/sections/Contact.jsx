import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = ({ isMobile, colors, theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { secondaryText, cardBg, glassBorder, textColor, glassyBg } = colors;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="contact"
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
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Context & Direct Links */}
        <div style={{ order: isMobile ? 1 : 0 }}>
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: '900',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}
          >
            Let's Start a <br /> Conversation.
          </motion.h2>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: secondaryText, lineHeight: '1.8', marginBottom: '2rem' }}>
            Whether you have a burning question about a specific Python concept, want to collaborate on a data project, or just want to say hi—my inbox is always open.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {/* Direct Contact Cards */}
            {[
              { label: 'Email Me Directly', value: 'hello@datascience.com', icon: '📧' },
              { label: 'Connect on LinkedIn', value: 'linkedin.com/in/dhruv', icon: '💼' }
            ].map((contact, i) => (
              <a 
                key={i}
                href="#" 
                style={{ textDecoration: 'none' }}
                onClick={(e) => e.preventDefault()}
              >
                <motion.div
                  style={{
                    background: cardBg,
                    border: `1px solid ${glassBorder}`,
                    borderRadius: '15px',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                  whileHover={{ x: 10, backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: secondaryText, fontWeight: '500' }}>{contact.label}</div>
                    <div style={{ fontSize: '1.1rem', color: textColor, fontWeight: '600' }}>{contact.value}</div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: The Form */}
        <motion.div
          variants={itemVariants}
          style={{
             order: isMobile ? 0 : 1,
             position: 'relative'
          }}
        >
          {/* Decorative Glow behind form */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
            zIndex: -1,
            borderRadius: '20px'
          }} />

          <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              netlify


            style={{
              width: '100%',
              background: glassyBg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${glassBorder}`,
              borderRadius: '24px',
              padding: isMobile ? '2rem' : '3rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   alert('Message sent! I usually respond within 24 hours.');
            //   e.target.reset();
            // }}
          >

            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: textColor }}>
              Send a Message 🚀
            </h3>

            {['Name', 'Email', 'Message'].map((label) => {
              const fieldName =
                label === 'Name' ? 'name' :
                label === 'Email' ? 'email' :
                'message';

              return (
                <div key={label} style={{ marginBottom: '1.5rem' }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: secondaryText,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    {label}
                  </label>

                  {label === 'Message' ? (
                    <textarea
                      name={fieldName}
                      required
                      rows={4}
                      placeholder="How can I help you today?"
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: theme === 'dark'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(255, 255, 255, 0.5)',
                        border: `1px solid ${glassBorder}`,
                        borderRadius: '12px',
                        color: textColor,
                        fontSize: '1rem',
                        resize: 'vertical',
                        outline: 'none',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = glassBorder}
                    />
                  ) : (
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      name={fieldName}
                      required
                      placeholder={label === 'Name' ? 'John Doe' : 'john@example.com'}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: theme === 'dark'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(255, 255, 255, 0.5)',
                        border: `1px solid ${glassBorder}`,
                        borderRadius: '12px',
                        color: textColor,
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                      onBlur={(e) => e.target.style.borderColor = glassBorder}
                    />
                  )}
                </div>
              );
            })}


            <motion.button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: 'white',
                padding: '1rem',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)',
                marginTop: '0.5rem'
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(79, 70, 229, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;