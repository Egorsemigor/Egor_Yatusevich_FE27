import { IProps } from "../../../types/ToDO";
import { Button } from "../../Button";
import style from "./style.module.css";

export const ToDoItem = (props: IProps) => {
  return (
    <div className={style.container}>
      <div className={style.toDoPost}>
        <input className={style.check} type="checkbox" />
        <p className={style.text}>{props.text}</p>
        <Button onClick={props.onClickRemove} text={"Remove"} />
      </div>
    </div>
  );
};
