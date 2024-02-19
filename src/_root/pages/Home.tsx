import FeatureSection from "../../components/FeatureSection";
import { Footer } from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import { Feature, featureData } from "../../utils/FeatureContent";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Home;
