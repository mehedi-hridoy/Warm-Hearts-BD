import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift, FaHandsHelping, FaTruck } from 'react-icons/fa';

const Step = ({ number, icon, title, description }) => (
  <div className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay={number * 80}>
    <div className="relative mb-6">
   
      <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-[#4c8cff] to-[#1e3a8a] flex items-center justify-center text-white text-3xl shadow-[0_20px_40px_-20px_rgba(30,58,138,0.6)] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-[#1e3a8a] flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed max-w-xs">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <FaGift />,
      title: 'Pick a Campaign',
      description: 'Choose from our active campaigns across different divisions of Bangladesh and select the cause that resonates with you.',
    },
    {
      number: 2,
      icon: <FaHandsHelping />,
      title: 'Fill Donation Form',
      description: 'Tell us what you want to donate (clothes, blankets, etc.) and where we can collect it from your location.',
    },
    {
      number: 3,
      icon: <FaTruck />,
      title: 'We Collect & Deliver',
      description: 'Our dedicated volunteers will collect your donations and deliver them directly to families in need.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f7faff] to-white">
      <div className="app-container">
       
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-5">How It Works</h2>
          <p className="section-subheading">
            Making a difference is simple. Follow these three easy steps to help spread warmth across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative">
          <div className="hidden md:block absolute left-16 right-16 top-16 h-px fade-divider" aria-hidden />

          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="250">
          <Link to="/donation" className="brand-button text-base">
            Start Your Donation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
