import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Upcoming = () => {
  return (
    <div className="flex flex-col py-12 mx-7 ">
      <div className="flex flex-col mb-5 gap-1 md:mx-auto md:justify-center md:items-center">
        <p className="text-sm font-medium md:text-xl">Discover</p>
        <h3 className="text-3xl font-black md:text-5xl">Upcoming</h3>
        <p className="text-sm md:text-lg">
          stay updated with the lastest hackathons,
          <br className="md:hidden" /> seminar, and workshops near you
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        {/**hackathons events */}
        <div className="mb-7">
          <img src="https://placehold.co/600x400" />
          <div className="mt-5 flex  justify-start gap-3">
            <div className="flex gap-1">
              <FontAwesomeIcon className="text-2xl" icon={faCalendar} />
              <p>sat 10 Feb 2024</p>
            </div>
            <div className="flex gap-1">
              <FontAwesomeIcon
                className="text-2xl text-green-500"
                icon={faLocationDot}
              />
              <p>sat 10 Feb 2024</p>
            </div>
          </div>
          <h2 className="text-2xl text-yellow-400 font-medium mt-2">
            Hackathon
          </h2>
          <p className="text-sm">
            join us for exciting hackathon event showcasing innovative projects.
          </p>
        </div>
        {/**seminar events */}
        <div>
          <img src="https://placehold.co/600x400" />
          <div className="mt-5 flex  justify-start gap-3">
            <div className="flex gap-1">
              <FontAwesomeIcon className="text-2xl" icon={faCalendar} />
              <p>sat 10 Feb 2024</p>
            </div>
            <div className="flex gap-1">
              <FontAwesomeIcon
                className="text-2xl text-green-500"
                icon={faLocationDot}
              />
              <p>sat 10 Feb 2024</p>
            </div>
          </div>
          <h2 className="text-2xl text-yellow-400 font-medium mt-2">Seminar</h2>
          <p className="text-sm">
            learn from industry experts in our informative seminar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
