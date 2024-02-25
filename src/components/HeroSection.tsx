import { Link } from "react-router-dom";

const HeroSection = () => {
  const backgroundImageUrl = "url('/assets/hero.jpg')"; // Replace with your image path

  return (
    <div
      className="relative h-96 bg-cover bg-center text-white flex items-center justify-center pb-5"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute text-center z-10">
        <h1 className="text-4xl font-bold mb-4 mx-8">
          Connecting students with <br className="hidden md:block" /> hackathons
          and events
        </h1>
        <p className="text-md mx-8">
          Explore thrilling hackathons, events, workshops, and seminars taking
          place at colleges in the <br className="hidden md:block" />
          state of <span className="text-2xl font-extrabold">Kerala</span> .
          Engage with the community and maximize your potential.
        </p>
        <Link to={"/discover"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            Discover
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
