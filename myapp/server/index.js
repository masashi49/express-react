const express = require("express");
const path = require("path"); // NEW

const app = express(); //読み込んだexpressモジュールをinstans化する。
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW
const mockResponse = {
  foo: "bar",
  bar: "foo"
};
app.use(express.static(DIST_DIR)); // DIST_DIRのパスにある静的ファイルを提供する

app.get("/api", (req, res) => {
  console.log(req);
  res.send(mockResponse);
});

app.get("/", (req, res) => {
  //expressを使って静的ページを出力する
  res.sendFile(HTML_FILE); // EDIT
});

app.listen(port, function() {
  console.log("App listening on port: " + port);
});
