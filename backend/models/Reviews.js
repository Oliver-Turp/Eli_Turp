const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const ReviewModel = mongoose.model("CoffeeReviews", ReviewSchema);
module.exports = ReviewModel;
