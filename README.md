# 50. データベースとは何か

大量のデータを整理された形で保存し，必要に応じて高速かつ安全に検索・更新・管理できる仕組み。  
RDBMS（リレーショナルデータベース管理システム）は，データを表（テーブル）として管理し，行と列の関係によってデータ同士の関連を表現する。  
SQLと呼ばれる専用言語を用いて，データの追加・取得・更新・削除を行える点が特徴であり，Webサービスや業務システムなど幅広い分野で利用されている。

# 51. SQLiteを用いたデータベースの作成
![kadai51.png](images/kadai51.png)

# 52. SQLでテーブルを作成
sqlite3 sample.db < create_users.sql (ファイルから実行)  
.tables                 (テーブル一覧)  
.schema テーブル名  

![kadai52_1.png](images/kadai52_1.png)  
![kadai52_2.png](images/kadai52_2.png)

# 53. レコードの追加・検索
![kadai53.png](images/kadai53.png)

# 54. レコードの更新・削除
![kadai54.png](images/kadai54.png)

# 55. 複数条件での検索や並べ替え
where: 条件に合致するレコードを抽出する。
order by: 並べ替える。
![kadai55_1.png](images/kadai55_1.png)
![kadai55_2.png](images/kadai55_2.png)

# 56. Node.jsからデータベースに接続
![kadai56.png](images/kadai56.png)
[kadai56.js](kadai56.js)
# 57. Webサーバとデータベースの連携
![kadai57.png](images/kadai57.png)

# 58. Webフォームからの入力データをデータベースに登録
![kadai58_1.png](images/kadai58_1.png)
![kadai58_2.png](images/kadai58_2.png)

# 59. 登録データの編集・削除機能の実装
![kadai59_1.png](images/kadai59_1.png)
![kadai59_2.png](images/kadai59_2.png)
[kadai59.js](kadai59.js)