const express = require("express");
const path = require("path");
var request = require("request");
var Feed = require("rss-to-json");
const app = express();
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.route("/api/news/").get((req, res) => {
  Feed.load("https://flipboard.com/@raimoseero/feed-nii8kd0sz?rss", function(
    err,
    rss
  ) {
    res.send(rss);
  });
});

app.route("/api/pagecontent/*").get((req, res) => {
  var options = {
    url: "https://mercury.postlight.com/parser?url=" + String(req.params[0]),
    headers: {
      "x-api-key": "hK5cePoAM8AOBaKxdybQHC06rAwJAnXoRQCCBH1u"
    }
  };
  request(options, function(error, response, body) {
    res.send(body);
  });
});

app.use(express.static(__dirname + "/dist/uptime-newsfeed"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/uptime-newsfeed/index.html"));
});
app.listen(process.env.PORT || 8080);
