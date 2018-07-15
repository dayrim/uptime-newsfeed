//Install express server
//Install express server

const express = require("express");
const path = require("path");
var request = require("request");
var Feed = require("rss-to-json");
const app = express();
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
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

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
