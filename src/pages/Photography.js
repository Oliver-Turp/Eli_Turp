import { Helmet } from "react-helmet";
import { useState, createContext } from "react";

import natureImages from "../components/photographyImages/natureExports";
import urbanImages from "../components/photographyImages/urbanExports";
import otherImages from "../components/photographyImages/otherExports";
import FSPhotography from "../components/photographyImages/FullScreenPhotography";

import "../styles/photography.css";

export const PhotographyContext = createContext();

const Photography = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState("");

  const enterFullScreen = (e) => {
    setFullScreenImg(e.target.src);
    setIsFullScreen(true);
  };

  return (
    <div className="photo__wrap">
      <Helmet>
        <title>Eli Turp | Photography</title>
      </Helmet>
      <h1>Photography Portfolio</h1>

      <div className="photo__thumbnail-wrap">
        <h3>nature</h3>
        <div className="photo__thumbnail-content">
          {natureImages.map((img) => (
            <div
              className="photo__thumbnail-item"
              key={img.id}
              onClick={enterFullScreen}
            >
              <img src={img.src} alt="nature" className="photo__image nature" />
            </div>
          ))}
        </div>
      </div>

      <div className="photo__thumbnail-wrap">
        <h3>urban</h3>
        <div className="photo__thumbnail-content">
          {urbanImages.map((img) => (
            <div
              className="photo__thumbnail-item"
              key={img.id}
              onClick={enterFullScreen}
            >
              <img src={img.src} alt="urban" className="photo__image urban" />
            </div>
          ))}
        </div>
      </div>

      <div className="photo__thumbnail-wrap">
        <h3>other</h3>
        <div className="photo__thumbnail-content">
          {otherImages.map((img) => (
            <div
              className="photo__thumbnail-item"
              key={img.id}
              onClick={enterFullScreen}
            >
              <img src={img.src} alt="other" className="photo__image other" />
            </div>
          ))}
        </div>
      </div>

      {/* Full screen version is always rendered but scaled to 0 (i.e it is made to shrink to nothing). When isFullScreen is true, it is then scaled up*/}
      <PhotographyContext.Provider
        value={{ fullScreenImg, setIsFullScreen, isFullScreen }}
      >
        <FSPhotography />
      </PhotographyContext.Provider>
    </div>
  );
};

export default Photography;
