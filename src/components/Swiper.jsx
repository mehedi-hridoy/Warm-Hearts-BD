import React from 'react';
// Import Swiper React components
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images from assets
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.png';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const ImageSwiper = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-8 md:pt-12">
      <SwiperContainer
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        grabCursor
        className="mySwiper w-full h-[340px] sm:h-[420px] md:h-[560px] lg:h-[680px] xl:h-[760px] overflow-hidden"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default ImageSwiper;