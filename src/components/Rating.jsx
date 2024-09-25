import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss"
function Rating ()  {
  let ratings = [true, true, true, true, true];
  return (
  <div className="rating">
      {ratings.map((isFilled, index) => (
        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
      ))}
    </div>
  );
};

export default Rating;
