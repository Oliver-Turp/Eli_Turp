import { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/test.css";

const Test = () => {
  const [listOfReviews, setListOfReviews] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [desc, setDesc] = useState("");

  function ClearFields() {
    const inputLocation = document.getElementById("review__location");
    const inputURL = document.getElementById("review__url");
    const inputDate = document.getElementById("review__date");
    const inputRating = document.getElementById("review__rating");
    const inputDesc = document.getElementById("review__desc");
    inputLocation.value = "";
    inputURL.value = "";
    inputDate.value = "";
    inputRating.value = "";
    inputDesc.value = "";
  }

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getReviews").then((response) => {
  //     setListOfReviews(response.data);
  //   });
  // });

  useEffect(() => {
    Axios.get("http://localhost:3001/getReviews").then((response) => {
      const sortedReviews = response.data.sort((a, b) =>
        b.date.localeCompare(a.date)
      );
      setListOfReviews(sortedReviews);
    });
  });

  const createReview = () => {
    Axios.post("http://localhost:3001/createReview", {
      location,
      imageUrl,
      date: new Date(date + "Z"),
      rating,
      desc,
    }).then((response) => {
      setListOfReviews([...listOfReviews, { location, date, rating, desc }]);
    });
    ClearFields();
  };

  return (
    <div className="test-container">
      <div className="test-reviews">
        {listOfReviews.map((review) => {
          return (
            <div key={review._id} className="review-card">
              <img src={review.imageUrl} alt="coffee" />
              <div className="review-card_top">
                <p>{review.location}</p>
                <p>{new Date(review.date).toLocaleDateString("en-GB")}</p>
              </div>
              <p>{review.rating} / 5</p>
              <p id="review-desc">{review.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="test-form">
        <h1>Enter A New Review</h1>
        <input
          id="review__location"
          type="text"
          placeholder="Location..."
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          autoComplete="off"
        />
        <input
          id="review__url"
          type="text"
          placeholder="URL..."
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
          autoComplete="off"
        />
        <input
          id="review__date"
          type="date"
          placeholder="Date..."
          onChange={(event) => {
            setDate(event.target.value);
          }}
          autoComplete="off"
        />
        <input
          id="review__rating"
          type="number"
          placeholder="Rating..."
          step="0.1"
          onChange={(event) => {
            setRating(event.target.value);
          }}
          autoComplete="off"
        />
        <input
          id="review__desc"
          type="text"
          placeholder="Description..."
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          autoComplete="off"
        />
        <button onClick={createReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default Test;
