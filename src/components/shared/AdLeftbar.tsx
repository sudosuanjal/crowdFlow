import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants";
import { TNavLink } from "@/types";

const AdLeftbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] ">
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
          {sidebarLinks.map((link: TNavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        variant="ghost"
        className="shad-button_ghost"
        //onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default AdLeftbar;
