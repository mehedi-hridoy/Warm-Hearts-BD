import { FaQuoteLeft } from 'react-icons/fa';

const stories = [
  {
    quote:
      'When Warm Hearts arrived in our char village, children finally had blankets thick enough to sleep through the night. The team listened first, then acted.',
    name: 'Parvin Akter',
    role: 'Ward Councillor, Kurigram',
  },
  {
    quote:
      'Their logistics dashboard let us coordinate 14 volunteer teams in real time. Every bundle was scanned, so we knew exactly where help landed.',
    name: 'Rahim Uddin',
    role: 'Regional Volunteer Lead, Sylhet',
  },
  {
    quote:
      'Donors receive instant confirmation photos, which builds trust and keeps generosity flowing. It is the most transparent charity partnership we have.',
    name: 'Shanta Rahman',
    role: 'CSR Director, Skyline Group',
  },
];

const SuccessStories = () => {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fbff] via-white to-[#f1f6ff]" aria-hidden />
      <div className="absolute top-16 right-16 h-32 w-32 rounded-full bg-[#4c8cff]/20 blur-2xl" aria-hidden />

      <div className="app-container relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div data-aos="fade-right">
            <span className="badge-chip mb-5">Voices from the field</span>
            <h2 className="section-heading mb-4">Stories that fuel our mission</h2>
            <p className="section-subheading text-left md:text-base">
              Every delivery is a promise kept. We partner with grassroots leaders, corporates, and thousands of everyday donors to build a Bangladesh where winter never steals dignity.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
              <div className="rounded-2xl bg-white/90 border border-white/70 shadow-[0_18px_40px_-30px_rgba(30,58,138,0.65)] p-6">
                <p className="text-3xl font-bold text-gradient">87%</p>
                <p className="mt-2 leading-relaxed">
                  of donations are fulfilled within 36 hours thanks to our micro-distribution playbook.
                </p>
              </div>
              <div className="rounded-2xl bg-white/90 border border-white/70 shadow-[0_18px_40px_-30px_rgba(30,58,138,0.65)] p-6">
                <p className="text-3xl font-bold text-gradient">12 mins</p>
                <p className="mt-2 leading-relaxed">
                  average response time from a new donor pledge to volunteer dispatch confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6" data-aos="fade-left">
            {stories.map(({ quote, name, role }, index) => (
              <article
                key={name}
                className="glass-panel bg-white/95 p-8 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={120 + index * 90}
              >
                <FaQuoteLeft className="text-[#7eb5ff] text-3xl mb-4" />
                <p className="text-slate-700 leading-relaxed">{quote}</p>
                <footer className="mt-6">
                  <p className="text-base font-semibold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">{role}</p>
                </footer>
                <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-[#4c8cff]/15 blur-2xl" aria-hidden />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
