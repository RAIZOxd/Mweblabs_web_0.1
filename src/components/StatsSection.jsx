import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FaAward, FaLaptopCode, FaSmile, FaUsers } from 'react-icons/fa';

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
      
      // Using easeOutQuad for smoother animation
      const easeOutValue = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutValue * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  // Highlight the title if it's one of our key stats
  const isKeyStat = title === "HAPPY CLIENTS" || title === "EXPERIENCED STAFF";

  return (
    <div 
      ref={counterRef} 
      className={`text-center p-6 ${isKeyStat ? 'highlight-stat' : ''}`}
    >
      <div className={`mb-4 text-4xl ${isKeyStat ? 'text-indigo-400' : 'text-indigo-500'}`}>
        {icon}
      </div>
      <motion.div 
        className={`text-4xl font-bold mb-2 ${isKeyStat ? 'text-white' : ''}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 10,
          delay: isKeyStat ? 0 : 0.2 // Key stats animate first
        }}
      >
        {count}{suffix}
      </motion.div>
      <motion.div 
        className={`text-lg ${isKeyStat ? 'text-indigo-200 font-semibold' : 'text-gray-300'}`}
        initial={{ y: 10, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {title}
      </motion.div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <motion.div 
      className="py-16 bg-gradient-to-b from-transparent to-slate-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Success in Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter 
            end={240} 
            title="HAPPY CLIENTS" 
            icon={<FaSmile className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={14} 
            title="EXPERIENCED STAFF" 
            icon={<FaUsers className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={450} 
            title="PROJECTS COMPLETED" 
            icon={<FaLaptopCode className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={10} 
            title="YEARS EXPERIENCE" 
            icon={<FaAward className="inline-block" />} 
            suffix="+" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;