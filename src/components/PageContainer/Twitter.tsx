import React from "react";
import { Button, Avatar } from "@mantine/core";

export type twitterProps = {
  item: [];
};

export function Twitter({item}:twitterProps) {
  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Twitter</h2>
      <div className="mt-5 blog-box">
        
        <div className="mt-6 ">
          <div className="flex mt-2">
            <Avatar className="mr-4  " src="assets/img/shimaboo.jpg" alt="しまぶー画像" />
            <div className="  ">
              <div>
                <div className="mr-4 mt-2 flex items-center">
                  <div className="mr-2">しまぶーのIT大学</div>
                  <div className="  font-bold  text-xs font-color-dark2">
                    @shimabu_it・5月25日
                  </div>
                </div>
                <p className="">
                  📣 新サービス「Noway Form」をリリースしました！ <br /> <br />
                  Noway
                  Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                  FormsでやっていたことがNotionだけで完結します✌✨
                  <br /> <br />
                  試しに使っていただけると幸いです😊
                  <br /> <br />
                  https://www.noway-form.com/ja
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 ">
          <div className="flex mt-2">
            <Avatar className="mr-4  " src="assets/img/shimaboo.jpg" alt="しまぶー画像" />
            <div className="  ">
              <div>
                <div className="mr-4 mt-2 flex items-center">
                  <div className="mr-2">しまぶーのIT大学</div>
                  <div className="  font-bold  text-xs font-color-dark2">
                    @shimabu_it・5月25日
                  </div>
                </div>
                <p className="">
                  📣 新サービス「Noway Form」をリリースしました！ <br /> <br />
                  Noway
                  Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                  FormsでやっていたことがNotionだけで完結します✌✨
                  <br /> <br />
                  試しに使っていただけると幸いです😊
                  <br /> <br />
                  https://www.noway-form.com/ja
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <div className="flex mt-2">
            <Avatar className="mr-4  " src="assets/img/shimaboo.jpg" alt="しまぶー画像" />
            <div className="  ">
              <div>
                <div className="mr-4 mt-2 flex items-center">
                  <div className="mr-2">しまぶーのIT大学</div>
                  <div className="  font-bold  text-xs font-color-dark2">
                    @shimabu_it・5月25日
                  </div>
                </div>
                <p className="">
                  📣 新サービス「Noway Form」をリリースしました！ <br /> <br />
                  Noway
                  Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
                  FormsでやっていたことがNotionだけで完結します✌✨
                  <br /> <br />
                  試しに使っていただけると幸いです😊
                  <br /> <br />
                  https://www.noway-form.com/ja
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View on Twitter</Button>
        </div>
      </div>
    </div>
  );
}
