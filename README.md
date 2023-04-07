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

## eslint prettier について
- npm-run-allをインストールして、 package.jsonのスクリプトに作成したfixを呼び出すことで、eslintとpretteirをパラレルチェックしています
- 整形はprettierに任せるようにしています
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

## 状態管理全般
useStateはさておき、Context,Redux,Recoil,useReducer等の概要を理解するTips
### useContext
propsを渡しやすくするもの。
これとuseStateなど、他の状態管理ツールを組み合わせるとよいかも。その場合は、Providerで値や関数を渡す
### usereducertest
useReducer の練習用ページです
複数の状態をスイッチ分岐で使い分けているイメージ
複数の state を一元管理するためにあります。
しまぶーさん動画の 21 をみるとよくわかります。

### valtio
valtioの練習用ページです。
軽くしかやっていませんが、ライトにコードを書くとき向け
### redux
reduxの練習用ページです。
『現在の状態に対し、アクションを用いて新しい状態に仕上げて返す』
【概念】
- legacy_createStoreでストア管理
- _appのProviderでストアを各コンポーネントと共有
- useSelectorで現在のストアを呼び出し
- useDispatchでいくつかのアクションタイプの中から、ストアに変化を加える関数を呼び出し
- 呼び出した関数のアクションタイプにより、ストア内の状態を更新（reducer)

#### reduxtoolkit
reduxはtoolkitを使って実装することが推奨されています
【ポイント】
- addTodo: (state, action: PayloadAction<Pick<Todo, "text">>)のように、前回の状態（state)を呼び出し、指定されたアクションをもとに新しい状態（state）を作成する。
-  const newState = [...prevState, newTodo];のように、新たな状態を明示する必要せずpush等を用いて直接変更することも可能
- configureStore内の reducerがルートステートになるが、これをuseSelectorで呼び出すことで初期値であるcreateSlice内のinitialStateを引っ張り出すことが出来る。

### recoil
reduxのフッ軽版、といったイメージ
【概念】
- Atomが状態管理
- Atomの操作はuseRecoilStateでuseStateのように書き換える
- SelectorはuseRecoilValueでAtomの状態を用いた（用いない場合もあり？）値の操作を実施する。(文字の長さを図るなど）

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

### routerdemo/[slug].tsx

userouter のお作法再確認
[slug]と userouter を合わせる。

<input
onChange={onChange} // assign onChange event
onBlur={onBlur} // assign onBlur event
name={name} // assign name prop
ref={ref} // assign ref prop
/>
// same as above
<input {...register('firstName')} />

### テンポラリメモ

- テクニック 1
  いかのように書くと、いくつかある入力フィールドの onchange を統合できる
  const changeLoginInfo = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setLoginInfo({ ...loginInfo, [name]: value });
  handleLoginInfoValidator(name, value);
  };

### GraphQL 対応について

### test ファイルについて

しまぶーさん動画の Vol.2 まで消化中。（2022/12/5 現在）

## 【重要】ファイルの整理について

- src/atoms・・・Atomic Design に分類されるボタンやモーダルなどの汎用的なＵＩコンポーネントを格納

##  ログインについて
2022/12/22 youtubeをみながらfirebaseを使ったユーザー情報作成画面の実装まで完了
【残りタスク】
・ログイン
・ログアウト


ssdsdss