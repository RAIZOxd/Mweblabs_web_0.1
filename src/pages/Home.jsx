import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AnimatedSection from "../components/animatedsection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ModernContactForm from "../components/ModernContactForm";
import Pricing from "../components/Pricing";
import StatsSection from "../components/StatsSection";
import Technologies from "../components/Technologies";
import Templates from "../components/Templates";
import Testimonials from "../components/Testimonials";
import WhyUsSection from "../components/WhyUsSection";

// Styled components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #4f46e5, #9f7aea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`;

// Parallax container
const ParallaxContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

export default function Home() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Add meta tags dynamically for Home page - English
    document.title = "XWebLabs | Professional Web Development & Digital Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "XWebLabs delivers innovative web development solutions and digital experiences. Transform your online presence with our expert team of developers and designers."
      );
    }

    // Create elements to track for cleanup
    const elementsToCleanup = [];

    // Add French meta description
    const frMetaDesc = document.createElement('meta');
    frMetaDesc.name = 'description';
    frMetaDesc.setAttribute('lang', 'fr');
    frMetaDesc.content = "XWebLabs propose des solutions innovantes de développement web et d'expériences numériques. Transformez votre présence en ligne avec notre équipe d'experts développeurs et designers.";
    document.head.appendChild(frMetaDesc);
    elementsToCleanup.push(frMetaDesc);

    // Add French title meta
    const frTitleMeta = document.createElement('meta');
    frTitleMeta.name = 'title';
    frTitleMeta.setAttribute('lang', 'fr');
    frTitleMeta.content = "XWebLabs | Solutions Professionnelles de Développement Web et Numérique";
    document.head.appendChild(frTitleMeta);
    elementsToCleanup.push(frTitleMeta);

    // Add JSON-LD structured data with bilingual support
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://xweblabs.agency",
      "name": "XWebLabs",
      "description": [
        {
          "@language": "en",
          "@value": "Professional web development and digital solutions agency"
        },
        {
          "@language": "fr",
          "@value": "Agence professionnelle de développement web et solutions numériques"
        }
      ],
      "offers": {
        "@type": "Offer",
        "description": [
          {
            "@language": "en",
            "@value": "Web development services, digital solutions, and custom website design"
          },
          {
            "@language": "fr",
            "@value": "Services de développement web, solutions numériques et conception de sites web sur mesure"
          }
        ]
      }
    });
    document.head.appendChild(script);
    elementsToCleanup.push(script);

    // Improved cleanup function
    return () => {
      elementsToCleanup.forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      
      <ParallaxContainer
        ref={mainRef}
        style={{ opacity, scale }}
      >
        <main className="lg:px-36 mt-5 lg:mt-0 pt-24 lg:pt-0 text-slate-300">
          <div className="flex flex-col justify-between lg:border-x-[1px] border-slate-400 lg:pt-40">
            
            <AnimatedSection 
              aria-label="Why Choose Us" 
              delay={0.2}
              className=""
            >
              <WhyUsSection />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Our Stats" 
              delay={0.25}
              className="w-full h-full lg:px-10 py-16 lg:py-24 border-b-[1px] border-slate-400 px-8"
            >
              <StatsSection />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Our Templates" 
              delay={0.3}
              className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-24 border-b-[1px] border-slate-400 px-8"
            >
              <div className="w-full h-full">
                <Templates />
              </div>
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Client Testimonials" 
              delay={0.35}
              className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8"
            >
              <Testimonials />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Our Technologies" 
              delay={0.4}
              className="hidden lg:inline w-full h-full lg:px-10 lg:pt-20 pb-20 border-y-[1px] border-slate-400 space-y-16"
            >
              <Technologies />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Pricing Plans" 
              delay={0.45}
              className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8"
            >
              <Pricing />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Call To Action" 
              delay={0.48}
              className="w-full h-full lg:px-10 py-16 lg:py-24 border-b-[1px] border-slate-400 px-8"
            >
              <CallToAction />
            </AnimatedSection>

            <AnimatedSection 
              aria-label="Contact Form" 
              delay={0.5}
              className="w-full h-full lg:px-10 py-16 lg:py-40 border-slate-400 px-8"
            >
              <motion.h2 
                className="text-4xl lg:text-6xl font-righteous tracking-tight text-center pb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Have a project in mind? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
              </motion.p>
              <div className="max-w-3xl mx-auto">
                <ModernContactForm />
              </div>
            </AnimatedSection>
          </div>
        </main>
      </ParallaxContainer>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Footer/>
      </motion.div>
    </>
  );
}
