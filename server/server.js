const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yifph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/signup", require("./routes/signup_routes"));
app.use("/login", require("./routes/login_routes"));

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server Running at " + process.env.SERVER_PORT)
);
