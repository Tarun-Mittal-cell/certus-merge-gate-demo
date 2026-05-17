const express = require("express");
const app = express();

const API_KEY = "sk_test_hardcoded_secret_12345";

app.get("/redirect", (req, res) => {
  const url = req.query.url;
  res.redirect(url);
});

app.listen(3000);

app.get("/debug", (req, res) => {
  res.send("debug secret: " + API_KEY);
});
