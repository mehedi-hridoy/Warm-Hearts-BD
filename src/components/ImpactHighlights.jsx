import { FaHandsHelping, FaShieldAlt, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';

const highlights = [
  {
    title: 'Rapid Response Network',
    description: 'Local champions in every division coordinate on-the-ground logistics within hours of an alert.',
    stat: '24h',
    statLabel: 'Average turnaround from pledge to delivery',
    icon: FaHandsHelping,
  },
  {
    title: 'Verified Impact Workflow',
    description: 'Every donation is tracked with timestamped drop-off receipts and beneficiary verification.',
    stat: '99%',
    statLabel: 'Of distributions logged with live updates',
    icon: FaShieldAlt,
  },
  {
    title: 'Data-Guided Coverage',
    description: 'Impact dashboards pinpoint temperature drops so aid reaches the coldest communities first.',
    stat: '8/8',
    statLabel: 'Divisions prioritized via climate analytics',
    icon: FaChartLine,
  },
  {
    title: 'Village-Level Targeting',
    description: 'Micro-mapping ensures relief arrives directly to ward volunteers who know each household.',
    stat: '310+',
    statLabel: 'Union parishads receiving support this season',
    icon: FaMapMarkedAlt,
  },
];

const ImpactHighlights = () => {
  return (
    <section className="relative overflow-hidden section-padding">
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#f3f7ff] to-[#e8f1ff]"
        aria-hidden
      />
      <div className="absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#4c8cff]/10 blur-3xl" aria-hidden />

      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="badge-chip mb-5">Why Warm Hearts BD works</span>
          <h2 className="section-heading mb-4">Operational excellence built for winter relief</h2>
          <p className="section-subheading">
            Beyond donations, we have engineered a transparent ecosystem that moves critical supplies from city closets
            to remote char villages with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {highlights.map(({ title, description, stat, statLabel, icon: Icon }, index) => (
            <article
              key={title}
              className="card-elevated h-full p-8 flex flex-col justify-between bg-white/95 border-white/70"
              data-aos="fade-up"
              data-aos-delay={150 + index * 70}
            >
              <div>
                <div className="flex items-center gap-3 text-[#1e3a8a]">
                  <div className="h-12 w-12 rounded-2xl bg-[#e3f1ff] flex items-center justify-center text-xl shadow-inner">
                    <Icon className="text-[#1e3a8a]" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1e3a8a]/70">Highlight</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900 leading-tight">{title}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>

              <div className="mt-8">
                <p className="text-4xl font-bold text-gradient">{stat}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">{statLabel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;
