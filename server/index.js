const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", router);
app.listen(5566, () => {
  console.log("server listening");
});
