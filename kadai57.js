// モジュールをインポート
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

// SQLite に接続
const db = new sqlite3.Database("sample.db", (err) => {
  if (err) {
    console.error("エラー:", err.message);
  }
});

// API：ユーザ一覧を JSON で返す
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  
  //db.all で全行取得
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(rows); // ← JSONで返す
  });
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
