import React, { ChangeEventHandler, useContext, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import style from "./style.module.css";
import { Context } from "../../App";

export const LoginForm = () => {
  const values = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={values.isDark ? style.darkContainer : style.container}>
      <form>
        <div className={style.margin}>
          <div className={style.inputMargin}>
            <p className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }>Email</p>
            <Input value={email} placeholder={""} onChange={handlerEmail} />
          </div>
          <div className={style.inputMargin}>
            <p className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }>Password</p>
            <Input
              value={password}
              placeholder={""}
              onChange={handlerPassword}
            />
          </div>
        </div>
        <Button text={"Login"} onClick={() => {}} />
      </form>
      <p className={style.text}>
        Forgot your password?{` `}
        <a className={style.link} href="">
          Reset password
        </a>
      </p>
    </div>
  );
};
