import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const AdBottomBar = () => {
  const { pathname } = useLocation();
  const isProfile = pathname === "/profile";
  const isCreate = pathname === "/create";

  return (
    <section className="z-50 flex-between w-full sticky bottom-0 rounded-t-[20px] bg-dark-2 px-5 py-4 flex flex-row justify-around md:hidden">
      <Link
        className={`${
          isProfile && "bg-primarylight rounded-[10px]"
        } flex items-center flex-col gap-1 p-2 transition`}
        to={"/profile"}
      >
        <FontAwesomeIcon
          className={`group-hover:invert-white ${isProfile && "invert-white"}`}
          icon={faUser}
        />

        <p className=" tiny-medium text-light-2">Profile</p>
      </Link>

      <Link
        className={`${
          isCreate && "bg-primarylight rounded-[10px]"
        } flex items-center flex-col gap-1 p-2 transition`}
        to={"/create"}
      >
        <FontAwesomeIcon
          className={`group-hover:invert-white ${isProfile && "invert-white"}`}
          icon={faCirclePlus}
        />

        <p className=" tiny-medium text-light-2">Profile</p>
      </Link>
    </section>
  );
};

export default AdBottomBar;
