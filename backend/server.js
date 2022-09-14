const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ReviewModel = require("./models/Reviews");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Admin:JujuS00p96@cluster0.crwg4hs.mongodb.net/EliTurp?retryWrites=true&w=majority"
);

app.get("/getReviews", (req, res) => {
  ReviewModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createReview", async (req, res) => {
  const review = req.body;
  const newReview = new ReviewModel(review);
  await newReview.save();

  res.json(review);
});

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
