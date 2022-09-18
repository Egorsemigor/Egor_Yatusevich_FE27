import React, { ChangeEventHandler, useContext, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import style from "./style.module.css";
import { Context } from "../../App";

export const RegistrationForm = () => {
  const values = useContext(Context);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlerUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };
  const handlerEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handlerComfirmPassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div className={values.isDark ? style.darkContainer : style.container}>
      <form>
        <div className={style.margin}>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Username
            </p>
            <Input
              value={userName}
              placeholder={""}
              onChange={handlerUserName}
            />
          </div>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Email
            </p>
            <Input value={email} placeholder={""} onChange={handlerEmail} />
          </div>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Password
            </p>
            <Input
              value={password}
              placeholder={""}
              onChange={handlerPassword}
            />
          </div>
          <div className={style.inputMargin}>
            <p
              className={
                values.isDark ? style.darkInputTitle : style.InputTitle
              }
            >
              Confirm Password
            </p>
            <Input
              value={confirmPassword}
              placeholder={""}
              onChange={handlerComfirmPassword}
            />
          </div>
        </div>
        <Button text={"Login"} onClick={() => {}} />
      </form>
      <p className={style.text}>
        If you have account, you can{" "}
        <a className={style.link} href="">
          login
        </a>
      </p>
    </div>
  );
};
