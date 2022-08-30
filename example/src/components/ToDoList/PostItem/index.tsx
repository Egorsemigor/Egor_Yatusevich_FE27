import style from "./style.module.css";
import image from "./Rectangle.png";
interface IProps {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export const PostItem = (props: IProps) => {
  return (
    <div className={style.post}>
      {props.image ? (
        <img className={style.image} src={props.image} alt={props.title} />
      ) : (
        <img className={style.image} src={image} alt={props.title} />
      )}
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.text}>{props.text}</p>
      <p className={style.date}>{props.date}</p>
    </div>
  );
};
