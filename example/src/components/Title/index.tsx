import React from "react";
import style from './style.module.css'
interface Props {
    text: string;
}
export const Title = (props: Props) => {
    return(
        <div className={style.title}>{props.text}</div>
    )
}