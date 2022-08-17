import { Link, Outlet, useLocation } from 'react-router-dom';
import Temp from '../assets/images/Glados.jpg';
import YT from '../assets/images/youtube.png';
import Twitter from '../assets/images/twitter.png';
import './nav.css';
import Social from './Social';

const Nav = () => {
  const path = useLocation().pathname;
  const location = path.split('/')[1];

  // I used map to render the social items since they are basically the same kind of things
  const socials = [
    {
      id: 1, 
      name: 'YouTube',
      imgSrc: YT,
      href: 'https://youtube.com/',
      imgAlt: 'youtube logo',
    },
    {
      id: 2, 
      name: 'Twitter',
      imgSrc: Twitter,
      href: 'https://twitter.com/',
      imgAlt: 'twitter logo',
    },
    {
      id: 3,
      name: 'Contact Me',
      imgSrc: Temp,
      href: '#',
      imgAlt: 'contact me',
    },
  ];

  return (
    <>
      <div className={'nav__bg  ' + location}>
        <div className="nav__header">Hamburger</div>

        <Outlet />
        
        <div className="nav__footer-wrap">
          <div className="nav__footer-socials">
              { socials.map(social => <Social {...social} key={social.id}/>) }
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
