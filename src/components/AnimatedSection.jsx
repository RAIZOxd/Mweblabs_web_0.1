import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, className, delay = 0, duration = 0.5 }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;