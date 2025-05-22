import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CTAContainer = styled(motion.div)`
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%);
  border-radius: 16px;
  padding: 4rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(79, 70, 229, 0) 70%);
  filter: blur(20px);
  z-index: 0;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
    z-index: -1;
  }

  &:hover::before {
    left: 100%;
  }
`;

const CallToAction = () => {
  return (
    <CTAContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto my-16"
    >
      <GlowEffect style={{ top: '20%', left: '10%' }} />
      <GlowEffect style={{ bottom: '20%', right: '10%' }} />
      
      <div className="relative z-10 text-center">
        <motion.h2 
          className="text-4xl lg:text-5xl font-righteous tracking-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let's create something amazing together. Our team of experts is ready to bring your vision to life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </CTAButton>
        </motion.div>
      </div>
    </CTAContainer>
  );
};

export default CallToAction;