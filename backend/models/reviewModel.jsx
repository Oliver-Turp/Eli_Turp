const mongoose = require("mongoose");

const reviewSchema = {
  location: String,
  image: String,
  dateISO: Date,
  dateString: String,
  rating: Double,
  desc: String,
  _id: ObjectId,
};

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
