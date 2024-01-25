const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
const url = require("url");
const searchData = require("./data/search");
const detailsData = require("./data/details");
const commentsData = require("./data/comment");
const orderCommentData = require("./data/order");

router.get("/home/hot1", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  console.log(cityName);
  res.send({
    status: 200,
    result: homehot.hot1,
  });
});

router.get("/home/hot2", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  res.send({
    status: 200,
    result: homehot.hot2,
  });
});

router.get("/search", (req, res) => {
  const search = url.parse(req.url, true).query.search;
  console.log(search);
  res.send({
    status: 200,
    result: searchData,
  });
});

router.get("/details", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  res.send(detailsData);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      status: 200,
      token: "11111",
      nick: username,
    });
  } else {
    res.send({
      status: 400,
      msg: "用户名密码错误",
    });
  }
});

router.get("/comment", (req, res) => {
  const id = url.parse(req.url).query.id;
  res.send({
    status: 200,
    result: commentsData,
  });
});

router.get("/order/comment", (req, res) => {
  const username = url.parse(req.url, true).query.username;
  const id = url.parse(req.url, true).query.id;
  res.send({
    status: 200,
    result: orderCommentData,
  });
});

module.exports = router;
