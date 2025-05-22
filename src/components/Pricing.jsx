import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PricingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(79, 70, 229, 0.4);
    box-shadow: 0 15px 35px rgba(79, 70, 229, 0.2);
  }
`;

const PricingButton = styled.button`
  background: ${props => props.featured ? 'linear-gradient(45deg, #4f46e5, #7c3aed)' : 'transparent'};
  color: white;
  border: ${props => props.featured ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: ${props => props.featured ? 'linear-gradient(45deg, #4338ca, #6d28d9)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const ToggleButton = styled.button`
  background: ${props => props.active ? 'rgba(79, 70, 229, 0.2)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  border: 1px solid rgba(79, 70, 229, 0.3);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "5 Pages",
        "Contact Form",
        "1 Month Support",
        "Basic SEO Setup"
      ],
      featured: false
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "10 Pages",
        "Contact Form",
        "E-commerce Integration",
        "3 Months Support",
        "Advanced SEO Setup",
        "Social Media Integration"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "For established businesses with complex needs",
      monthlyPrice: 3999,
      yearlyPrice: 39990,
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Unlimited Pages",
        "Advanced Forms & Functionality",
        "E-commerce Integration",
        "6 Months Support",
        "Premium SEO Package",
        "Social Media Integration",
        "Analytics Dashboard",
        "Performance Optimization"
      ],
      featured: false
    }
  ];

  return (
    <div className="py-16">
      <motion.h2 
        className="text-4xl lg:text-6xl font-righteous tracking-tight text-center pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans
      </motion.h2>
      
      <motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Choose the perfect plan for your business needs
      </motion.p>
      
      <div className="flex justify-center mb-12">
        <div className="inline-flex">
          <ToggleButton 
            active={billingCycle === 'monthly'} 
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </ToggleButton>
          <ToggleButton 
            active={billingCycle === 'yearly'} 
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly <span className="text-xs ml-1 text-indigo-300">Save 20%</span>
          </ToggleButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <PricingCard className={plan.featured ? 'relative z-10 scale-105 border-indigo-500/30' : ''}>
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                </span>
                <span className="text-gray-400 ml-2">/ month</span>
                {billingCycle === 'yearly' && (
                  <div className="text-indigo-300 text-sm mt-1">Billed annually (${plan.yearlyPrice})</div>
                )}
              </div>
              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <PricingButton featured={plan.featured} className="glow-button">
                Get Started
              </PricingButton>
            </PricingCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;