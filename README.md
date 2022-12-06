# 使用技術

Next.js 　
React 　
TypeScript 　
ESLint 　
prettier 　
Mantine
Tailwind.css
yarn(うっかり npm をつかったら、lock ファイルを都度消してます)

## フロントエンド

/itk-teamfirst 直下になります。

## コマンド

yarn を使っています

## src フォルダ内の各フォルダの役割について

- components
  ヘッダーやフッダーなど、各ファイル内に使用されるパーツを格納します。
- hooks
  カスタムフックを格納します。
- lib
  使用中のライブラリに関する設定などを格納します。
- types
  TypeScript の型定義を格納します。
- utils
  ページやコンポーネント間で使い回す変数情報などを格納します。

## 命名規則

@typescript-eslint/naming-convention で管理。
ルールについては.eslintrc.json 参照

## コードのチェック及び整形、ソートについて

- ESLint と prettier を使用（パッケージとプラグイン）
- プラグイン「eslint-plugin-sort-keys-custom-order」によって、オブジェクトの順序を設定しています。
  ※自動順序整形は setting.json 内の "editor.codeActionsOnSave": {
  "source.fixAll": true
  }により実施しています。

## import・export の管理について

- import・export のソートはプラグイン
  「eslint-plugin-simple-import-sort」で実施しています。
- 不要な import はプラグイン「eslint-plugin-unused-imports」で削除しています。（setting.json の設定不要）
- import していないコンポーネントは setting.json 内の "editor.codeActionsOnSave": {
  "source.addMissingImports": true,
  }により実施しています。

## GraphQL 対応について

- src/api/githubgraphql にてデータの取得は完了
- Apollo Client を使ったデータ取得も完了
  　・必要なパッケージのインストール
  　・client 情報を作成し、\_app に ApolloProvider の引数として渡す
  　・クエリー作成
  　・取得
  　参考サイト：
  https://maku.blog/p/qcp2cnx/#node-%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
- API ルートを使った GraphQL サーバー化はできていません。
  〇 実装手順

## 型の自動生成について

GitHub のパブリックスキーマから取得したデータを元に、
codegen で型を自動生成しています。

## 【仕組みの整理用】学習用ページ追加について

以下のページにて学習用ページやコンポーネントを追加中。main にはマージせず、ここで深堀する。

### todo-sample

簡単に todo リストを作成するサンプルコード
削除ボタンも追加
参考
https://qiita.com/itachi/items/4184b2afc35b55b45568
https://zenn.dev/sprout2000/books/76a279bb90c3f3/viewer/chapter13

### usereducertest

useReducer の練習用ページです
複数の状態をスイッチ分岐で使い分けているイメージ
複数の state を一元管理するためにあります。
しまぶーさん動画の 21 をみるとよくわかります。

#### 仕組みを一言で言うと

state と action をペアで管理し、action から新しい state を作成する。
(state, action) => newState

## フォーム作成用ページ

以下はフォーム作成用ページ
参考：https://reffect.co.jp/react/react-hook-form#i

### userefform

useref を使用したフォーム
型定義の参考
https://qiita.com/FumioNonaka/items/feb2fd5b362f2558acfa

### reacthookform

reacthookform を使用したフォーム
最低限の型付けも完了。(useform にジェネリクスでオブジェクト値を設定した type を指定)
{...register}は onChange などのスプレッド構文
const { onChange, onBlur, name, ref } = register('firstName');
// include type check against field path with the name you have supplied.

<input
onChange={onChange} // assign onChange event
onBlur={onBlur} // assign onBlur event
name={name} // assign name prop
ref={ref} // assign ref prop
/>
// same as above
<input {...register('firstName')} />

### GraphQL 対応について

### test ファイルについて

しまぶーさん動画の Vol.2 まで消化中。（2022/12/5 現在）

## 【重要】ファイルの整理について

- src/atoms・・・Atomic Design に分類されるボタンやモーダルなどの汎用的なＵＩコンポーネントを格納

### 【未実装項目】

以下はやれたらやってみる
- useContext でデータ共有(state の LiftUp+useState もしくは useReducer)
https://reffect.co.jp/react/react-usecontext-understanding#i
