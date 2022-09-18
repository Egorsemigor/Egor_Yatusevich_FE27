import { useContext } from "react";
import { Context } from "../../App";
import { Button } from "../Button";
import style from "./style.module.css";
interface ITemplate {
  title: string;
  body: string;
  textButton: string;
}
export const InfoTemplate = ({ title, body, textButton }: ITemplate) => {
  const values = useContext(Context);
  return (
    <div className={style.infoMain}>
      <h2 className={style.title}>{title}</h2>
      <p className={values.isDark ? style.darkBody : style.body}>{body}</p>
      <Button text={textButton} onClick={() => {}} />
    </div>
  );
};
