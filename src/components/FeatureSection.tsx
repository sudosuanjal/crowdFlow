import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faArrowUpRightFromSquare,
  faCircleInfo,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";

const FeatureSection = () => {
  return (
    <div className="md:flex md:flex-row">
      <div className="py-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-4 text-dominant">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <h2 className="text-3xl font-bold mb-4 mx-5">
            Discover Exciting Events and Workshops Near You
          </h2>

          <p className="text-sm mx-10">
            CrowdFlow provides a comprehensive list of upcoming hackathons,
            events, workshops, and seminars taking place in colleges across the
            state. Stay updated and never miss out on the latest opportunities
            to learn, network, and showcase your skills.
          </p>
          <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 mt-4 rounded">
            Workshops
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
      </div>

      <div className="py-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-4 text-dominant">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>

          <h2 className="text-3xl font-bold mb-4 mx-5">
            Stay Informed About Hackathon Updates
          </h2>

          <p className="text-md mx-10">
            With CrowdFlow, you'll receive real-time updates on hackathons
            happening near you. Get information on themes, prizes, and
            registration deadlines, ensuring you never miss a chance to
            participate in these exciting coding challenges.
          </p>
          <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 mt-4 rounded">
            Hackathons
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
      </div>

      <div className="py-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-4 text-dominant">
            <FontAwesomeIcon icon={faWpexplorer} />
          </div>

          <h2 className="text-3xl font-bold mb-4 mx-5">
            Explore Engaging Workshops and Seminars
          </h2>

          <p className="text-md mx-10">
            Expand your knowledge and skills by attending workshops and seminars
            organized by CrowdFlow. Learn from industry experts, gain valuable
            insights, and connect with like-minded individuals who share your
            passion for learning and growth.
          </p>
          <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 mt-4 rounded  ">
            Seminar
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
