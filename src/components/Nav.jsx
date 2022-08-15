import { Link, Outlet, useLocation } from "react-router-dom";
import Temp from "../assets/images/Glados.jpg";
import YT from "../assets/images/youtube.png";
import Twitter from "../assets/images/twitter.png";
import "./nav.css";

const Nav = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <>
      <div className={"nav__bg-" + location}>
        <div className="nav__header">Hamburger</div>
        <Outlet />
        <div className="nav__footer-wrap">
          <div className="nav__footer-socials">
            <div className="nav__footer-item">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={YT} alt="temp" />
              </a>
              <p>YouTube</p>
            </div>
            <div className="nav__footer-item">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="temp" />
              </a>
              <p>Twitter</p>
            </div>
            <div className="nav__footer-item">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Temp} alt="temp" />
              </a>
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
