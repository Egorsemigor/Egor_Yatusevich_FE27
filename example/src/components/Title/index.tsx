import React from "react";
<<<<<<< HEAD
import style from "./style.module.css";
interface Props {
  text: string;
}
export const Title = (props: Props) => {
  return <h1 className={style.title}>{props.text}</h1>;
};
=======
import style from './style.module.css'
interface Props {
    text: string;
}
export const Title = (props: Props) => {
    return(
        <div className={style.title}>{props.text}</div>
    )
}
>>>>>>> 42d188ce897cd37ac684fd3baef20a7f9d518dda
