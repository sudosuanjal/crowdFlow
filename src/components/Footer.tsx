import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="p-10 flex flex-col">
      <div className="w-30 h-50">
        <img src="/icons/crowdFlow.svg" />
      </div>
      <h3 className="font-bold">Address:</h3>
      <p className="text-sm">govt.engineering college, wayand</p>
      <h3 className="font-bold">Contact:</h3>
      <p className="text-sm">contact@gmail.com</p>
      <div className="flex gap-4 mt-2">
        <a href="">
          <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};
