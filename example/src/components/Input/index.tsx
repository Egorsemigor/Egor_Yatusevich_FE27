import { ChangeEventHandler } from "react";
import styles from "./style.module.css";

interface Input {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}
export const Input = (props: Input) => {
  return (
    <div className={styles.mainDiv}>
      <input
        className={`${styles.input} ${props.error ? styles.error : ""}`}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      ></input>
      <p className={styles.text}>{props.error}</p>
    </div>
  );
};
