import React, { ChangeEventHandler, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import style from "./style.module.css";

export const RegistrationForm = () => {
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
    <div className={style.container}>
      <form>
        <div>
          <p className={style.InputTitle}>Username</p>
          <Input value={userName} placeholder={""} onChange={handlerUserName} />
        </div>
        <div>
          <p className={style.InputTitle}>Email</p>
          <Input value={email} placeholder={""} onChange={handlerEmail} />
        </div>
        <div>
          <p className={style.InputTitle}>Password</p>
          <Input value={password} placeholder={""} onChange={handlerPassword} />
        </div>
        <div className={style.margin}>
          <p className={style.InputTitle}>Confirm Password</p>
          <Input
            value={confirmPassword}
            placeholder={""}
            onChange={handlerComfirmPassword}
          />
        </div>
        <Button text={"Login"} onClick={() => {}} />
      </form>
    </div>
  );
};
