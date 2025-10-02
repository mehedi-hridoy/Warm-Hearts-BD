import Hero from '../components/Hero';
import GallerySlider from '../components/GallerySlider';
import ImpactHighlights from '../components/ImpactHighlights';
import HowItWorks from '../components/HowItWorks';
import SuccessStories from '../components/SuccessStories';
import SupportedDivisions from '../components/SupportedDivisions';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
  <GallerySlider />
      <ImpactHighlights />
      <HowItWorks />
      <SuccessStories />
      <SupportedDivisions />
      <CallToAction />
    </>
  );
};

export default Home;
