import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  margin: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 400px;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.3 }
  }
};

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay }}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;