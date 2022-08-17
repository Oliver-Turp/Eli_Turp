import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../assets/images/logoCircle.png";
import Channel from "../assets/images/channel.png";
import Coffee from "../assets/images/coffee.png";
import Camera from "../assets/images/camera.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home__wrap">
      <Helmet>
        <title>Eli Turp | Home</title>
      </Helmet>
      <div className="home__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home__title-wrap">
        <h1>Eli Turp</h1>
        <h3>
          welcome to my website where I will be housing channel updates, coffee
          reviews and photography!
        </h3>
      </div>
      <div className="home__content-wrap">
        <div className="home__content-left">
          <Link to="/youtube">
            <img src={Channel} alt="temp" />
          </Link>
          <p>channel updates and playlists</p>
        </div>
        <div className="home__content-center">
          <Link to="/reviews">
            <img src={Coffee} alt="temp" />
          </Link>
          <p>my journey as a self proclaimed coffee connoisseur</p>
        </div>
        <div className="home__content-right">
          <Link to="/photography">
            <img src={Camera} alt="temp" />
          </Link>
          <p>pictures of nature, architecture and more!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
