import style from "./style.module.css";
interface IProps {
  title: string;
  symbol: string;
  keywords: string;
}
export const EmojiRow = (props: IProps) => {
  return (
    <div className={style.emojiRow}>
      <div>{props.symbol}</div>
      <p>{props.title}</p>
    </div>
  );
};
