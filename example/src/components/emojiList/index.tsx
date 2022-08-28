import { EmojiRow } from "../emojiRow";
import { emojies } from "./emoji";
export const EmojiList = () => {
  return (
    <ul>
      {emojies.map((post) => (
        <EmojiRow
          title={post.title}
          symbol={post.symbol}
          keywords={post.keywords}
        />
      ))}
    </ul>
  );
};
