// SQLite3モジュールをインポート
const sqlite3 = require("sqlite3").verbose();

// データベースに接続
const db = new sqlite3.Database("sample.db", (err) => {
  if (err) {
    console.error("エラー:", err.message);
    return;
  }
  console.log("接続成功");
});

// テーブル一覧を取得
db.all(
  "SELECT name FROM sqlite_master WHERE type='table';",
  (err, rows) => {
    if (err) {
      console.error("取得エラー:", err.message);
      return;
    }

    console.log("テーブル一覧:");
    rows.forEach((row) => {
      console.log(row.name);
    });

    // 接続を閉じる
    db.close();
  }
);
