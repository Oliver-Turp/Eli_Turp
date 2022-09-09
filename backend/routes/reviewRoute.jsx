const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");

router.route("/test").get((req, res) => {
  Review.find().then((foundReview) => res.json(foundReview));
});

module.exports = router;
