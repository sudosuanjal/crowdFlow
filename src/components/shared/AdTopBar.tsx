import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdTopBar = () => {
  return (
    <section className="sticky top-0 z-50 md:hidden bg-dark-2 w-fullsticky w-full">
      {" "}
      <div className="flex justify-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/icons/crowdFlow.svg" alt="logo" width={130} height={325} />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="flex gap-4 items-center justify-start hover:bg-transparent hover:text-dominant !important"
            // onClick={() => signOut()}
          >
            <FontAwesomeIcon
              className="text-2xl"
              icon={faArrowRightFromBracket}
            />
          </Button>
          <Link to={"/"} className="flex-center gap-3">
            <img
              src={"/assets/proflie-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdTopBar;
