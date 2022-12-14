import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import YT from "../assets/images/youtube.png";
import Twitter from "../assets/images/twitter.png";
import Contact from "../assets/images/contactMe.png";
import "./nav.css";

const Nav = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <>
      <div className={"nav__bg " + location}>
        <div className="nav__menu-wrap">
          <div className="nav__menu-hoverHere">
            <p>
              Pages <FontAwesomeIcon icon={faCaretDown} />
            </p>
            <div className="nav__menu_drop-wrap">
              <Link to="/">Home</Link>
              <Link to="youtube">Channel Updates</Link>
              <Link to="reviews">Coffee Reviews</Link>
              <Link to="photography">Photography</Link>
              <Link to="contact">Contact Me</Link>
            </div>
          </div>
        </div>
        <Outlet />
        <div className="nav__footer-wrap">
          <div className="nav__footer-socials">
            <div className="nav__footer-item">
              <a
                href="https://www.youtube.com/channel/UCmPB-vlqGBXEx5drz-0TLWg?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={YT} alt="yt" />
              </a>
              <p>YouTube</p>
            </div>
            <div className="nav__footer-item">
              <a
                href="https://twitter.com/EliTurp"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="twitter" />
              </a>
              <p>Twitter</p>
            </div>
            <div className="nav__footer-item">
              <Link to="/contact">
                <img src={Contact} alt="contact" />
              </Link>
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
