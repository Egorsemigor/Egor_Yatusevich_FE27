import { ChangeEventHandler, useState } from "react";
import { EmojiRow } from "../emojiRow";
import { Input } from "../Input";
import { emojies } from "./emoji";

export const EmojiList = () => {
  const [text, setText] = useState("");

  const hendleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };
  const filteredEmojies = emojies.filter((item) =>
    item.title.includes(text) || item.keywords.includes(text) ? true : false
  );
  return (
    <div>
      <Input
        value={text}
        placeholder={"Search Emoji"}
        onChange={hendleOnChange}
      />
      <ul>
        {filteredEmojies.map((post) => (
          <EmojiRow
            title={post.title}
            symbol={post.symbol}
            keywords={post.keywords}
          />
        ))}
      </ul>
    </div>
  );
};
