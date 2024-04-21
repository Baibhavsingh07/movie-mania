const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
require("dotenv").config();

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
    console.log(1);
  });

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "moviemania-ui", "build")));
  res.sendFile(path.resolve(__dirname, "moviemania-ui", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Backend server is running");
});
