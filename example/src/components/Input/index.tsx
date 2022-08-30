import { ChangeEventHandler } from "react";
import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  return (
    <input
      className={styles.input}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  );
};
