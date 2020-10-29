const express = require("express");
const app = express();
const port = 5000;
const Data = require("./Data");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json(Data);
});

app.listen(port, () => {
  console.log(`listning on port ${port}`);
});
