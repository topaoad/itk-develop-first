import { useRouter } from "next/router";
import Link from "next/link";

//react-hook-form
import { useFormContext, SubmitHandler } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う


const Confirm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    getValues,
    formState: { isValid } //form内の入力の有無や送信の状態などを取得できる isValid以外にも色々ある
  } = useFormContext<ContactType>();

  const values = getValues(); // 入力データを取得

  //直アクセスの場合はリダイレクト
  //※必須項目の無いフォームは無いと思うのでisValidで判定
  if (!isValid) {
    router.push(`/`);
  }

  const onSubmit: SubmitHandler<any> = async (data) => {
    //ここでメール送信などのAPIを叩くなど処理をする想定
    router.push("/complete");
  };

  return (
    <div>
    eee
    </div>

  );
};

export default Confirm;