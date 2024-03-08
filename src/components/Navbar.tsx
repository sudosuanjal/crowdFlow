import { useUserContext } from "@/context/AuthProvider";
import { useSignOut } from "@/lib/react-query/queriesAndMutations";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useUserContext();
  const { mutate: SignOut, isSuccess } = useSignOut();

  console.log("user from navbar: " + isAuthenticated);
  console.log("Success: " + isSuccess);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated((prevIsAuthenticated) => {
        return !prevIsAuthenticated;
      });
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <nav className="">
      <div className="flex flex-col bg-primary p-3 md:gap-20">
        <div className="flex flex-row justify-between items-center">
          <img
            src={`./icons/crowdFlow.svg`}
            alt="logo"
            className=" w-15 h-18 md:w-25 md:h-10 mt-2"
          />
          <div className="md:hidden">
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

          <div className="hidden md:block">
            <ul className="flex flex-row gap-4 text-lg font-bold justify-center items-center">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/discover"}>Discover</Link>
              </li>
              <li>
                <Link to={"/hackathons"}>Hackathons</Link>
              </li>
              <li>
                <Link to={"/events"}>Events</Link>
              </li>
              <li>
                <Link to={"/workshops"}>Workshops</Link>
              </li>
              <li>
                <Link to={"/seminar"}>Seminar</Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to={"/profile"}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                        Admin Panel
                      </button>
                    </Link>
                  </li>
                  <li className="mr-5">
                    <button
                      className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold rounded p-1"
                      onClick={() => {
                        console.log("clicked");
                        SignOut();
                      }}
                    >
                      Sign-out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/login"}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="mr-5">
                    <Link to={"/signup"}>
                      <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold rounded p-1">
                        Signup
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div
          onClick={handleClick}
          className={`${
            isOpen
              ? "hidden"
              : "flex flex-row flex-wrap justify-between pt-2 font-bold"
          }`}
        >
          <ul className="flex flex-row flex-wrap gap-4 text-lg font-bold justify-center items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/discover"}>Discover</Link>
            </li>
            <li>
              <Link to={"/hackathons"}>Hackathons</Link>
            </li>
            <li>
              <Link to={"/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/workshops"}>Workshops</Link>
            </li>
            <li>
              <Link to={"/seminar"}>Seminar</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleClick}
          className={`${
            isOpen
              ? "hidden"
              : "flex flex-row justify-center items-center gap-3 pt-2"
          }`}
        >
          {isAuthenticated ? (
            <>
              <Link to={"/profile"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                  Admin Panel
                </button>
              </Link>

              <button
                className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold rounded p-1"
                onClick={() => {
                  SignOut();
                }}
              >
                Sign-out
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded">
                  Login
                </button>
              </Link>

              <Link to={"/signup"}>
                <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold rounded p-1">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
