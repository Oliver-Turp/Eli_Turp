import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useRef, useEffect } from 'react'

import natureImages from "./natureExports";
import '../../styles/fsphotography.css'
import { PhotographyContext } from '../../pages/Photography'

const FSPhotography = () => {
  // const { imgName } = useParams();
  const { fullScreenImg, setIsFullScreen, isFullScreen } = useContext(PhotographyContext)

  // const img = natureImages.find((img) => img.name === imgName);
  const fullScreenImgRef = useRef(null);


  useEffect(() => {
    if (isFullScreen) {
      fullScreenImgRef.current.classList.add("show");
    }
  }, [isFullScreen])

  return (
    <>
      <div className="FSphoto__wrap" ref={fullScreenImgRef} onClick={(e) => {
        fullScreenImgRef.current.classList.remove("show")
        setIsFullScreen(false)
      }}>
        <Helmet>
          <title>Eli Turp | FSPhotography</title>
        </Helmet>
        <div className="FSphoto__fullscreen">
          <div className="FSphoto__img-wrapper">
            <img src={fullScreenImg} alt="fullscreenImage" className="FSphoto__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FSPhotography;
