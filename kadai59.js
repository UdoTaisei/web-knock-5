const express = require("express");
const sqlite3 = require("sqlite3").verbose();

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

// JSON / POSTデータ受け取り
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   更新（UPDATE）
   ========================= */
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;

  const sql = `
    UPDATE users
    SET name = ?, age = ?
    WHERE id = ?
  `;

  db.run(sql, [name, age, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: "更新しました",
      updatedRows: this.changes,
    });
  });
});

/* =========================
   削除（DELETE）
   ========================= */
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.run(sql, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: "削除しました",
      deletedRows: this.changes,
    });
  });
});

/* =========================
   確認用：一覧取得
   ========================= */
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
