import { useContext, useRef, useEffect } from "react";

import { PhotographyContext } from "../../pages/Photography";

import "../../styles/fsphotography.css";

const FSPhotography = () => {
  const { fullScreenImg, setIsFullScreen, isFullScreen } =
    useContext(PhotographyContext);

  const fullScreenImgRef = useRef(null);

  useEffect(() => {
    if (isFullScreen) {
      fullScreenImgRef.current.classList.add("show");
    }
  }, [isFullScreen]);

  return (
    <>
      <div
        className="FSphoto__wrap"
        ref={fullScreenImgRef}
        onClick={(e) => {
          fullScreenImgRef.current.classList.remove("show");
          setIsFullScreen(false);
        }}
      >
        <div className="FSphoto__fullscreen">
          <div className="FSphoto__img-wrapper">
            <img
              src={fullScreenImg}
              alt="fullscreenImage"
              className="FSphoto__img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FSPhotography;
