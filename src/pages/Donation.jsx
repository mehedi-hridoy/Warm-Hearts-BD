import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const CampaignCard = ({ campaign, index }) => {
  const [imageError, setImageError] = useState(false);
  
  const statusColors = {
    Ongoing: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    Planned: 'bg-amber-100 text-amber-700 border border-amber-200',
    Completed: 'bg-sky-100 text-sky-700 border border-sky-200',
  };

  return (
    <article
      className="card-elevated overflow-hidden group flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={180 + index * 80}
    >
      {/* Image */}
      <figure className="relative h-52 overflow-hidden bg-gray-200">
        {!imageError ? (
          <img
            src={campaign.image}
            alt={campaign.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#9DC7FF] to-[#7EB5FF] text-white">
            <FaMapMarkerAlt className="text-6xl opacity-30" />
          </div>
        )}
        {/* Status badge overlay */}
        <div className="absolute top-4 right-4">
          <span className={`badge-chip ${statusColors[campaign.status]}`}>
            {campaign.status}
          </span>
        </div>
      </figure>

      <div className="flex-1 flex flex-col p-7">
        {/* Division tag */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#1e3a8a] uppercase tracking-[0.3em] mb-3">
          <FaMapMarkerAlt className="text-[#4c8cff]" />
          <span>{campaign.division}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight line-clamp-2">
          {campaign.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {campaign.description}
        </p>

        {/* Action button */}
        <div className="mt-auto">
          <Link to={`/donation/${campaign.id}`} className="brand-button w-full justify-center">
            Donate Now
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Donation = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Fetch campaigns from public folder
    fetch('/donation.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaigns');
        return res.json();
      })
      .then((data) => {
        console.log('Loaded campaigns:', data);
        setCampaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading campaigns:', err);
        setLoading(false);
      });
  }, []);

  const filteredCampaigns =
    filter === 'All'
      ? campaigns
      : campaigns.filter((c) => c.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-[#9DC7FF]"></div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f8fbff] to-white min-h-screen">
      <div className="app-container">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge-chip mb-4">Current Campaigns</span>
          <h1 className="section-heading mb-4">Active Donation Campaigns</h1>
          <p className="section-subheading">
            Choose a campaign and help bring warmth to families across Bangladesh
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="120">
          {['All', 'Ongoing', 'Planned', 'Completed'].map((status) => {
            const isActive = filter === status;
            return (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-2xl px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#1e3a8a] text-white shadow-[0_18px_30px_-18px_rgba(30,58,138,0.65)]'
                    : 'bg-white/80 border border-[#cdddf8] text-[#1e3a8a] hover:bg-[#e9f2ff]'
                }`}
              >
                {status}
              </button>
            );
          })}
        </div>

        {/* Campaign grid */}
        {filteredCampaigns.length === 0 ? (
          <div className="text-center py-20" data-aos="fade-up" data-aos-delay="180">
            <p className="text-slate-500 text-lg">No campaigns found for this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign, index) => (
              <CampaignCard key={campaign.id} campaign={campaign} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Donation;
