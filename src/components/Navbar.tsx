import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="">
      <div className="flex flex-col bg-primary p-3 ">
        <div className="flex flex-row justify-between items-center">
          <img
            src={`./icons/crowdFlow.svg`}
            alt="logo"
            className=" w-15 h-18 md:w-25 md:h-10 mt-2" // Adjust width and height as needed
          />
          {isOpen ? (
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faBars}
              className="text-2xl"
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faCircleXmark}
              className="text-2xl text-red-600"
            />
          )}
        </div>
        <div
          onClick={handleClick}
          className={`${
            isOpen ? "hidden" : "flex flex-row flex-wrap justify-between pt-2"
          }`}
        >
          <p>Home</p>
          <p>hackathons</p>
          <p>workshops</p>
          <p>events</p>
          <p>seminars</p>
        </div>
        <div
          onClick={handleClick}
          className={`${
            isOpen
              ? "hidden"
              : "flex flex-row justify-center items-center gap-3 pt-2"
          }`}
        >
          <p>log-In</p>
          <p>Sign-In</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
