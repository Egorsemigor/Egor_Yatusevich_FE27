import { useState } from "react";
import { Button } from "../../components/Button";
import style from "./style.module.css";
export const Clicker = () => {
  let [clickCount, setClickCount] = useState(0);
  const onClickPlus = () => {
    setClickCount(clickCount + 1);
  };
  const onClickMinus = () => {
    setClickCount(clickCount - 1);
  };
  const reset = () => {
    setClickCount(0);
  };

  return (
    <div className={style.clicker}>
      <h1 className={style.title}>{clickCount}</h1>
      {clickCount >= 10 ? "" : <Button text={"+"} onClick={onClickPlus} />}
      {clickCount <= 0 ? "" : <Button text={"-"} onClick={onClickMinus} />}
      <Button text={"Reset"} onClick={reset} />
    </div>
  );
};
