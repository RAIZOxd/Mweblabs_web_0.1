import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CursorCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  background-color: rgba(255, 255, 255, 0.8);
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  filter: blur(5px);
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px), (max-width: 240px) {
    display: none;
  }
`;

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or small screen
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768 || window.innerWidth <= 240);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    // Only add mouse tracking if not mobile
    if (!isMobile) {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      const handleMouseEnter = () => {
        setIsVisible(true);
      };

      window.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [isVisible, isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <CursorCircle
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default GlowingCursor;