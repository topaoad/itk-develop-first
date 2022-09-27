# 使用技術
Next.js　
React　
TypeScript　
ESLint　
prettier　
Mantine
Tailwind.css
yarn(うっかりnpmをつかったら、lockファイルを都度消してます)

# フロントエンド
/itk-teamfirst直下になります。
## コマンド
yarnを使っています
### srcフォルダ内の各フォルダの役割について
- components
ヘッダーやフッダーなど、各ファイル内に使用されるパーツを格納します。
- hooks
カスタムフックを格納します。
- lib
使用中のライブラリに関する設定などを格納します。
- types
TypeScriptの型定義を格納します。
- utils
ページやコンポーネント間で使い回す変数情報などを格納します。

### 命名規則
@typescript-eslint/naming-conventionで管理。
ルールについては.eslintrc.json参照

### コードのチェック及び整形、ソートについて
- ESLintとprettierを使用（パッケージとプラグイン）
- プラグイン「eslint-plugin-sort-keys-custom-order」によって、オブジェクトの順序を設定しています。
※自動順序整形はsetting.json内の "editor.codeActionsOnSave": {
    "source.fixAll": true
  }により実施しています。

### import・exportの管理について
- import・exportのソートはプラグイン
「eslint-plugin-simple-import-sort」で実施しています。
- 不要なimportはプラグイン「eslint-plugin-unused-imports」で削除しています。（setting.jsonの設定不要）
- importしていないコンポーネントはsetting.json内の "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
  }により実施しています。

### GraphQL対応について
- src/api/githubgraphqlにてデータの取得は完了
- Apollo Clientを使ったデータ取得も完了
　・必要なパッケージのインストール
　・client情報を作成し、_appにApolloProviderの引数として渡す
　・クエリー作成
　・取得 
　参考サイト：
 https://maku.blog/p/qcp2cnx/#node-%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
- APIルートを使ったGraphQLサーバー化はできていません。
〇 実装手順


### 型の自動生成について
GitHubのパブリックスキーマから取得したデータを元に、
codegenで型を自動生成しています。

### その他