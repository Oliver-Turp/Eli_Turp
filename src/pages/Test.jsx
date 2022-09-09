import { useEffect, useState } from "react";

const Test = () => {
  const [reviews, setReview] = useState([
    {
      _id: "",
      location: "",
      image: "",
      dateISO: "",
      dateString: "",
      rating: "",
      desc: "",
    },
  ]);

  useEffect(() => {
    fetch("/test")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setReviews(jsonRes));
  });

  return;
  <h1>Reviews Test</h1>;
  {
    reviews.map((review) => (
      <div>
        <h1>{review.location}</h1>
        <p>{review.rating}</p>
      </div>
    ));
  }
};
export default Test;
