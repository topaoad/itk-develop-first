/* eslint-disable no-console */
// import sgMail from "@sendgrid/mail";
import { EmailData } from "@sendgrid/helpers/classes/email-address";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

    const msg = {
      from: process.env.SENDGRID_EMAIL as EmailData, //送信元
      html: `
        <strong>${req.body.name}さんからの問い合わせ</strong>
        <p>内容：${req.body.message}</p>
       
        `,
      subject: "お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
      to: req.body.email, //送信先（本文のemailを持ってくるとよい
    };

    (async () => {
      try {
        await sgMail.send(msg);
        res.status(200).send("送信成功です！");
      } catch (error: any | unknown) {
        console.error(error);
        res.status(400).send("送信失敗しちゃった・・・");
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
