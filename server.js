const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "moviemania-ui", "build")));
  res.sendFile(path.resolve(__dirname, "moviemania-ui", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("Backend server is running");
});
