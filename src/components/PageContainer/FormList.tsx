import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const FormList = () => {
  //mantineバージョン
  const form = useForm<FormValues>({
    initialValues: { name: "", email: "", message: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      // name: (value) =>
      //   value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 1 ? "you must input at least one message" : null,
    },
  });

  const registerUser = async (event: any) => {
    // event.preventDefault();これがあるとフォームのリセットがされない

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  // valuesで一括取得して、form.values型をつけてある
  const doubleSubmit = async (values: typeof form.values) => {
    try {
      // microCMSへのフェッチ
      await fetch("https://top-blog.microcms.io/api/v1/contact", {
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
        } as HeadersInit | undefined,
        method: "POST",
      });
      form.reset();
    } catch (error) {
      console.error("Fetch error: ", error);
      alert(JSON.stringify(error));
    }

    // sendgridへのフェッチ用
    const res = await fetch("/api/send", {
      body: JSON.stringify(values),
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Contact</h2>
      <div className="mt-5 blog-box height-70vh">
        {/* // 引数の渡し方 */}
        <form onSubmit={form.onSubmit((values) => doubleSubmit(values))}>
          {/* <form onSubmit={registerUser}> */}
          <TextInput
            mt="sm"
            name="email"
            type="email"
            label="Email"
            placeholder="your@email.com"
            className="mt-6 "
            {...form.getInputProps("email")}
            required
          />
          <TextInput
            name="name"
            label="Name"
            placeholder="Taro Yamada"
            className="mt-6 "
            {...form.getInputProps("name")}
            required
          />

          <Textarea
            id="message"
            placeholder="I want to order your goods"
            label="Your Message"
            name="message"
            minRows={2}
            className="mt-6 "
            // required
            {...form.getInputProps("message")}
          />
          {/* <Button type="submit" mt="sm">
            送信
          </Button>
          <Button variant="outline" onClick={() => form.reset()}>
            リセット
          </Button> */}
          <div className="mt-6 ">
            <Button type="submit" className="font-semibold button-style">
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
