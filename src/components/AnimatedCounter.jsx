import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, title, icon, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div 
      ref={counterRef} 
      className={`counter-animation ${isVisible ? 'visible' : ''} text-center p-6`}
    >
      <div className="mb-4 text-4xl text-indigo-500">
        {icon}
      </div>
      <motion.div 
        className="text-4xl font-bold mb-2"
        initial={{ scale: 0.8 }}
        animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-lg text-gray-300">{title}</div>
    </div>
  );
};

export default AnimatedCounter;