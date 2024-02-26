import FeatureSection from "../../components/FeatureSection";
import { Footer } from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Upcoming from "./Upcoming";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default Home;
