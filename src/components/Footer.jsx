import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaHandHoldingHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-16 bg-[#0b1730] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#10224a] to-[#090f1f]" aria-hidden />
      <div className="absolute -top-20 left-1/3 h-40 w-40 rounded-full bg-[#4c8cff]/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 right-1/4 h-48 w-48 rounded-full bg-[#7eb5ff]/20 blur-3xl" aria-hidden />

      <div className="app-container relative z-10 section-padding pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_0.9fr_0.9fr] gap-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FaHandHoldingHeart size={22} />
              </span>
              <div>
                <p className="text-lg font-semibold">Warm Hearts BD</p>
                <p className="text-sm text-white/70">Humanitarian Technology Collective</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-md">
              We activate compassionate communities, digital logistics, and rapid response teams to deliver critical winter relief across Bangladesh. Transparency, dignity, and speed drive every campaign.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[ 
                { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/mehedi.hridoy101/' },
                { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/mehedi_hasan_.hridoy/' },
                { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mehedi-hridoy/' },
                { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/mehedi-hridoy' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Organization</h3>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white transition">About Warm Hearts</a>
              <a href="#" className="hover:text-white transition">Impact Dashboard</a>
              <a href="#" className="hover:text-white transition">Annual Report 2025</a>
              <a href="#" className="hover:text-white transition">Partner with Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Get Support</h3>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <a href="mailto:support@warmheartsbd.org" className="hover:text-white transition">support@warmheartsbd.org</a>
              <a href="tel:+8801812345678" className="hover:text-white transition">+880 1812-345678</a>
              <p>Volunteer HQ, House 32, Road 12, Banani, Dhaka</p>
              <a href="#" className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
                Join Volunteer Community →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <p>© {new Date().getFullYear()} Warm Hearts BD. All rights reserved.</p>
          <p className="text-white/60">Designed and Developed by Mehedi Hasan Hridoy</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;