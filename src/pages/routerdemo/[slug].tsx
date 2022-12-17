import { useRouter } from "next/router";

export default function ReadMore({ slug }:any) {
  const router = useRouter();
  // router.queryにはslugがオブジェクトで入る
  console.log(router.query);
  return (
    <button
      type="button"
      onClick={() => {
        router.push({
          pathname: "/routerdemo/[slug]",
          query: { slug: router.query.slug },
        });
      }}
    >
      useRouterの挙動確認ページです
    </button>
  );
}
