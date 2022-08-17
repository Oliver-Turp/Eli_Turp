import { Helmet } from "react-helmet";
import { useState, createContext } from 'react'

import natureImages from "../components/photographyImages/natureExports";
import FSPhotography from "../components/photographyImages/FullScreenPhotography";

import "../styles/photography.css";

export const PhotographyContext = createContext();

const Photography = () => {

  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenImg, setFullScreenImg] = useState("")

  const enterFullScreen = (e) => {
    setFullScreenImg(e.target.src)
    setIsFullScreen(true)
  }

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
            <div className="photo__thumbnail-item" key={img.id} onClick={enterFullScreen}>
              <img
                src={img.src}
                alt="nature"
                className="photo__image nature"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full screen version is always rendered but scaled to 0 (i.e is disappears). When isFullScreen is true, it is then scaled up*/}
      <PhotographyContext.Provider value={{ fullScreenImg, setIsFullScreen , isFullScreen}}>
        <FSPhotography />
      </PhotographyContext.Provider>
    </div>
  );
};

export default Photography;
