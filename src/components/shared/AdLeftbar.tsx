import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  faArrowRightFromBracket,
  faCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdLeftbar = () => {
  const { pathname } = useLocation();
  const isProfile = pathname === "/profile";
  const isCreate = pathname === "/create";
  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-primarylight">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/icons/crowdFlow.svg" alt="logo" width={107} height={36} />
        </Link>

        <Link to={`/`} className="items-center flex gap-3">
          <img
            src={"/assets/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold"> name</p>
            <p className="small-regular text-light-3">@username</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          <li
            className={`rounded-lg base-medium hover:bg-primary-500 transition group ${
              isProfile && "bg-primary"
            }`}
          >
            <NavLink to={"/profile"} className="flex gap-4 items-center p-4">
              <FontAwesomeIcon
                className={`group-hover:invert-dominant text-2xl  ${
                  isProfile && "invert-dominant"
                }`}
                icon={faUser}
              />
              Profile
            </NavLink>
          </li>

          <li
            className={`rounded-lg base-medium hover:bg-primary-500 transition group ${
              isCreate && "bg-primary-500"
            }`}
          >
            <NavLink to={"/create"} className="flex gap-4 items-center p-4">
              <FontAwesomeIcon
                className={`group-hover:invert-white text-2xl  ${
                  isCreate && "invert-white"
                }`}
                icon={faCirclePlus}
              />
              Create Post
            </NavLink>
          </li>
        </ul>
      </div>
      <Button
        variant="ghost"
        className="flex gap-4 items-center justify-start hover:bg-transparent hover:text-dominant mt-5 !important"
        //onClick={() => signOut()}
      >
        <FontAwesomeIcon className="text-2xl" icon={faArrowRightFromBracket} />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default AdLeftbar;
