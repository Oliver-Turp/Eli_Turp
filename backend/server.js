const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://oliver_turp:dfXFrQG8rQtjcwSj@cluster0.crwg4hs.mongodb.net/EliTurp"
);

app.use("/", require("./routes/reviewRoute"));

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
