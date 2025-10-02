import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DivisionCard = ({ name, campaigns = 0, index = 0 }) => (
  <div
    className="card-elevated relative overflow-hidden p-7 group cursor-pointer"
    data-aos="fade-up"
    data-aos-delay={120 + index * 80}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#4c8cff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
    <div className="relative z-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f1ff] text-[#1e3a8a] mb-4">
        <FaMapMarkerAlt size={18} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500">
        {campaigns > 0 ? `${campaigns} Active Campaigns` : 'Launching Soon'}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a8a]">
        View Impact
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

const SupportedDivisions = () => {
  const divisions = [
    { name: 'Dhaka', campaigns: 12 },
    { name: 'Chattogram', campaigns: 8 },
    { name: 'Sylhet', campaigns: 6 },
    { name: 'Rangpur', campaigns: 7 },
    { name: 'Rajshahi', campaigns: 5 },
    { name: 'Khulna', campaigns: 6 },
    { name: 'Barishal', campaigns: 4 },
    { name: 'Mymensingh', campaigns: 5 },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#f7faff] via-white to-[#f9fbff]" id="impact">
      <div className="app-container">
        
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge-chip mb-4">National Reach</span>
          <h2 className="section-heading mb-4">Where We Help</h2>
          <p className="section-subheading">
            We support communities across all 8 divisions of Bangladesh, bringing warmth to those who need it most.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-12">
          {divisions.map((division, index) => (
            <DivisionCard key={index} {...division} index={index} />
          ))}
        </div>

        
        <div
          className="glass-panel bg-gradient-to-r from-[#1e3a8a] via-[#27498f] to-[#4c8cff] text-white p-10"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '8', label: 'Divisions Covered' },
              { value: '53+', label: 'Active Campaigns' },
              { value: '5,000+', label: 'Families Supported Last Winter' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold">{value}</p>
                <p className="mt-2 text-sm text-white/75">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedDivisions;
