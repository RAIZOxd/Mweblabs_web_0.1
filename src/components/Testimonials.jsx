import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid #4f46e5;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Working with MWebLabs transformed our online presence. Their team delivered a website that exceeded our expectations in both design and functionality.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GrowthHub",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "The team at MWebLabs understood our vision from day one. They created a seamless digital experience that has significantly increased our conversion rates.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Founder, CreativeMinds",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I've worked with many web development agencies, but MWebLabs stands out for their attention to detail and commitment to excellence.",
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
        Client Testimonials
      </motion.h2>
      
      <motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Don't just take our word for it. Here's what our clients have to say about working with us.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <TestimonialCard className="image-translate">
              <div className="flex items-center mb-4">
                <Avatar>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-indigo-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic flex-grow">{testimonial.text}</p>
              <div className="mt-4 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
            </TestimonialCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;