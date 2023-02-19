import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
  organization: "org-9uRzdGoXBgnFXYbEBxCtmtlI",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function Home() {
  const [input, setInput] = useState<string>("検索ワードを入れてください");
  const [output, setOutput] = useState<any>("");

  const generateText = async () => {
    if (!input) {
      return;
    }
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0.6,
    });
    setOutput(response.data.choices[0].text);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={generateText}>文字を作成しよう！</button>
      </div>
      <p>{output}</p>
    </div>
  );
}
