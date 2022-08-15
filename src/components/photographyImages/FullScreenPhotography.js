import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import natureImages from "./natureExports";

import "../../styles/photography.css";

const FSPhotography = () => {
  const { imgName } = useParams();
  const img = natureImages.find((img) => img.name === imgName);
  const { src } = img;

  return (
    <div className="FSphoto__wrap">
      <Helmet>
        <title>Eli Turp | FSPhotography</title>
      </Helmet>
      <div className="FSphoto__fullscreen">
        <img src={src} alt="fullscreenImage" />
        Test!
      </div>
    </div>
  );
};

export default FSPhotography;
