import style from "./style.module.css";
import image from "./Rectangle.png";
import { IPost } from "../../types/posts";
import { ReactEventHandler, useContext, useState } from "react";
import { Context } from "../../App";

export const PostItem = (props: IPost) => {
  const [img, setImage] = useState(props.image);
  const { isDark } = useContext(Context);
  const handleError: ReactEventHandler<HTMLImageElement> = () => {
    setImage(image);
  };
  return (
    <div className={isDark ? style.darkPost : style.post}>
      {img ? (
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
