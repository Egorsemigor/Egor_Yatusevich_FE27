import style from "./style.module.css";
interface IProps {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export const PostItem = (props: IProps) => {
  return (
    <div className={style.post}>
      <img className={style.image} src={props.image} alt="image" />
      <h3 className={style.title}>{props.title}</h3>
      <p className={style.text}>{props.text}</p>
      <p className={style.date}>{props.date}</p>
    </div>
  );
};
