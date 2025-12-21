CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,-- アイテムID(主キー,自動採番)
  name TEXT NOT NULL,-- アイテム名(必須)
  price INTEGER,-- 価格
  created_at TEXT DEFAULT (datetime('now'))-- 作成日時(デフォルトで現在日時)
);
