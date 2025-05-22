import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import GlowingCursor from "./GlowingCursor";

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AnimatedLayout = ({ children }) => {
  return (
    <>
      <GlowingCursor />
      <PageContainer
        initial="initial"
        animate="in"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </PageContainer>
    </>
  );
};

export default AnimatedLayout;