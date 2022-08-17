import React from "react";
import { useForm } from "@mantine/form";
import {TextInput, Button, Textarea } from "@mantine/core";

export const FormList = () => {
  //mantineバージョン
  const form = useForm({
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

  const registerUser = async (event:any) => {
    // event.preventDefault();これがあるとフォームのリセットがされない

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };
  const test=()=>{

  }

  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Contact</h2>
      <div className="mt-5 blog-box height-70vh">
        <form onSubmit={test}>
        <TextInput
            mt="sm"
            name="email"
            type="email"
            label="Email"
            placeholder="your@email.com"
            className="mt-6 "
            {...form.getInputProps("email")}
            // required
          />
          <TextInput
            name="name"
            label="Name"
            placeholder="Taro Yamada"
            className="mt-6 "
            {...form.getInputProps("name")}
            // required
          />

          <Textarea
            id="message"
            placeholder="I want to order your goods"
            label="Your Message"
            name="message"
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
          <Button className="font-semibold button-style">Send message</Button>
        </div>
        </form>
      </div>
    </div>
  );
};
