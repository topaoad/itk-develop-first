# 使用技術
Next.js　
React　
TypeScript　
ESLint　
prettier　
Mantine
Tailwind.css
yarn(うっかりnpmをつかったら、lockファイルを都度消してます)

## フロントエンド
/itk-teamfirst直下になります。
## コマンド
yarnを使っています
## srcフォルダ内の各フォルダの役割について
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

## 命名規則
@typescript-eslint/naming-conventionで管理。
ルールについては.eslintrc.json参照

## コードのチェック及び整形、ソートについて
- ESLintとprettierを使用（パッケージとプラグイン）
- プラグイン「eslint-plugin-sort-keys-custom-order」によって、オブジェクトの順序を設定しています。
※自動順序整形はsetting.json内の "editor.codeActionsOnSave": {
    "source.fixAll": true
  }により実施しています。

## import・exportの管理について
- import・exportのソートはプラグイン
「eslint-plugin-simple-import-sort」で実施しています。
- 不要なimportはプラグイン「eslint-plugin-unused-imports」で削除しています。（setting.jsonの設定不要）
- importしていないコンポーネントはsetting.json内の "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
  }により実施しています。

## GraphQL対応について
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


## 型の自動生成について
GitHubのパブリックスキーマから取得したデータを元に、
codegenで型を自動生成しています。

## 【仕組みの整理用】学習用ページ追加について
以下のページにて学習用ページやコンポーネントを追加中。mainにはマージせず、ここで深堀する。
### todo-sample
簡単にtodoリストを作成するサンプルコード
削除ボタンも追加
参考
https://qiita.com/itachi/items/4184b2afc35b55b45568
https://zenn.dev/sprout2000/books/76a279bb90c3f3/viewer/chapter13

### usereducertest
useReducerの練習用ページです
複数の状態をスイッチ分岐で使い分けているイメージ
複数のstateを一元管理するためにあります。
しまぶーさん動画の21をみるとよくわかります。
#### 仕組みを一言で言うと
stateとactionをペアで管理し、actionから新しいstateを作成する。
(state, action) => newState 
### GraphQL対応について

### testファイルについて
しまぶーさん動画のVol.2まで消化中。（2022/12/5現在）


## 【重要】ファイルの整理について
- src/atoms・・・Atomic Designに分類されるボタンやモーダルなどの汎用的なＵＩコンポーネントを格納


### その他