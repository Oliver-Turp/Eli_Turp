import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./ratings.css";

const Ratings = () => {
  return (
    <div className="starWrapper">
      <div className="starItem">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <FontAwesomeIcon
              icon={faStar}
              className="starIcon"
              value={ratingValue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
