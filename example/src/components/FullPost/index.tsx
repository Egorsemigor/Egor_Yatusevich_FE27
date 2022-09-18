import style from "./style.module.css";
import image from "./Rectangle.png";
import { IPost } from "../../types/posts";
import { useContext } from "react";
import { Context } from "../../App";

export const FullPost = (props: IPost) => {
  const {isDark} = useContext(Context)
  return (
    <div className={style.container}>
      <div className={isDark ? style.darkPost : style.post}>
        {props.image ? (
          <img className={style.image} src={props.image} alt={props.title} />
        ) : (
          <img className={style.image} src={image} alt={props.title} />
        )}
        <h3 className={style.title}>{props.title}</h3>
        <p className={style.text}>{props.text}</p>
        <p className={style.date}>{props.date}</p>
      </div>
    </div>
  );
};
