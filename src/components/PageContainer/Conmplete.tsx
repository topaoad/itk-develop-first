
import Link from "next/link";


const Complete = () => {
  //直アクセスの場合は何かしらのフラグ管理をして、リダイレクト処理をする想定
  return (
    <div className="wrapper">
      <h1>お問い合わせありがとうございました。</h1>
      <p>
        <Link href="/">
          <a>トップに戻る</a>
        </Link>
      </p>
    </div>
  );
};

export default Complete;
