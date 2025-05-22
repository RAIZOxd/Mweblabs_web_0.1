import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Templates from "../components/Templates";
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

export default function Home() {
  useEffect(() => {
    // Add meta tags dynamically for Home page - English
    document.title = "MWebLabs | Professional Web Development & Digital Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "MWebLabs delivers innovative web development solutions and digital experiences. Transform your online presence with our expert team of developers and designers."
      );
    }

    // Add French meta description
    const frMetaDesc = document.createElement('meta');
    frMetaDesc.name = 'description';
    frMetaDesc.setAttribute('lang', 'fr');
    frMetaDesc.content = "MWebLabs propose des solutions innovantes de développement web et d'expériences numériques. Transformez votre présence en ligne avec notre équipe d'experts développeurs et designers.";
    document.head.appendChild(frMetaDesc);

    // Add French title meta
    const frTitleMeta = document.createElement('meta');
    frTitleMeta.name = 'title';
    frTitleMeta.setAttribute('lang', 'fr');
    frTitleMeta.content = "MWebLabs | Solutions Professionnelles de Développement Web et Numérique";
    document.head.appendChild(frTitleMeta);

    // Add JSON-LD structured data with bilingual support
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://mweblabs.agency",
      "name": "MWebLabs",
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

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero />
      <main className="lg:px-36 mt-5 lg:mt-0 pt-24 lg:pt-0 text-slate-300">
        <div className="flex flex-col justify-between lg:border-x-[1px] border-slate-400 lg:pt-40">
          <section aria-label="Why Choose Us">
            <WhyUsSection />
          </section>

          <section aria-label="Our Templates" className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-24 border-b-[1px] border-slate-400 px-8">
            <div className="w-full h-full">
              <Templates />
            </div>
          </section>

          {/* <section aria-label="Client Testimonials" className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8">
            <Testemonials />
          </section> */}

          <section aria-label="Our Technologies" className="hidden lg:inline w-full h-full lg:px-10 lg:pt-20 pb-20 border-y-[1px] border-slate-400 space-y-16">
            <Technologies />
          </section>

          {/* <section aria-label="Pricing Plans" className="w-full h-full lg:px-10 lg:pb-40 border-b-[1px] border-slate-400 px-8">
            <Pricing />
          </section> */}

          <section aria-label="Contact Form" className="w-full h-full lg:px-10 py-16 lg:py-40 border-slate-400 px-8">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <ContactForm />
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

// The duplicate Home component declaration has been removed
