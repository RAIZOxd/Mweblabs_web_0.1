import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none; /* Hide default cursor for our custom one */
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #121212;
    color: #ffffff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Glowing button effect */
  .glow-button {
    position: relative;
    padding: 12px 24px;
    background: transparent;
    color: #fff;
    border: 2px solid #4f46e5;
    border-radius: 8px;
    font-weight: 600;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 1;
  }

  .glow-button:hover {
    color: #121212;
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.8);
  }

  .glow-button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #4f46e5;
    transition: all 0.3s ease;
    z-index: -1;
  }

  .glow-button:hover:before {
    width: 100%;
  }

  /* Hover card effect */
  .hover-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .hover-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Glowing text effect */
  .glow-text {
    transition: all 0.3s ease;
  }

  .glow-text:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
                 0 0 20px rgba(255, 255, 255, 0.8), 
                 0 0 30px rgba(79, 70, 229, 0.8);
  }
`;

export default GlobalStyles;