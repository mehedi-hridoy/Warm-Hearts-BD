import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import slideOne from '../assets/1.png';
import slideTwo from '../assets/2.png';
import slideThree from '../assets/3.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: slideOne,
    eyebrow: 'Emergency Drop-off',
    title: 'Volunteers stage night delivery hubs in Kurigram',
    description:
      'Teams pre-pack thermal blankets and hot meal kits so river islands receive warmth before sunrise cold snaps.',
    cta: 'Explore the operations map',
  },
  {
    image: slideTwo,
    eyebrow: 'Community Mobilisation',
    title: 'Dhaka volunteers sort donations into family-ready warmth packs',
    description:
      'Campus clubs and neighbours align schedules to label, scan, and dispatch winter essentials within hours.',
    cta: 'See the volunteer roster',
  },
  {
    image: slideThree,
    eyebrow: 'Field Relief Pods',
    title: 'Warming stations keep northern families safe through midnight winds',
    description:
      'Ward leaders coordinate with our logistics bus to keep shelters stocked with heaters, jackets, and medicine.',
    cta: 'Review real-time inventory',
  },
];

const GallerySlider = () => {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f9ff] via-white to-[#eef3ff]" aria-hidden />
      <div className="absolute -top-24 left-1/4 h-40 w-40 rounded-full bg-[#4c8cff]/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 right-10 h-48 w-48 rounded-full bg-[#1e3a8a]/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[110rem] px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-end mb-12"
          data-aos="fade-up"
        >
          <div className="space-y-4">
            <span className="badge-chip">Inside the mission</span>
            <h2 className="section-heading">Moments captured from the ground</h2>
            <p className="section-subheading text-left md:text-base">
              Glide through recent field stories and see how every pledge powers rapid mobilisation in the harshest
              winter zones.
            </p>
          </div>
          <div className="rounded-3xl bg-white/65 border border-white/80 p-6 text-sm text-slate-600 shadow-[0_24px_55px_-34px_rgba(30,64,175,0.35)]">
            <p className="leading-relaxed">
              Each frame is authenticated by our field leads and automatically syncs with donor dashboards, keeping
              transparency at the forefront.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="group"
        >
          {slides.map(({ image, eyebrow, title, description, cta }, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-[2.75rem] min-h-[34rem] md:min-h-[40rem] xl:min-h-[44rem]">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover object-center scale-[1.02] group-hover:scale-[1.05] transition-transform duration-[3000ms]"
                  loading="lazy"
                />
                <div className="relative z-10 h-full w-full p-6 md:p-10 flex items-end">
                  <div className="max-w-3xl rounded-[2rem] bg-[#0b1730]/65 backdrop-blur-md border border-white/15 p-6 md:p-8 space-y-4 shadow-[0_35px_70px_-40px_rgba(11,23,48,0.8)]">
                    <span className="uppercase tracking-[0.45em] text-white/70 text-xs block">{eyebrow}</span>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">{title}</h3>
                    <p className="text-white/85 text-sm md:text-base leading-relaxed">{description}</p>
                    <button className="inline-flex items-center gap-3 font-semibold text-white/90 hover:text-white transition">
                      {cta}
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySlider;
