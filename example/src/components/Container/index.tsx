import { ReactNode, useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";
interface IContainer {
  children: ReactNode;
}
export const Container = ({ children }: IContainer) => {
  const values = useContext(Context);
  return (
    <div className={values.isDark ? style.darkContainer : style.container}>
      <div className={style.widthContainer}>{children}</div>
    </div>
  );
};
