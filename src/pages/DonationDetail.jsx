import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import AuthContext from '../Provider/AuthContext';

const DonationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donationSuccess, setDonationSuccess] = useState(false);

  useEffect(() => {
    // Fetch campaign details
    fetch('/donation.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => c.id === parseInt(id));
        setCampaign(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading campaign:', err);
        setLoading(false);
      });
  }, [id]);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const donationData = {
      campaignId: campaign.id,
      campaignTitle: campaign.title,
      donorName: user.displayName || user.email,
      donorEmail: user.email,
      itemType: form.get('itemType'),
      quantity: form.get('quantity'),
      pickupAddress: form.get('pickupAddress'),
      pickupDate: form.get('pickupDate'),
      notes: form.get('notes'),
      submittedAt: new Date().toISOString(),
    };

    // In a real app, send this to your backend
    console.log('Donation submitted:', donationData);
    
    // Show success message
    setDonationSuccess(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset form
    e.target.reset();

    // Hide success message after 5 seconds
    setTimeout(() => setDonationSuccess(false), 5000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-[#9DC7FF]"></div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaign Not Found</h2>
          <button onClick={() => navigate('/donation')} className="brand-button">
            Back to Campaigns
          </button>
        </div>
      </div>
    );
  }

  const statusColors = {
    Ongoing: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    Planned: 'bg-amber-100 text-amber-700 border border-amber-200',
    Completed: 'bg-sky-100 text-sky-700 border border-sky-200',
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f8fbff] to-white min-h-screen">
      <div className="app-container">
        {/* Success Alert */}
        {donationSuccess && (
          <div
            className="glass-panel mb-8 flex items-start gap-4 border border-emerald-200 bg-emerald-50/70 text-emerald-700"
            data-aos="fade-down"
          >
            <FaCheckCircle className="text-2xl" />
            <div>
              <h3 className="font-bold">Donation Submitted Successfully!</h3>
              <div className="text-sm">Our volunteers will contact you soon to arrange pickup.</div>
            </div>
          </div>
        )}

        {/* Back button */}
        <button
          onClick={() => navigate('/donation')}
          className="ghost-button"
        >
          ← Back to Campaigns
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 mt-6">
          {/* Left: Campaign Details */}
          <div data-aos="fade-right">
            {/* Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_28px_60px_-35px_rgba(30,58,138,0.6)] mb-6">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`badge-chip ${statusColors[campaign.status]}`}>
                  {campaign.status}
                </span>
              </div>
            </div>

            {/* Campaign Info */}
            <div className="card-elevated p-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {campaign.title}
              </h1>

              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#1e3a8a] mb-4">
                <FaMapMarkerAlt className="text-[#4c8cff] text-lg" />
                <span>{campaign.division} Division</span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {campaign.description}
              </p>

              {/* Contact Info */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-semibold text-lg mb-4 text-slate-900">Contact Information</h3>
                <div className="space-y-3 text-slate-600">
                  {campaign.contactInfo.split(',').map((contact, i) => {
                    const trimmed = contact.trim();
                    const isEmail = trimmed.includes('@');
                    return (
                      <div key={i} className="flex items-center gap-3">
                        {isEmail ? <FaEnvelope className="text-[#4c8cff]" /> : <FaPhoneAlt className="text-[#4c8cff]" />}
                        <span>{trimmed}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Donation Form */}
          <div
            className="card-elevated p-8 h-fit lg:sticky lg:top-8"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Make a Donation</h2>
            <p className="text-slate-600 mb-6">Fill out the form below and our volunteers will arrange pickup</p>

            <form onSubmit={handleDonationSubmit} className="space-y-5">
              {/* Donor info (pre-filled) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Your Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || user?.email || ''}
                  disabled
                  className="form-field bg-[#f4f8ff]"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Your Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="form-field bg-[#f4f8ff]"
                />
              </div>

              {/* Item type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Item Type *</span>
                </label>
                <select
                  name="itemType"
                  required
                  className="select-field"
                >
                  <option value="">Select item type</option>
                  <option value="Blankets">Blankets</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Shawls">Shawls</option>
                  <option value="Woolen Caps">Woolen Caps</option>
                  <option value="Other Warm Clothes">Other Warm Clothes</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Quantity *</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  required
                  placeholder="e.g., 5"
                  className="form-field"
                />
              </div>

              {/* Pickup address */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Pickup Address *</span>
                </label>
                <textarea
                  name="pickupAddress"
                  required
                  rows="3"
                  placeholder="Enter full address where we can collect items"
                  className="textarea-field"
                />
              </div>

              {/* Pickup date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Preferred Pickup Date *</span>
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="form-field"
                />
              </div>

              {/* Additional notes */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-slate-700">Additional Notes (Optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  placeholder="Any special instructions or details"
                  className="textarea-field"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="brand-button w-full justify-center text-base"
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationDetail;
