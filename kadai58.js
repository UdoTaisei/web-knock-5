const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// DB接続
const db = new sqlite3.Database("sample.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("DB connected");
  }
});

// POSTデータを受け取るための設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 静的ファイル（HTML）を配信
app.use(express.static("public"));

// 登録API
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  const sql =
    "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";

  db.run(sql, [name, email, age], function (err) {
    if (err) {
      res.status(500).send("登録エラー");
      return;
    }

    // 登録後に一覧を表示（確認用）
    res.redirect("/users");
  });
});

// 登録確認用：ユーザ一覧
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).send("取得エラー");
      return;
    }
    res.json(rows);
  });
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
