import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { FaSmile, FaUsers, FaLaptopCode, FaAward } from 'react-icons/fa';

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Our Success in Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter 
            end={250} 
            title="Happy Clients" 
            icon={<FaSmile className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={15} 
            title="Experienced Staff" 
            icon={<FaUsers className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={450} 
            title="Projects Completed" 
            icon={<FaLaptopCode className="inline-block" />} 
            suffix="+" 
          />
          
          <AnimatedCounter 
            end={10} 
            title="Years Experience" 
            icon={<FaAward className="inline-block" />} 
            suffix="+" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;