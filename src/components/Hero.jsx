import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1ff] via-white to-[#f4f8ff]" aria-hidden />

      <div className="absolute -top-24 -right-24 w-[22rem] h-[22rem] rounded-full bg-gradient-to-br from-[#4c8cff]/20 to-[#1e3a8a]/10 blur-3xl" aria-hidden />
      <div className="absolute bottom-[-6rem] left-[-6rem] w-[18rem] h-[18rem] rounded-full bg-gradient-to-br from-[#7eb5ff]/30 to-[#4c8cff]/20 blur-3xl" aria-hidden />

      <div className="app-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          <div data-aos="fade-right" data-aos-delay="100">
            <span className="badge-chip mb-6 animate__animated animate__fadeInDown animate__delay-1s">
              <FaHandHoldingHeart className="text-[#1e3a8a]" />
              Winter Relief Acceleration 2025
            </span>
            <h1 className="section-heading text-gradient animate__animated animate__fadeInUp animate__delay-1s">
              Spread Warmth. Spark Hope. Share Humanity.
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Warm Hearts BD mobilises communities to deliver lifesaving winter essentials across Bangladesh. Join thousands of volunteers and donors in building a nation where no one shivers through the cold.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-1s">
              <Link to="/donation" className="brand-button">
                Donate Now
                <FaArrowRight />
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 font-semibold text-[#1e3a8a] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_18px_40px_-26px_rgba(30,58,138,0.35)] hover:shadow-[0_24px_55px_-30px_rgba(30,58,138,0.45)] transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e3f1ff] text-[#1e3a8a] shadow-inner">
                  <FaPlay className="ml-[2px]" size={14} />
                </span>
                Explore Opportunities
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
              {[
                { value: '52,800+', label: 'Winter Kits Delivered' },
                { value: '780+', label: 'Active Field Volunteers' },
                { value: '8', label: 'Divisions Served' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-panel p-5 text-center">
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative" data-aos="fade-left" data-aos-delay="150">
            <div className="glass-panel p-6 lg:p-8">
              <div className="relative h-full">
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#4c8cff] to-[#9dc7ff] p-[1px] shadow-[0_28px_60px_-28px_rgba(30,58,138,0.6)]">
                  <div className="rounded-[1.9rem] bg-[#0b1730] p-8 text-white min-h-[24rem] flex flex-col justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-white/60">mission 2025</p>
                      <h2 className="mt-4 text-3xl font-semibold leading-tight">
                        Deliver warmth packs to <span className="text-gradient">100,000 families</span> before peak winter.
                      </h2>
                      <p className="mt-6 text-white/70 text-sm leading-relaxed">
                        Field teams are ready. Logistics are secured. We just need you to power the mission with your generosity.
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-5 text-left text-sm">
                      <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                        <p className="text-white/60">This Week</p>
                        <p className="mt-2 text-lg font-semibold">7,235 kits</p>
                        <p className="text-white/50">already pledged</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                        <p className="text-white/60">Next Target</p>
                        <p className="mt-2 text-lg font-semibold">10,000 kits</p>
                        <p className="text-white/50">by Friday midnight</p>
                      </div>
                    </div>
                  </div>
                </div>

               
                <div className="absolute -top-10 right-2">
                  <div className="badge-chip text-sm shadow-lg bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Distribution
                  </div>
                </div>
                <div className="absolute -bottom-10 left-8">
                  <div className="badge-chip text-sm shadow-lg bg-white">
                    Trusted by 150+ partners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
