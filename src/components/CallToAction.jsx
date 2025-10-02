import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#274a97] to-[#4c8cff]" aria-hidden />
      <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 left-12 h-56 w-56 rounded-full bg-[#7eb5ff]/20 blur-3xl" aria-hidden />

      <div className="app-container relative z-10">
        <div className="glass-panel bg-white/10 border-white/20 text-white px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1">
            <p className="uppercase tracking-[0.4em] text-white/70 text-xs mb-4">Final call for winter 2025</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              Every Tk 850 funds a survival kit. Mobilise your circle and keep a family warm this week.
            </h2>
            <p className="mt-5 text-white/75 max-w-2xl">
              Pair your donation with a volunteer shift or corporate match. Our team will handle coordination, pickups, and proof so you can focus on spreading the word.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/donation" className="brand-button text-base px-8 py-3">
              Donate Today
              <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/8801888000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/50 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15 transition"
            >
              <FaWhatsapp className="text-xl" />
              Talk to Ops Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
