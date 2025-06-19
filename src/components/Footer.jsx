import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GlowingIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(126, 34, 206, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(126, 34, 206, 0.3);
    box-shadow: 0 0 15px rgba(126, 34, 206, 0.6);
  }
`;

const FooterLink = styled(motion.a)`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(90deg, #7e22ce, #4f46e5);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const socialLinks = [
    { icon: <FaInstagram size={18} />, url: "https://github.com/RAIZOxd", name: "Instagram" },
    { icon: <FaXTwitter size={18} />, url: "https://github.com/RAIZOxd", name: "Twitter" },
    { icon: <FaLinkedinIn size={18} />, url: "https://github.com/RAIZOxd", name: "LinkedIn" },
    { icon: <FaGithub size={18} />, url: "https://github.com/RAIZOxd", name: "GitHub" },
  ];
  
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "#" },
        { name: "UI/UX Design", url: "#" },
        { name: "E-commerce Solutions", url: "#" },
        { name: "Custom Web Applications", url: "#" },
      ]
    }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-backGround to-slate-900 text-white border-t border-slate-800">
      <div className="px-4 lg:px-36 py-16">
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-extrabold">X</span>
                <span className="text-white">.WEBLABS</span>
              </p>
            </motion.div>
            <p className="text-slate-300 leading-relaxed">
              Transforming ideas into exceptional web experiences. Your vision,
              our expertise.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <GlowingIcon className="text-purple-500">
                    {social.icon}
                  </GlowingIcon>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Services */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (sectionIndex * 0.1) }}
            >
              <h3 className="text-lg font-semibold relative inline-block">
                {section.title}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (sectionIndex * 0.1) }}
                />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (linkIndex * 0.05) }}
                  >
                    {link.url.startsWith('#') ? (
                      <FooterLink 
                        href={link.url}
                        className="text-slate-300 hover:text-white transition-colors duration-300"
                        onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.name}
                        {hoveredLink === `${sectionIndex}-${linkIndex}` && (
                          <motion.span 
                            layoutId={`hoverIndicator-${sectionIndex}-${linkIndex}`}
                            className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </FooterLink>
                    ) : (
                      <Link 
                        to={link.url}
                        onClick={handleLinkClick}
                      >
                        <FooterLink 
                          as="span"
                          className="text-slate-300 hover:text-white transition-colors duration-300"
                          onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          {link.name}
                          {hoveredLink === `${sectionIndex}-${linkIndex}` && (
                            <motion.span 
                              layoutId={`hoverIndicator-${sectionIndex}-${linkIndex}`}
                              className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </FooterLink>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold relative inline-block">
              Contact Us
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </h3>
            <div className="space-y-4">
              <motion.p 
                className="flex items-center text-slate-300"
                whileHover={{ x: 5, color: "#fff" }}
              >
                <span className="w-5 h-5 mr-3 flex items-center justify-center text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Mweblabs@gmail.com
              </motion.p>
              <motion.p 
                className="flex items-center text-slate-300"
                whileHover={{ x: 5, color: "#fff" }}
              >
                <span className="w-5 h-5 mr-3 flex items-center justify-center text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +212 622 23 25 04
              </motion.p>
              <div className="pt-4">
                <Link to="/contact">
                  <motion.button
                    onClick={handleLinkClick}
                    className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full md:w-auto px-8 py-3 rounded-lg font-medium"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(126, 34, 206, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="relative z-10">GET IN TOUCH</span>
                    <motion.span 
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%", opacity: 0.3 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      style={{ mixBlendMode: "overlay" }}
                    />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-slate-400 text-sm">
            © 2025 <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-bold">X.</span>WEBLABS | All
            rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Sitemap
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
