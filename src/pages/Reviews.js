import Review_1 from "../components/coffeeImages/coffee1.jpg";
import Review_2 from "../components/coffeeImages/coffee2.jpg";
import Review_3 from "../components/coffeeImages/coffee3.jpg";
import Review_4 from "../components/coffeeImages/coffee4.jpg";
import Review_5 from "../components/coffeeImages/coffee5.jpg";
import Review_6 from "../components/coffeeImages/coffee6.jpg";
import Review_7 from "../components/coffeeImages/coffee7.jpg";
import Review_8 from "../components/coffeeImages/coffee8.jpg";
import Review_9 from "../components/coffeeImages/coffee9.jpg";
import Review_10 from "../components/coffeeImages/coffee10.jpg";
import Review_11 from "../components/coffeeImages/coffee11.jpg";
import Review_12 from "../components/coffeeImages/coffee12.jpg";
import Review_13 from "../components/coffeeImages/coffee13.jpg";
import Review_14 from "../components/coffeeImages/coffee14.jpg";

import "../styles/reviews.css";

const Reviews = () => {
  return (
    <div className="reviews__wrap">
      <h1>coffee reviews</h1>
      <div className="reviews__grid">
        <div className="reviews__item">
          <img src={Review_1} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_2} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_3} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_4} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_5} alt="review" />
        </div>

        <div className="reviews__item">
          <img src={Review_6} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_7} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_8} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_9} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_10} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_11} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_12} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_13} alt="review" />
        </div>
        <div className="reviews__item">
          <img src={Review_14} alt="review" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
