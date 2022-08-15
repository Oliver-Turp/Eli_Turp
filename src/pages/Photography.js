import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import natureImages from "../components/photographyImages/natureExports";

import "../styles/photography.css";

const Photography = () => {
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
            <div className="photo__thumbnail-item">
              <Link to={`/photography/${img.name}`}>
                <img
                  key={img.name}
                  src={img.src}
                  alt="nature"
                  className="photo__image nature"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photography;
