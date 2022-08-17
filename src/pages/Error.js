import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ErrorImage from "../assets/images/ERROR.png";

import "../styles/error.css";

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);
  return (
    <div className="error__wrap">
      <img src={ErrorImage} alt="error" />
    </div>
  );
}
